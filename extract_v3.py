
import fitz
import json
import re

# Configuration for file types
CONFIG = {
    "MEDICAS": {
        "path": r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-MEDICAS-DISP-74-25.pdf",
        "coords": {
            "code": (40, 95),       # X ranges
            "desc": (98, 530),
            "price1": (530, 580),
            "price2": (585, 640),
            "price3": (645, 710),
            "units": (715, 850)
        }
    },
    "BIOQUIMICA": {
        "path": r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-BIOQUIMICAS-DIC-2025.pdf",
        "coords": {
            "code": (90, 125),
            "desc": (128, 540),
            "price1": (540, 590),
            "price2": (595, 645),
            "price3": (650, 710),
            "units": (715, 850)
        }
    }
}

def extract_from_pdf(key, config):
    print(f"--- Extracting {key} ---")
    doc = fitz.open(config["path"])
    results = {}
    
    # Process pages (skip first 2-3 likely headers)
    start_page = 3
    
    for page_num in range(start_page, len(doc)):
        page = doc[page_num]
        words = page.get_text("words") # x0, y0, x1, y1, text
        
        # Group by line (Y coordinate, tolerance 3px)
        rows = {}
        for w in words:
            y = int(w[1])
            found = False
            for ey in rows:
                if abs(ey - y) < 4:
                    rows[ey].append(w)
                    found = True
                    break
            if not found:
                rows[y] = [w]
                
        # Sort rows by Y
        sorted_ys = sorted(rows.keys())
        
        c = config["coords"]
        
        for y in sorted_ys:
            row_words = sorted(rows[y], key=lambda x: x[0])
            
            # Extract fields by X coordinate
            code_parts = []
            desc_parts = []
            p1_parts = []
            p2_parts = [] # Potential Coseguro?
            unit_parts = []
            
            for w in row_words:
                x = w[0]
                text = w[4]
                
                if c["code"][0] <= x <= c["code"][1]:
                    code_parts.append(text)
                elif c["desc"][0] <= x <= c["desc"][1]:
                    desc_parts.append(text)
                elif c["price1"][0] <= x <= c["price1"][1]:
                    p1_parts.append(text)
                elif c["price2"][0] <= x <= c["price2"][1]:
                    p2_parts.append(text)
                elif c["units"][0] <= x <= c["units"][1]:
                    unit_parts.append(text)
                    
            if code_parts and (desc_parts or p1_parts):
                code = " ".join(code_parts).strip()
                # Normalize code (remove dots)
                clean_code = code.replace(".", "")
                
                # Check format (Bio usually 6 digits, Med xx.xx.xx)
                if len(clean_code) < 3: continue
                
                desc = " ".join(desc_parts).strip()
                price = " ".join(p1_parts).strip()
                units = " ".join(unit_parts).strip()
                
                # Handling "Coseguro" request:
                # We will map Price2 as "Coseguro" for now, or just leave it empty if not sure.
                # Actually, user wants "Coseguro". Usually it's a diff between Total and Coverage.
                # Let's verify values later. For now, store raw.
                
                results[clean_code] = {
                    "code": code, # Original with dots
                    "description": desc,
                    "price_hidden": price,
                    "coseguro": " ".join(p2_parts).strip(), # Placeholder
                    "bonos": units,
                    "source": key
                }
                
    print(f"Extracted {len(results)} items.")
    return results

def main():
    final_data = {
        "medicas": extract_from_pdf("MEDICAS", CONFIG["MEDICAS"]),
        "bioquimica": extract_from_pdf("BIOQUIMICA", CONFIG["BIOQUIMICA"])
    }
    
    # Generate JS file
    js_content = f"// Data V3 (Digital Extraction)\n"
    js_content += f"const medicasDataV3 = {json.dumps(list(final_data['medicas'].values()), indent=2)};\n"
    js_content += f"const biochemDataV3 = {json.dumps(list(final_data['bioquimica'].values()), indent=2)};\n"
    
    with open("data_v3.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print("Generated data_v3.js")

if __name__ == "__main__":
    main()
