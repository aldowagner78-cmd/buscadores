
import sys
import os

try:
    import fitz
    print("PyMuPDF (fitz) importado ok.")
except ImportError:
    print("PyMuPDF no instalado.")

try:
    import pytesseract
    from PIL import Image
    import io
    
    # Intentar configuración común de Windows si no está en PATH
    tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    if os.path.exists(tesseract_cmd):
        pytesseract.pytesseract.tesseract_cmd = tesseract_cmd
    else:
        # Try local app data or other common paths
        local_app = os.environ.get('LOCALAPPDATA', '')
        tesseract_local = os.path.join(local_app, 'Programs', 'Tesseract-OCR', 'tesseract.exe')
        if os.path.exists(tesseract_local):
            pytesseract.pytesseract.tesseract_cmd = tesseract_local
            
    print(f"Usando tesseract en: {pytesseract.pytesseract.tesseract_cmd}")
        
    print("pytesseract importado ok.")
    
    pdf_path = r"c:\Users\kengy\Desktop\Buscador\DG 0074-25.pdf"
    doc = fitz.open(pdf_path)
    page = doc[15]
    pix = page.get_pixmap()
    img_data = pix.tobytes("png")
    image = Image.open(io.BytesIO(img_data))
    
    text = pytesseract.image_to_string(image)
    print("--- Inicio OCR ---")
    print(text[:500])
    print("--- Fin OCR ---")
    
except ImportError:
    print("pytesseract o PIL no instalados.")
except Exception as e:
    print(f"Error ejecutando OCR: {e}")
