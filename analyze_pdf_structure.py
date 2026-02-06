
import fitz

pdf_path = r"c:\Users\kengy\Desktop\Buscador\DG 0074-25.pdf"

def analyze_layout(page_num=15): # Página aleatoria intermedia
    doc = fitz.open(pdf_path)
    page = doc[page_num]
    
    print(f"--- Análisis de Página {page_num} ---")
    blocks = page.get_text("blocks")
    
    # Ordenar por vertical y luego horizontal
    blocks.sort(key=lambda b: (b[1], b[0]))
    
    for b in blocks:
        x0, y0, x1, y1, text, block_no, block_type = b
        clean_text = text.replace('\n', ' ')[:50]
        print(f"X: {x0:.1f} - {x1:.1f} | Text: {clean_text}...")

if __name__ == "__main__":
    analyze_layout()
