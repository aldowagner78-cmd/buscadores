
import pandas as pd
import json
import re
import csv
import os

# Configuración de rutas
EXCEL_PATH = r"c:\Users\kengy\Desktop\Buscador\base calculo 2026 .xlsx"
CSV_PATH = r"c:\Users\kengy\Desktop\Buscador\codigos de compras.csv"
HTML_PATH = r"c:\Users\kengy\Desktop\Buscador\BUSCADOR.html"
OUTPUT_PATH = r"c:\Users\kengy\Desktop\Buscador_v2\data.js"

def normalize_code(code):
    """
    Normaliza el código:
    1. Convierte a string
    2. Elimina puntos y espacios
    3. Si es numérico, hace padding a 6 dígitos con ceros a la izquierda
    """
    s = str(code).strip().replace('.', '')
    if s.isdigit():
        return s.zfill(6)
    return s

def extract_iapos_from_excel():
    print(f"--- Extrayendo IAPOS desde Excel: {EXCEL_PATH} ---")
    items = []
    try:
        # Header en fila 3 (index 3), datos comienzan en fila 4
        df = pd.read_excel(EXCEL_PATH, sheet_name='NOMENCLADOR', header=3)
        for index, row in df.iterrows():
            raw_code = row.get('Cod_Practi')
            raw_desc = row.get('Practica') # Asumiendo columna 'Practica' para descripción
            
            # Si no hay columna Practica, buscar la columna 'Descripción' o similar
            if 'Practica' not in df.columns:
                # Intentar buscar columnas probables
                possible_cols = [c for c in df.columns if 'desc' in str(c).lower() or 'pract' in str(c).lower()]
                if possible_cols:
                    raw_desc = row.get(possible_cols[0])
            
            if pd.notna(raw_code) and str(raw_code).strip() != '':
                code = normalize_code(raw_code)
                desc = str(raw_desc).strip() if pd.notna(raw_desc) else "Sin descripción"
                items.append({"code": code, "description": desc})
                
        print(f"Extraídos {len(items)} registros de IAPOS del Excel.")
    except Exception as e:
        print(f"ERROR extrayendo IAPOS de Excel: {e}")
    return items

def extract_elementos_from_csv():
    print(f"--- Extrayendo Elementos desde CSV: {CSV_PATH} ---")
    items = []
    try:
        with open(CSV_PATH, 'r', encoding='utf-8', errors='replace') as f:
            reader = csv.reader(f, delimiter=';')
            next(reader, None) # Skip header
            for row in reader:
                if len(row) >= 3:
                    code = normalize_code(row[1])
                    desc = row[2].strip()
                    if code and desc:
                        items.append({"code": code, "description": desc})
        print(f"Extraídos {len(items)} registros de Elementos del CSV.")
    except Exception as e:
        print(f"ERROR extrayendo Elementos de CSV: {e}")
    return items

def extract_pmo_from_html():
    print(f"--- Extrayendo PMO desde HTML (Legacy): {HTML_PATH} ---")
    items = []
    try:
        with open(HTML_PATH, 'r', encoding='utf-8') as f:
            content = f.read()
            
        pattern = re.compile(r"const\s+pmoDataRaw\s*=\s*(\[.*?\]);", re.DOTALL)
        match = pattern.search(content)
        if match:
            # Parseo manual para mejor control
            raw_json = match.group(1)
            # Regex simple para objetos { "code": "...", "description": "..." }
            item_pattern = re.compile(r'\{\s*"code":\s*"([^"]+)",\s*"description":\s*"([^"]+)"\s*\}')
            for m in item_pattern.finditer(raw_json):
                code = normalize_code(m.group(1))
                desc = m.group(2)
                items.append({"code": code, "description": desc})
        print(f"Extraídos {len(items)} registros de PMO del HTML.")
    except Exception as e:
        print(f"ERROR extrayendo PMO de HTML: {e}")
    return items

def main():
    elementos = extract_elementos_from_csv()
    pmo = extract_pmo_from_html()
    iapos = extract_iapos_from_excel()
    
    # Si falla Excel IAPOS, intentar fallback a HTML (aunque el usuario quiere Excel)
    if not iapos:
        print("ADVERTENCIA: IAPOS vacío desde Excel. Fallback a HTML no implementado para forzar corrección.")
    
    js_content = f"""// Data file generated automatically by extract_data_v2.py
// Normalized to 6-digits (pad left with 0)

const elementosDataRaw = {json.dumps(elementos, ensure_ascii=False, indent=4)};

const pmoDataRaw = {json.dumps(pmo, ensure_ascii=False, indent=4)};

const iaposDataRaw = {json.dumps(iapos, ensure_ascii=False, indent=4)};
"""
    
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Generado {OUTPUT_PATH} con éxito.")

if __name__ == "__main__":
    main()
