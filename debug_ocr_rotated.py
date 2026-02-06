
import fitz
import pytesseract
from PIL import Image
import io
import os

# Tesseract Config
tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
if os.path.exists(tesseract_cmd):
    pytesseract.pytesseract.tesseract_cmd = tesseract_cmd

def check_page_rotated(page_num=15):
    pdf_path = r"c:\Users\kengy\Desktop\Buscador\DG 0074-25.pdf"
    doc = fitz.open(pdf_path)
    page = doc[page_num]
    
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
    img_data = pix.tobytes("png")
    full_img = Image.open(io.BytesIO(img_data))
    
    print(f"Original Size: {full_img.size}")
    
    # Apply Rotation
    full_img = full_img.rotate(-90, expand=True) # 90 CW
    print(f"Rotated Size: {full_img.size}")
    
    width, height = full_img.size
    
    # Definir columnas (basado en script principal)
    # Col 1 (Code): 0% a 18%
    col_code_img = full_img.crop((0, 0, int(width * 0.18), height))
    
    # Col 3 (Normative): 55% a 100%
    col_norm_img = full_img.crop((int(width * 0.55), 0, width, height))
    
    print("--- Left Col OCR ---")
    print(pytesseract.image_to_string(col_code_img)[:500])
    
    print("--- Right Col OCR ---")
    print(pytesseract.image_to_string(col_norm_img)[:500])

if __name__ == "__main__":
    check_page_rotated()
