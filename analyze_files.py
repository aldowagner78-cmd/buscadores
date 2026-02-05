
import sys
import os

def analyze_excel(path):
    print(f"\n--- Analizando Excel: {path} ---")
    try:
        import pandas as pd
        xl = pd.ExcelFile(path)
        print(f"Hojas encontradas: {xl.sheet_names}")
        for sheet in xl.sheet_names:
            print(f"\nHoja: '{sheet}'")
            df = xl.parse(sheet, nrows=5)
            print(f"Columnas: {list(df.columns)}")
            print("Primeras filas:")
            print(df.head(2))
    except ImportError:
        print("Error: pandas/openpyxl no instalado.")
    except Exception as e:
        print(f"Error analizando Excel: {e}")

def analyze_pdf(path):
    print(f"\n--- Analizando PDF: {path} ---")
    try:
        import fitz  # PyMuPDF
        doc = fitz.open(path)
        print(f"Páginas: {len(doc)}")
        
        # Check first page for text
        page = doc[0]
        text = page.get_text()
        if text.strip():
            print("Estado: El PDF contiene capa de texto (NO parece ser puramente escaneado/imagen).")
            print(f"Muestra de texto:\n{text[:200]}...")
        else:
            print("Estado: El PDF NO contiene texto extraíble fácilmente (Es probable que sea escaneado/imagen).")
            
    except ImportError:
        try:
            import pypdf
            reader = pypdf.PdfReader(path)
            if len(reader.pages) > 0:
                text = reader.pages[0].extract_text()
                if text.strip():
                    print("Estado: El PDF contiene capa de texto detectada por pypdf.")
                    print(f"Muestra de texto:\n{text[:200]}...")
                else:
                    print("Estado: El PDF parece ser imagen/escaneado (pypdf no extrajo texto).")
        except ImportError:
            print("Error: PyMuPDF (fitz) o pypdf no instalados.")
    except Exception as e:
        print(f"Error analizando PDF: {e}")

if __name__ == "__main__":
    pdf_path = r"c:\Users\kengy\Desktop\Buscador\DG 0074-25.pdf"
    xlsx_path = r"c:\Users\kengy\Desktop\Buscador\base calculo 2026 .xlsx"
    
    if os.path.exists(pdf_path):
        analyze_pdf(pdf_path)
    else:
        print(f"Archivo no encontrado: {pdf_path}")
        
    if os.path.exists(xlsx_path):
        analyze_excel(xlsx_path)
    else:
        print(f"Archivo no encontrado: {xlsx_path}")
