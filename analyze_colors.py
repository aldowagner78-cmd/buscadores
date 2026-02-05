
from PIL import Image
from collections import Counter

def get_dominant_colors(image_path, num_colors=5):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        image = image.resize((150, 150))      # Reduce size for faster processing
        pixels = list(image.getdata())
        counts = Counter(pixels)
        most_common = counts.most_common(num_colors)
        
        hex_colors = []
        for count in most_common:
            rgb = count[0]
            hex_color = '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])
            hex_colors.append(hex_color)
        
        return hex_colors
    except Exception as e:
        return str(e)

colors = get_dominant_colors(r"c:\Users\kengy\Desktop\Buscador\iapos.png")
print("Colores extraídos:", colors)
