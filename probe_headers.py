
import fitz

def probe_headers(path):
    print(f"Probing Headers: {path}")
    doc = fitz.open(path)
    # Check pages 1, 2, 3 where headers usually appear
    for p in range(1, 4):
        if p >= len(doc): break
        page = doc[p]
        print(f"\n--- Page {p+1} Text ---")
        text = page.get_text("text")
        lines = text.split('\n')
        # Print first 20 lines to see header table
        for line in lines[:20]:
            print(line.strip())

path_bio = r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-BIOQUIMICAS-DIC-2025.pdf"
probe_headers(path_bio)
