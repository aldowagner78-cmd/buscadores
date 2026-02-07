
# PROMPT MAESTRO: Especificación para Restart del Buscador Médico

**Rol:** Ingeniero Fullstack Senior (Python/JS). EXPERTO en UX/UI y Procesamiento de Datos.

**Contexto:**
El usuario necesita reconstruir una Web App Local (SPA) para buscar códigos médicos. La versión anterior falló por problemas de interfaz frágil (`innerHTML`) y datos incompletos. Se requiere una solución robusta y definitiva.

## 1. Arquitectura y Stack
*   **Backend (ETL):** Python (uso de `pymupdf` / `fitz`) para extraer datos de PDFs y CSVs.
*   **Frontend:** Vanilla JavaScript + HTML5 + Tailwind CSS (vía CDN local o embebido).
*   **Persistencia:** Archivo `data.js` generado por Python. No usar bases de datos complejas.

## 2. Fuentes de Datos (Extracción Digital Estricta)
Debes crear un script `extract_master.py` que procese **exclusivamente la capa de texto** (NO OCR) de estos 4 archivos:
1.  **Médicas (IAPOS):** `ARANCELES-PRACTICAS-MEDICAS-DISP-74-25.pdf`
    *   *Desafío:* El código suele estar en una línea (ej: `42.01.01`) y la descripción/normas abajo. Detectar bloques lógicos.
2.  **Bioquímica:** `ARANCELES-PRACTICAS-BIOQUIMICAS-DIC-2025.pdf`
    *   *Estructura:* Generalmente columnar.
3.  **Odontología:** `ARANCELES-PRACTICAS-ODONTOLOGICAS-NOV-2025.pdf`
    *   *Estructura:* Generalmente columnar.
4.  **Elementos:** `Normas-de-Trabajo-2024.pdf`y `codigos de compras.csv`
    *   *Estructura:* Texto libre con códigos dispersos.

**Requisitos de Datos:**
*   Generar `const searchData = { iapos: [], bioquimica: [], odontologia: [], elementos: [] };`
*   **Campos:** `code`, `description`, `normativa` (opcional, debe mostrarse en todas las tarjetas aunque no existan datos, esto incluye información como inclusiones, excusiones, criterios de autorización, etc), `price_hidden` (guardar valor monetario pero NO mostrarlo en UI, para futuro uso).
*   **Limpieza:** Eliminar encabezados de página, números de página y símbolos de moneda visibles en la descripción.

## 3. Motor de Búsqueda (Frontend)
El `script.js` debe implementar una clase `SearchEngine` con:
*   **Normalización Total (Clave del Éxito):**
    *   `normalize(str)`: Debe eliminar puntos, espacios, acentos y pasar a minúsculas.
    *   *Ejemplo:* Búsqueda "apend" -> Encuentra "Apendicectomía".
    *   *Ejemplo:* Búsqueda "100101" -> Encuentra "10.01.01".
*   **Filtrado:** Por código O descripción.

## 4. Interfaz de Usuario (UI/UX)
Restaurar el "Estilo Clásico Clean" (tomar como ejemplo el archivo index.html de la carpeta C:\Users\kengy\Desktop\Buscador_v2\Trabajo anterior) pero con ingeniería robusta. Agregar boton de limpiar resultados de búsqueda.

### A. Navegación
*   ** 4 Pestañas Grandes:** [Médicas (Rojo)] [Bioquímica (Verde)] [Odontología (Violeta)] [Elementos (Azul)].
*   Indicador visual claro de pestaña activa.

### B. Tarjetas de Resultado (Diseño)
*   Usa `document.createElement()` para todo. **PROHIBIDO usar `innerHTML`** para insertar texto de usuario (evita XSS y errores de comillas).
*   **Contenido:**
    *   Código (Fuente Mono, Negrita, Grande).
    *   Descripción (Legible).
    *   Badge de "Normativa Disponible" (si existe).
*   **Botonera de Acción (Granular):**
    1.  `[Copiar Código]`: Copia solo el código.
    2.  `[+ Nombre]`: Copia "Código Descripción".
    3.  `[Copiar Nota]`: Copia el texto normativo (visible solo si existe).
    4.  `[Ver Detalle]`: Abre modal.
    5.  `[Editar]`: Abre modo edición de tarjeta, con campos para completar manualmente. si el usuario presiona el boton,los campos que tienen contenido, deben tener el mismo contenido en el modo edición, no se puede perder el dato y la edición es a partir de los datos existentes.

### C. Modal de Detalle
*   Backdrop oscuro desenfocado.
*   Muestra toda la info.
*   Botón de cierre claro.
*   Cierra al hacer clic fuera o ESC.

### D. Features Extra
*   **Modo Oscuro:** Toggle funcional que persista en `localStorage`. Soporte completo de clases `dark:` en Tailwind.
*   **Valores Ocultos:** Los precios existen en el objeto JS pero NO se renderizan en el DOM por ahora.

## 5. Entregables Esperados
1.  `extract_master.py`: Script de extracción perfecto.
2.  `data.js`: Base de datos generada.
3.  `index.html`: Estructura base + Tailwind.
4.  `script.js`: Lógica robusta (DOM API + Normalización).

**Nota para la IA:** El usuario es exigente con la **calidad de la interacción** (clicks que funcionen siempre) y la **precisión de la búsqueda** (no frustrarse por un punto o un acento). Prioriza esto.
