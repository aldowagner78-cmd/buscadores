
import fitz
import re

files = {
    "MEDICAS": r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-MEDICAS-DISP-74-25.pdf",
    "BIOQUIMICA": r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-BIOQUIMICAS-DIC-2025.pdf",
    "ODONTO": r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-ODONTOLOGICAS-NOV-2025.pdf"
}

def analyze_columns(name, path):
    print(f"\n{'='*60}")
    print(f"ANALYZING STRUCTURE: {name}")
    try:
        doc = fitz.open(path)
        # Analizar página 5 (suele tener datos, no portada)
        page_num = 5 if len(doc) > 5 else 0
        page = doc[page_num]
        
        print(f"--- Page {page_num+1} Layout Analysis ---")
        
        # Obtener palabras con sus coordenadas rectangulares
        # words = [x0, y0, x1, y1, word, block_no, line_no, word_no]
        words = page.get_text("words")
        
        # Agrupar palabras por filas aproximadas (tolerancia Y)
        rows = {}
        y_tolerance = 3
        
        for w in words:
            y = w[1] # y0
            found_row = False
            for existing_y in rows.keys():
                if abs(y - existing_y) < y_tolerance:
                    rows[existing_y].append(w)
                    found_row = True
                    break
            if not found_row:
                rows[y] = [w]
                
        # Imprimir una muestra de filas para ver columnas
        sorted_ys = sorted(rows.keys())
        print(f"Detected {len(sorted_ys)} text lines. Showing header sample:")
        
        for y in sorted_ys[:20]: # Primeras 20 líneas
            row_words = sorted(rows[y], key=lambda x: x[0])
            # Construir visualización de columnas
            line_str = ""
            last_x = 0
            for w in row_words:
                pad = int((w[0] - last_x) / 5) # Espacio visual
                line_str += " " * pad + w[4]
                last_x = w[2]
            print(f"[Y={int(y):03}] {line_str}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    for k, v in files.items():
        analyze_columns(k, v)
