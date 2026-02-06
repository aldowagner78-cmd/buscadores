
import fitz
import json
import re

# Config for Medical PDF Normative Text Extraction
PDF_PATH = r"c:\Users\kengy\Desktop\Buscador\ARANCELES-PRACTICAS-MEDICAS-DISP-74-25.pdf"

def extract_clean_data():
    print(f"--- Extracting CLEAN Normative Data from {PDF_PATH} ---")
    doc = fitz.open(PDF_PATH)
    results = {}
    
    # Ranges based on previous analysis
    # Code: 40-95
    # Desc: 98-530
    # The "Normativa" text is often PART of the description column but spans multiple lines 
    # OR it's implicitly the text following the main description line.
    
    # Let's extract blocks directly.
    start_page = 3
    
    current_code = None
    current_desc_lines = []
    
    # Regex for code (xx.xx.xx or xxxxxx)
    code_pattern = re.compile(r'^\d{2}\.\d{2}\.\d{2}$')
    
    for page_num in range(start_page, len(doc)):
        page = doc[page_num]
        # Get text blocks sorted by vertical position
        # blocks: (x0, y0, x1, y1, text, block_no, block_type)
        blocks = page.get_text("blocks")
        blocks.sort(key=lambda b: (b[1], b[0]))
        
        for b in blocks:
            text = b[4].replace('\n', ' ').strip()
            if not text: continue
            
            # Heuristic: Is this a code line?
            # Check if line starts with a code
            parts = text.split(' ', 1)
            first_word = parts[0].strip()
            
            if code_pattern.match(first_word):
                # Save previous
                if current_code:
                    full_text = " ".join(current_desc_lines)
                    # Split main desc from norms if possible (often separated by . )
                    # For V3, let's just store specific known normative text if we find keywords
                    # OR just store the whole blob as 'normativa' if it's long.
                    
                    # Clean code for key
                    key = current_code.replace('.', '')
                    
                    results[key] = {
                        "code": current_code,
                        "description": full_text, # Placeholder, will refine
                        "raw_text": full_text
                    }
                
                current_code = first_word
                current_desc_lines = [parts[1]] if len(parts) > 1 else []
                
            elif current_code:
                # Append to current code's description/normative
                # filter out prices which are usually separate blocks on the right
                if b[0] < 500: # Only text column, ignore price columns at X > 530
                    current_desc_lines.append(text)

    # Process extracted text to separate Description from Normativa
    final_data = []
    
    for key, item in results.items():
        raw = item["raw_text"]
        
        # Split logic: Usually Desc is first sentence. Normative follows.
        # Check for 341201 specific case
        normativa = ""
        desc = raw
        
        # If raw is very long (>100 chars), likely contains norms
        if len(raw) > 80:
            # Try to split by first period? risky.
            # Let's check keywords
            if "Incluye:" in raw or "Excluye:" in raw or "Se reconoce" in raw:
                normativa = raw
                # Keep desc short? For now, let's just populate 'normativa' field with full text 
                # so script.js can show it.
        
        # Specific override for known issues
        if key == "341201":
            print(f"--> Found 341201: {raw[:100]}...")
        
        # Merge with previous V3 extraction logic (prices)
        # We need to output a merged JSON.
        # For this script, I'll just output a map of code -> normative_text
        
    return results

def merge_and_save():
    # Load existing data_v3.js logic (re-implementing simple merge here)
    # Actually, better to read the generated data_v3.js? No, it's JS file.
    # Let's import the previous extractor function or just run a new generation.
    
    # Import extraction logic from extract_v3 (I will rely on the previous script's output structure)
    # BUT I need to inject this new text.
    
    # Quick fix: Read data_v3.js, parse, update, save.
    try:
        with open("data_v3.js", "r", encoding="utf-8") as f:
            content = f.read()
            # Extract JSON parts
            match_med = re.search(r'const medicasDataV3 = (\[.*?\]);', content, re.DOTALL)
            match_bio = re.search(r'const biochemDataV3 = (\[.*?\]);', content, re.DOTALL)
            
            med_data = json.loads(match_med.group(1))
            bio_data = json.loads(match_bio.group(1))
            
            # Get digital text
            clean_texts = extract_clean_data()
            
            # Enrich Medica Data
            for item in med_data:
                clean_code = item['code'].replace('.', '')
                if clean_code in clean_texts:
                    raw_text = clean_texts[clean_code]['raw_text']
                    
                    # Improves description if valid
                    # item['description'] = ... 
                    # If the current description is empty or short, take from text
                    
                    # Assign to 'normativa' field which script.js V3 logic should prefer
                    # Need to CLEAN the normative text (remove title)
                    
                    # Logic: Description is usually the UPPERCASE start. Normative is mixed case.
                    # Simple heuristic:
                    item['normativa'] = raw_text
                    
                    # Fix description if it was truncated in previous column extraction
                    # (Previous script used fixed column width_
            
            # Save back
            js_content = f"// Data V3 (Digital Extraction + Clean Norms)\n"
            js_content += f"const medicasDataV3 = {json.dumps(med_data, indent=2)};\n"
            js_content += f"const biochemDataV3 = {json.dumps(bio_data, indent=2)};\n"
            
            with open("data_v3.js", "w", encoding="utf-8") as f:
                f.write(js_content)
                
            print("Successfully updated data_v3.js with clean normative text.")
            
    except Exception as e:
        print(f"Error merging: {e}")

if __name__ == "__main__":
    merge_and_save()
