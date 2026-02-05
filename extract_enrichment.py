
import pandas as pd
import fitz  # PyMuPDF
import json
import re
import os

# Configuración de Archivos
PDF_PATH = r"c:\Users\kengy\Desktop\Buscador\DG 0074-25.pdf"
EXCEL_PATH = r"c:\Users\kengy\Desktop\Buscador\base calculo 2026 .xlsx"
OUTPUT_PATH = r"c:\Users\kengy\Desktop\Buscador_v2\enriched_data.js"

enriched_data = {}

def clean_text(text):
    if not text: return ""
    # Correcciones básicas de OCR
    text = text.replace('Constituci6n', 'Constitución')
    return text.strip()

def extract_from_excel(path):
    print("Extrayendo Excel...")
    try:
        # Leer hoja NOMENCLADOR (asumiendo estructura tabular)
        # Ajustar 'header' según el análisis previo (parecía tener 2 filas de encabezado o vacías)
        df = pd.read_excel(path, sheet_name='NOMENCLADOR', header=1) 
        
        # Normalizar nombres de columnas para facilitar búsqueda
        df.columns = [str(c).strip().lower() for c in df.columns]
        
        count = 0
        for index, row in df.iterrows():
            # Buscar columna que parezca código
            code = None
            for col in df.columns:
                if 'codigo' in col or 'código' in col:
                    code = str(row[col]).strip()
                    break
            
            if not code or code == 'nan':
                continue
                
            # Guardar todos los datos útiles de la fila
            row_data = {}
            for col in df.columns:
                if 'unnamed' not in col:
                    val = str(row[col]).strip()
                    if val and val != 'nan':
                        row_data[col] = val
            
            if code not in enriched_data:
                enriched_data[code] = {}
            
            enriched_data[code]['excel_info'] = row_data
            count += 1
            
        print(f"Excel: Procesados {count} registros.")
        
    except Exception as e:
        print(f"Error procesando Excel: {e}")

def extract_from_pdf(path):
    print("Extrayendo PDF...")
    try:
        doc = fitz.open(path)
        full_text = ""
        for page in doc:
            full_text += page.get_text() + "\n"
            
        # Lógica heurística para encontrar patrones de Códigos (ej. 42.01.01) y descripciones/normas
        # Esto requerirá ajuste fino viendo el output real
        
        # Ejemplo simple: buscar patrones de código "NN.NN.NN"
        # Adapta esto según el formato real de códigos del PDF
        pattern = re.compile(r'(\d{2,}\.\d{2,}\.\d{2,})\s+(.+?)(?=\d{2,}\.\d{2,}\.\d{2,}|\Z)', re.DOTALL)
        
        matches = pattern.findall(full_text)
        print(f"PDF: Encontrados {len(matches)} posibles códigos con regex.")
        
        for code, raw_desc in matches:
            clean_code = code.replace('.', '') # Estandarizar si es necesario
            clean_desc = clean_text(raw_desc)
            
            if clean_code not in enriched_data:
                enriched_data[clean_code] = {}
                
            enriched_data[clean_code]['pdf_info'] = {
                'source': 'Disposición 0074-25',
                'raw_text': clean_desc
            }
            
    except Exception as e:
        print(f"Error procesando PDF: {e}")

def save_js():
    js_content = f"const enrichedDataRaw = {json.dumps(enriched_data, indent=2, ensure_ascii=False)};"
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Datos guardados en {OUTPUT_PATH}")

if __name__ == "__main__":
    extract_from_excel(EXCEL_PATH)
    extract_from_pdf(PDF_PATH)
    save_js()
