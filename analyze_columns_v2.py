
import fitz

def analyze_page_columns(path, page_num=5):
    doc = fitz.open(path)
    page = doc[page_num]
    words = page.get_text("words")
    # words: (x0, y0, x1, y1, "string", block_no, line_no, word_no)
    
    # Sort by Y then X
    words.sort(key=lambda w: (int(w[1]), w[0]))
    
    output = []
    output.append(f"Analysis of {path} - Page {page_num}")
    
    current_y = -1
    line_buffer = []
    
    for w in words:
        y = int(w[1])
        if current_y != -1 and abs(y - current_y) > 3:
            # Process buffer
            line_str = ""
            for wb in line_buffer:
                # Format: [x0] Text
                line_str += f"[{int(wb[0]):03d}] {wb[4]} "
            output.append(f"Y={current_y:03d}: {line_str}")
            line_buffer = []
            current_y = y
        elif current_y == -1:
            current_y = y
            
        line_buffer.append(w)
        
    # Last line
    if line_buffer:
        line_str = ""
        for wb in line_buffer:
            line_str += f"[{int(wb[0]):03d}] {wb[4]} "
        output.append(f"Y={current_y:03d}: {line_str}")
        
    with open("debug_columns.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(output))
        
    print("Debug columns written.")

path_med = r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-MEDICAS-DISP-74-25.pdf"
analyze_page_columns(path_med, 5)
