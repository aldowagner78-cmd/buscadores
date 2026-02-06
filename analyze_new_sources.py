
import fitz
import os

files = [
    r"c:\Users\kengy\Desktop\Buscador\Normas-de-Trabajo-2024.pdf",
    r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-ODONTOLOGICAS-NOV-2025.pdf",
    r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-MEDICAS-DISP-74-25.pdf",
    r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-BIOQUIMICAS-DIC-2025.pdf"
]

def analyze_pdf(path):
    print(f"\n{'='*50}")
    print(f"ANALYZING: {os.path.basename(path)}")
    try:
        doc = fitz.open(path)
        print(f"Pages: {len(doc)}")
        
        # Check first 3 pages
        for i in range(min(3, len(doc))):
            page = doc[i]
            text = page.get_text("text")
            print(f"\n--- Page {i+1} Sample ({len(text)} chars) ---")
            print(text[:500].replace('\n', ' | '))
            
            # Check for images if text is empty
            if len(text.strip()) < 10:
                images = page.get_images()
                print(f"  [!] No text found. Images on page: {len(images)}")
            
    except Exception as e:
        print(f"ERROR: {e}")

if __name__ == "__main__":
    for f in files:
        if os.path.exists(f):
            analyze_pdf(f)
        else:
            print(f"File not found: {f}")
