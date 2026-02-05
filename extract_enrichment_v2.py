
import pandas as pd
import fitz
import json
import re
import os

# Configuración
EXCEL_PATH = r"c:\Users\kengy\Desktop\Buscador\base calculo 2026 .xlsx"
OUTPUT_PATH = r"c:\Users\kengy\Desktop\Buscador_v2\enriched_data.js"

enriched_data = {}

def clean_code(code):
    """Elimina puntos y espacios de los códigos (ej: 01.01.01 -> 010101)"""
    return str(code).replace('.', '').strip()

def extract_excel():
    print(f"--- Procesando Excel: {EXCEL_PATH} ---")
    try:
        # El sondeo mostró que la cabecera está en la fila 3 (índice 3, fila 4 de Excel)
        # y los datos empiezan en la fila 4 (índice 4).
        # pandas 'header=3' tomará la 4ta fila como cabecera.
        df = pd.read_excel(EXCEL_PATH, sheet_name='NOMENCLADOR', header=3)
        
        # Limpiar nombres de columnas
        df.columns = [str(col).strip() for col in df.columns]
        
        count = 0
        for index, row in df.iterrows():
            raw_code = row.get('Cod_Practi')
            
            # Validar que sea un código válido
            if pd.isna(raw_code) or str(raw_code).strip() == '':
                continue
                
            code = clean_code(raw_code)
            
            # Construir objeto de info extra
            info = {
                'galenos': str(row.get('GALENOS', '')),
                'gts': str(row.get('GTS', '')),
                'total': str(row.get('TOTAL', '')),
                'categoria': 'Nomenclador 2026', # Metadato fijo
                'ayudantes': str(row.get('Ayudantes', '')),
                'especialista': str(row.get('Especialista', '')),
                'gastos': str(row.get('Gtos', ''))
            }
            
            # Limpiar valores 'nan'
            clean_info = {k: v for k, v in info.items() if v != 'nan' and v != 'None'}
            
            enriched_data[code] = clean_info
            count += 1
            
        print(f"Éxito: {count} registros extraídos del Excel.")
        
    except Exception as e:
        print(f"Error crítico en Excel: {e}")

def save_js():
    # Guardar como objeto global JS explícito (window) para asegurar acceso
    js_content = f"// Datos generados automáticamente desde Excel\nwindow.enrichedDataRaw = {json.dumps(enriched_data, indent=2, ensure_ascii=False)};"
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Archivo generado: {OUTPUT_PATH}")

if __name__ == "__main__":
    if os.path.exists(EXCEL_PATH):
        extract_excel()
        save_js()
    else:
        print("No se encontró el archivo Excel.")
