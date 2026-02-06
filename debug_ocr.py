
import fitz
import pytesseract
from PIL import Image
import io
import os

# Tesseract Config
tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
if os.path.exists(tesseract_cmd):
    pytesseract.pytesseract.tesseract_cmd = tesseract_cmd

def check_page(page_num=15):
    pdf_path = r"c:\Users\kengy\Desktop\Buscador\DG 0074-25.pdf"
    doc = fitz.open(pdf_path)
    page = doc[page_num]
    
    # 1. Check metadata rotation
    print(f"Page Rotation: {page.rotation}")
    
    # 2. Render and OSD (Orientation Script Detection)
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
    img_data = pix.tobytes("png")
    image = Image.open(io.BytesIO(img_data))
    
    try:
        osd = pytesseract.image_to_osd(image)
        print("--- OSD Result ---")
        print(osd)
    except Exception as e:
        print(f"OSD Failed: {e}")
        
    # 3. Print first 500 chars raw extraction
    print("--- Raw Text Sample ---")
    text = pytesseract.image_to_string(image)
    print(text[:500])

    # 4. Check Left Column Crop
    w, h = image.size
    col_code = image.crop((0, 0, int(w*0.20), h))
    print("--- Left Col Sample ---")
    print(pytesseract.image_to_string(col_code)[:200])

if __name__ == "__main__":
    check_page()
