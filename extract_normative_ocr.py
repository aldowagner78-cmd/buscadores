
import fitz
import pytesseract
from PIL import Image
import io
import json
import re
import os

# Configuración
PDF_PATH = r"c:\Users\kengy\Desktop\Buscador\DG 0074-25.pdf"
OUTPUT_PATH = r"c:\Users\kengy\Desktop\Buscador_v2\enriched_data.js"
DATA_JS_PATH = r"c:\Users\kengy\Desktop\Buscador_v2\data.js"

# Tesseract Path Configuration
tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
if os.path.exists(tesseract_cmd):
    pytesseract.pytesseract.tesseract_cmd = tesseract_cmd
else:
    local_app = os.environ.get('LOCALAPPDATA', '')
    tesseract_local = os.path.join(local_app, 'Programs', 'Tesseract-OCR', 'tesseract.exe')
    if os.path.exists(tesseract_local):
        pytesseract.pytesseract.tesseract_cmd = tesseract_local

# Cargar códigos válidos para validación
valid_codes = set()
try:
    with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
        # Buscar todos los códigos en data.js
        matches = re.findall(r'"code":\s*"(\d+)"', content)
        valid_codes = set(matches)
    print(f"Cargados {len(valid_codes)} códigos válidos de referencia.")
except Exception as e:
    print(f"Advertencia: No se pudo cargar data.js para validación: {e}")

enriched_data = {}

def normalize_code(text):
    # Intentar extraer 6 dígitos o XX.XX.XX
    clean = text.replace('.', '').replace(' ', '').strip()
    match = re.search(r'(\d{6})', clean)
    if match:
        return match.group(1)
    return None

def extract_normative_data():
    doc = fitz.open(PDF_PATH)
    total_pages = len(doc)
    print(f"Procesando {total_pages} páginas del PDF...")
    
    # Procesar un rango o todo (ajustar según tiempo)
    # Procesamos todo porque es crítico, pero mostramos progreso
    
    for page_num in range(total_pages):
        # Optimización: Saltar índice o páginas vacías si se detectan
        # Por ahora procesamos linealmente
        
        try:
            page = doc[page_num]
            # Renderizar página completa a alta resolución
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) 
            img_data = pix.tobytes("png")
            full_img = Image.open(io.BytesIO(img_data))
            
            # Corrección de Rotación (Detectado 270 grados en OSD -> Rotar 90 CW para enderezar)
            # PIL rotate es Counter-Clockwise. Para 90 CW usamos -90 (o 270).
            full_img = full_img.rotate(-90, expand=True)
            
            width, height = full_img.size
            
            # Definir columnas (basado en análisis visual aproximado)
            # Col 1 (Code): 0% a 15%
            # Col 3 (Normative): 60% a 100%
            
            col_code_img = full_img.crop((0, 0, int(width * 0.18), height))
            col_norm_img = full_img.crop((int(width * 0.55), 0, width, height))
            
            # OCR Columna Código (modo sparse text)
            code_text_data = pytesseract.image_to_data(col_code_img, output_type=pytesseract.Output.DICT, config='--psm 6')
            
            # OCR Columna Normativa (modo bloques)
            norm_text_data = pytesseract.image_to_data(col_norm_img, output_type=pytesseract.Output.DICT, config='--psm 6')
            
            # Análisis de filas
            # Buscamos códigos en la columna izquierda y usamos su posición Y como ancla
            
            current_code = None
            current_code_y = 0
            
            page_mappings = [] # [(code, y_start, y_end_approx)]
            
            n_boxes = len(code_text_data['text'])
            for i in range(n_boxes):
                text = code_text_data['text'][i].strip()
                if not text: continue
                
                # Validar si parece código
                code = normalize_code(text)
                
                # Si encontramos un código válido (o parecido)
                if code and (code in valid_codes or code.startswith('0') or code.startswith('1') or code.startswith('2') or code.startswith('3')):
                    # Check confidence?
                    # if int(code_text_data['conf'][i]) < 50: continue
                    
                    y = code_text_data['top'][i]
                    h = code_text_data['height'][i]
                    
                    if current_code:
                        # Cerrar el anterior
                        page_mappings[-1]['h_limit'] = y
                    
                    page_mappings.append({
                        'code': code,
                        'y': y,
                        'h': h,
                        'h_limit': height # Default to end of page
                    })
                    current_code = code
            
            # Extraer texto normativo para cada código mapeado
            for mapping in page_mappings:
                code = mapping['code']
                y_start = mapping['y'] - 10 # Tolerancia
                y_end = mapping['h_limit']
                
                # Buscar texto en col_norm que caiga en este rango Y
                norm_text_buffer = []
                
                n_norm = len(norm_text_data['text'])
                for j in range(n_norm):
                    t_y = norm_text_data['top'][j]
                    t_text = norm_text_data['text'][j].strip()
                    
                    if not t_text: continue
                    
                    # Si el texto está dentro del rango vertical de este código
                    if y_start <= t_y < y_end:
                        norm_text_buffer.append(t_text)
                
                full_text = " ".join(norm_text_buffer)
                
                if len(full_text) > 5: # Ignorar ruido
                    # Parsear keywords
                    info = {'text': full_text}
                    
                    # Simple parsing logic
                    lower_text = full_text.lower()
                    
                    if "incluye:" in lower_text:
                        parts = full_text.split("Incluye:")
                        # Disclaimer: This is rudimentary. Regex is better if structure is consistent.
                        # Pero el OCR a veces rompe mayúsculas.
                        pass 
                    
                    # Regex Extraction attempt
                    # Incluye
                    inc_match = re.search(r'Incluye:?\s*(.*?)(Excluye:|Observac|Criterios|$)', full_text, re.IGNORECASE | re.DOTALL)
                    if inc_match: info['incluye'] = inc_match.group(1).strip()
                    
                    # Excluye
                    exc_match = re.search(r'Excluye:?\s*(.*?)(Observac|Criterios|$)', full_text, re.IGNORECASE | re.DOTALL)
                    if exc_match: info['excluye'] = exc_match.group(1).strip()
                    
                    # Criterios
                    crit_match = re.search(r'Criterios.*?:?\s*(.*?)(Observac|Incluye|$)', full_text, re.IGNORECASE | re.DOTALL)
                    if crit_match: info['criterios'] = crit_match.group(1).strip()
                    
                    # Observacion
                    obs_match = re.search(r'Observac.*?:?\s*(.*?)(Incluye|Excluye|$)', full_text, re.IGNORECASE | re.DOTALL)
                    if obs_match: info['observacion'] = obs_match.group(1).strip()
                    
                    # Sanitización: Evitar guardar basura financiera (ej. solo precios)
                    has_relevant_data = any(k in info for k in ['incluye', 'excluye', 'criterios', 'observacion'])
                    
                    if has_relevant_data:
                        enriched_data[code] = info
                        print(f"✅ Code {code}: Saved Normative Data ({list(info.keys())})")
                    else:
                        # HEURÍSTICA RELAJADA (Fix para Densitometría y otros)
                        # Si tiene texto considerable (> 10 chars) y NO es puramente financiero (contiene letras)
                        # Lo guardamos como texto genérico 'text'
                        
                        # Contar letras vs longitud total
                        letters = sum(c.isalpha() for c in full_text)
                        
                        if len(full_text) > 15 and letters > 5:
                             # Es probable que sea una descripción técnica sin keywords
                             info['text'] = full_text
                             enriched_data[code] = info
                             print(f"⚠️ Code {code}: Saved Generic Text (Length {len(full_text)})")
                        pass

            if page_num % 5 == 0:
                print(f"Procesada página {page_num}/{total_pages} - Encontrados {len(enriched_data)} códigos normativos.")
                
        except Exception as e:
            print(f"Error en página {page_num}: {e}")

    # Guardar
    js_content = f"// Datos Normativos OCR del PDF\nwindow.enrichedDataRaw = {json.dumps(enriched_data, indent=2, ensure_ascii=False)};"
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Generado {OUTPUT_PATH} con {len(enriched_data)} registros.")

if __name__ == "__main__":
    extract_normative_data()
