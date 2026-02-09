# PROMPT MAESTRO: CONEXIÓN A NUBE (SUPABASE)

**Objetivo:** Conectar la aplicación web existente ("Buscador Médico") a una base de datos en la nube (Supabase) para que las ediciones de "Normamtivas" se guarden y sincronicen entre todos los usuarios y dispositivos.
**Estado Actual UI:** La interfaz ya funciona perfecta. NO CAMBIAR NADA VISUAL.
**Problema:** Actualmente usa `localStorage` (solo guarda en el navegador local). Necesitamos `supabase-js`.

## Credenciales del Proyecto (YA CREADO)
*   **Plataforma:** Supabase
*   **Proyecto:** `BuscaMed`
*   **URL del Proyecto:** `https://cosnaaecpdkfwucrnsiv.supabase.co`
*   **Anon Key (Pública):** `sb_publishable_-b_9uSpVycqVCqzC_Wb2_A_soVCvdgT`

## Instrucciones Técnicas para la IA

### 1. Base de Datos (SQL)
Asegúrate de que esta tabla exista en el Editor SQL de Supabase:
```sql
create table normativas_custom (
  id uuid default uuid_generate_v4() primary key,
  code text not null unique,
  description text,
  normativa text,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);
-- Políticas de seguridad (RLS) permisivas para demo
alter table normativas_custom enable row level security;
create policy "Acceso Publico Total" on normativas_custom for all using (true) with check (true);
```

### 2. Frontend (`index.html`)
Debes incluir la librería de Supabase (usar `unpkg` por estabilidad):
```html
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
```

### 3. Lógica (`script.js`)
El script debe:
1.  Inicializar el cliente con las credenciales de arriba.
2.  Al cargar la página (`DOMContentLoaded`): Descargar todas las filas de `normativas_custom` y guardarlas en un objeto local `userOverrides`.
3.  Al guardar una edición: Hacer un `upsert` a la tabla `normativas_custom` buscando por la columna `code`.

**Snippet de Inicialización Robusta:**
```javascript
const SUPABASE_URL = 'https://cosnaaecpdkfwucrnsiv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-b_9uSpVycqVCqzC_Wb2_A_soVCvdgT';
let supabase = null;

if (window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('Supabase conectado');
} else {
    console.error('Error: Librería Supabase no cargó');
}
```

## Despliegue
El proyecto se sirve desde GitHub Pages.
La URL final para el usuario es: **https://aldowagner78-cmd.github.io/buscadores/**
(Nota: En local `file://` fallará por CORS, es normal. Probar siempre en la URL de GitHub).
