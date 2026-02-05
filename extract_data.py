
import re
import csv
import json
import os

# Paths
html_path = r"c:\Users\kengy\Desktop\Buscador\BUSCADOR.html"
csv_path = r"c:\Users\kengy\Desktop\Buscador\codigos de compras.csv"
output_path = r"c:\Users\kengy\Desktop\Buscador_v2\data.js"

def extract_array_from_html(file_path, var_name):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to find the array definition: const var_name = [ ... ];
    # Using dotall to match across lines
    pattern = re.compile(rf"const\s+{var_name}\s*=\s*(\[.*?\]);", re.DOTALL)
    match = pattern.search(content)
    
    if match:
        json_str = match.group(1)
        # The content inside HTML is likely valid JS object literals, but maybe not valid JSON (keys without quotes?)
        # Inspecting the file: { "code": "...", "description": "..." } -> Keys have quotes. Good.
        # But it might differ. Let's try `json.loads` first, if fails, use `eval` (safe-ish here) or regex parsing.
        try:
            return json.loads(json_str)
        except json.JSONDecodeError:
            # If standard JSON fails (e.g. trailing commas, comments), use regex to extract objects
            print(f"Standard JSON decode failed for {var_name}, trying manual extraction...")
            items = []
            # Find all { "code": "...", "description": "..." }
            # Assuming simple structure
            item_pattern = re.compile(r'\{\s*"code":\s*"([^"]+)",\s*"description":\s*"([^"]+)"\s*\}')
            for m in item_pattern.finditer(json_str):
                items.append({"code": m.group(1), "description": m.group(2)})
            return items
    else:
        print(f"Could not find variable {var_name}")
        return []

def parse_csv(file_path):
    items = []
    try:
        with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
            reader = csv.reader(f, delimiter=';')
            next(reader, None) # Skip header
            for row in reader:
                if len(row) >= 3:
                    code = row[1].strip()
                    desc = row[2].strip()
                    if code and desc:
                        items.append({"code": code, "description": desc})
    except Exception as e:
        print(f"Error parsing CSV: {e}")
    return items

def main():
    print("Extracting PMO data...")
    pmo_data = extract_array_from_html(html_path, "pmoDataRaw")
    print(f"Extracted {len(pmo_data)} PMO items.")

    print("Extracting IAPOS data...")
    iapos_data = extract_array_from_html(html_path, "iaposDataRaw")
    print(f"Extracted {len(iapos_data)} IAPOS items.")

    print("Parsing Elementos data from CSV...")
    elementos_data = parse_csv(csv_path)
    print(f"Parsed {len(elementos_data)} Elementos items.")

    # Generate JS content
    js_content = f"""// Data file generated automatically
// Contains: Elementos (from CSV), PMO (from HTML), IAPOS (from HTML)

const elementosDataRaw = {json.dumps(elementos_data, ensure_ascii=False, indent=4)};

const pmoDataRaw = {json.dumps(pmo_data, ensure_ascii=False, indent=4)};

const iaposDataRaw = {json.dumps(iapos_data, ensure_ascii=False, indent=4)};

// Export for usage if using modules, or just global if simple script inclusion
// We will use globals for simplicity as per original design, or consider ES modules.
// For now, let's keep the arrays. The dedup logic will be in script.js or here.
"""
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Successfully wrote data to {output_path}")

if __name__ == "__main__":
    main()
