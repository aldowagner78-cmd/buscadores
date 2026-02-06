
import pandas as pd

file_path = r"c:\Users\kengy\Desktop\Buscador\base calculo 2026 .xlsx"

try:
    xl = pd.ExcelFile(file_path)
    print(f"Hojas encontradas: {xl.sheet_names}")
except Exception as e:
    print(f"Error: {e}")
