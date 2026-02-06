
import fitz

def probe(path):
    print(f"Probing: {path}")
    doc = fitz.open(path)
    # Page 1 usually header, Page 4-5 usually data
    for p_num in [4, 5]: 
        if p_num >= len(doc): continue
        page = doc[p_num]
        print(f"\n--- Page {p_num+1} Raw Text ---")
        text = page.get_text("text")
        lines = text.split('\n')
        for i, line in enumerate(lines[:20]):
            print(f"[{i:02d}] {line!r}")

files = [
    r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-BIOQUIMICAS-DIC-2025.pdf",
    r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-MEDICAS-DISP-74-25.pdf"
]

for f in files:
    probe(f)
