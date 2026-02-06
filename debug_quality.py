
import fitz
import pytesseract
from PIL import Image, ImageOps, ImageFilter
import io
import os
import re

# Config Tesseract
tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
if os.path.exists(tesseract_cmd):
    pytesseract.pytesseract.tesseract_cmd = tesseract_cmd

def find_and_debug_code(target_code="341201"):
    pdf_path = r"c:\Users\kengy\Desktop\Buscador\DG 0074-25.pdf"
    doc = fitz.open(pdf_path)
    
    print(f"Buscando código {target_code} en {len(doc)} páginas...")
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        
        # 1. Obtener imagen de página (Zoomeada para mejor OCR)
        zoom = 3 # Aumentamos zoom a 3x (antes 2x) para ver si mejora
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat)
        img_data = pix.tobytes("png")
        full_img = Image.open(io.BytesIO(img_data))
        
        # 2. Rotar 90 CW (equivale a -90)
        full_img = full_img.rotate(-90, expand=True)
        w, h = full_img.size
        
        # 3. Recorte de Columna CÓDIGOS (aprox 0-15% ancho)
        # Ajustamos márgenes para evitar bordes negros
        code_roi = full_img.crop((int(w*0.02), 0, int(w*0.15), h))
        
        # OCR rápido solo numérico para encontrar la fila del código
        # psm 6 = Assume block of text
        code_text = pytesseract.image_to_string(code_roi, config='--psm 6 -c tessedit_char_whitelist=0123456789.').strip()
        
        if target_code in code_text:
            print(f"Encontrado {target_code} en página {page_num}!")
            
            # Intentar localizar la coordenada Y aproximada del código
            # O simplemente dumpear toda la columna normativa de esta página para ver la calidad
            
            # Recorte Columna NORMATIVA (aprox 55% al 100%)
            norm_roi = full_img.crop((int(w*0.55), 0, w, h))
            
            # Guardar imagenes de debug
            debug_path_raw = f"debug_page_{page_num}_raw.png"
            norm_roi.save(debug_path_raw)
            print(f"Guardada imagen RAW: {debug_path_raw}")
            
            # --- PROBAR MEJORAS (FILTROS) ---
            
            # 1. Grayscale
            gray = norm_roi.convert('L')
            
            # 2. Thresholding (Binarización agresiva)
            # Todo lo que no sea muy oscuro se vuelve blanco (eliminar fondo gris/ruido)
            threshold = 160 
            binary = gray.point(lambda p: 255 if p > threshold else 0)
            
            # 3. Guardar imagen procesada
            debug_path_proc = f"debug_page_{page_num}_proc.png"
            binary.save(debug_path_proc)
            print(f"Guardada imagen PROCESADA: {debug_path_proc}")
            
            # 4. OCR en la procesada
            text = pytesseract.image_to_string(binary, lang='spa', config='--psm 6')
            print("\n--- OCR RAW Results ---")
            print(pytesseract.image_to_string(norm_roi, lang='spa', config='--psm 6')[:500])
            print("\n--- OCR PROCESSED Results ---")
            print(text[:500])
            
            return
            
    print("Código no encontrado.")

if __name__ == "__main__":
    find_and_debug_code()
