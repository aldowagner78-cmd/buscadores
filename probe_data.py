
import pandas as pd
import fitz
import sys

OUTPUT_FILE = r"c:\Users\kengy\Desktop\Buscador_v2\probe_output.txt"

def probe():
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        # Excel
        xlsx_path = r"c:\Users\kengy\Desktop\Buscador\base calculo 2026 .xlsx"
        try:
            f.write("=== EXCEL PROBE ===\n")
            df = pd.read_excel(xlsx_path, sheet_name='NOMENCLADOR', header=None, nrows=10)
            f.write(df.to_string())
            f.write("\n\n")
        except Exception as e:
            f.write(f"Error Excel: {e}\n")

        # PDF
        pdf_path = r"c:\Users\kengy\Desktop\Buscador\DG 0074-25.pdf"
        try:
            f.write("=== PDF PROBE (First 3 Pages) ===\n")
            doc = fitz.open(pdf_path)
            for i in range(min(3, len(doc))):
                f.write(f"--- Page {i+1} ---\n")
                f.write(doc[i].get_text())
                f.write("\n")
        except Exception as e:
            f.write(f"Error PDF: {e}\n")

if __name__ == "__main__":
    probe()
