
import fitz

def find_headers(path):
    doc = fitz.open(path)
    for p in range(5):
        page = doc[p]
        text = page.get_text("text").upper()
        if "COSEGURO" in text or "BONO" in text or "AFILIADO" in text:
            print(f"FOUND KEYWORDS ON PAGE {p+1}")
            words = page.get_text("words")
            # Filter words near top of page (header area)
            header_words = [w for w in words if w[1] < 200]
            header_words.sort(key=lambda x: (int(x[1]), x[0]))
            
            line_str = ""
            last_y = 0
            for w in header_words:
                if abs(w[1] - last_y) > 5:
                    print(line_str)
                    line_str = ""
                    last_y = w[1]
                line_str += f"{w[4]} ({int(w[0])}) "
            print(line_str)

path_bio = r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-BIOQUIMICAS-DIC-2025.pdf"
find_headers(path_bio)
