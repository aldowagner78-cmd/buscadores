/**
 * Buscador Médico IAPOS v3.0 (Cloud Edition)
 * Motor de búsqueda robusto con Sincronización en Nube (Supabase)
 */

// --- Supabase Config & Fallback ---
const SUPABASE_URL = 'https://cosnaaecpdkfwucrnsiv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-b_9uSpVycqVCqzC_Wb2_A_soVCvdgT';
let supabaseClient = null;

try {
    const lib = window.supabase;
    if (lib && typeof lib.createClient === 'function') {
        supabaseClient = lib.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log('✅ Supabase conectado correctamente.');
    } else {
        console.warn('⚠️ Librería Supabase no cargada. Funcionando en modo OFFLINE (localStorage).');
    }
} catch (e) {
    console.error('Error inicializando Supabase:', e);
}

// --- SearchEngine Class ---
class SearchEngine {
    constructor(data) {
        this.data = data; // { medicas: [], bioquimica: [], odontologia: [], elementos: [] }
    }

    normalize(str) {
        if (!str) return '';
        return str.toString()
            .toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // Remove accents
            .replace(/\./g, '')    // Remove dots
            .replace(/\s+/g, ' ') // Normalize spaces
            .replace(/[^a-z0-9 ]/g, ''); // Keep alphanumeric + spaces
    }

    search(category, query) {
        const normalizedQuery = this.normalize(query);
        if (normalizedQuery.length < 2) return [];

        const items = this.data[category] || [];
        return items.filter(item => {
            const code = this.normalize(item.code);
            const desc = this.normalize(item.description);
            return code.includes(normalizedQuery) || desc.includes(normalizedQuery);
        });
    }
}

// --- App State ---
const state = {
    currentTab: 'medicas',
    userOverrides: {} // Loaded from Cloud
};

// --- Cloud Sync Functions ---

async function loadCloudOverrides() {
    if (!supabaseClient) return; // Fallback to local only

    console.log('☁️ Cargando datos de la nube...');
    try {
        const { data, error } = await supabaseClient
            .from('normativas_custom')
            .select('code, normativa');

        if (error) throw error;

        if (data) {
            // Transformar array [ {code, normativa} ] -> Objeto { "420101": { normativa: "..." } }
            const cloudOverrides = {};
            data.forEach(item => {
                const cleanCode = String(item.code).replace(/\./g, '');
                cloudOverrides[cleanCode] = { normativa: item.normativa };
            });
            state.userOverrides = cloudOverrides;
            console.log(`✅ Sincronizado: ${data.length} notas cargadas.`);
        }
    } catch (err) {
        console.error('❌ Error cargando nube:', err);
        showToast('Error de conexión con la nube', 'error');
    }
}

async function saveOverrideToCloud(code, normativa) {
    const cleanCode = String(code).replace(/\./g, '');

    // 1. Optimistic UI Update (Local instantáneo)
    if (!state.userOverrides[cleanCode]) state.userOverrides[cleanCode] = {};
    state.userOverrides[cleanCode].normativa = normativa;

    // Si la normativa está vacía, podríamos querer borrarla, pero por simplicidad actualizamos a string vacío
    // Re-renderizar si es necesario (opcional)

    // 2. Send to Cloud (if available)
    if (!supabaseClient) return;

    try {
        // Verificar si ya existe una fila con este código
        const { data: existing } = await supabaseClient
            .from('normativas_custom')
            .select('id')
            .eq('code', cleanCode)
            .maybeSingle();

        let error;
        if (existing) {
            // UPDATE: ya existe, actualizar
            ({ error } = await supabaseClient
                .from('normativas_custom')
                .update({ normativa: normativa, updated_at: new Date().toISOString() })
                .eq('code', cleanCode));
        } else {
            // INSERT: no existe, crear nuevo
            ({ error } = await supabaseClient
                .from('normativas_custom')
                .insert({ code: cleanCode, normativa: normativa, updated_at: new Date().toISOString() }));
        }

        if (error) throw error;
        console.log('☁️ Guardado en nube:', cleanCode);
        showToast('Guardado en la nube ☁️', 'success');
    } catch (err) {
        console.error('❌ Error guardando:', err);
        showToast('Error al guardar (Verifica conexión)', 'error');
    }
}

// --- Initialize ---
const engine = new SearchEngine(typeof searchData !== 'undefined' ? searchData : {});

// DOM References
const dom = {
    tabs: document.querySelectorAll('.tab-btn'),
    searchInput: document.getElementById('searchInput'),
    clearSearch: document.getElementById('clearSearch'),
    searchResults: document.getElementById('searchResults'),
    resultsCount: document.getElementById('resultsCount'),
    modal: document.getElementById('detailModal'),
    modalContent: document.getElementById('modalContent'),
    closeModalBtn: document.getElementById('closeModal'),
    themeToggle: document.getElementById('themeToggle'),
    sunIcon: document.getElementById('sunIcon'),
    moonIcon: document.getElementById('moonIcon'),
    mainTitle: document.getElementById('mainTitle')
};

// --- Initialization Logic ---
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Cargar datos nube
    await loadCloudOverrides();
    // 2. Suscribir a real-time
    subscribeRealtimeChanges();
    // 3. Inicializar UI
    updateTab('medicas');
    dom.searchInput.focus();
    // 4. Theme
    initTheme();
});

async function subscribeRealtimeChanges() {
    if (!supabaseClient) return;

    supabaseClient
        .channel('normativas-realtime')
        .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'normativas_custom' },
            (payload) => {
                const newRecord = payload.new;

                // Ignorar si no hay payload válido (ej. DELETE a medias)
                if (!newRecord || !newRecord.code) return;

                const cleanCode = String(newRecord.code).replace(/\./g, '');
                state.userOverrides[cleanCode] = { normativa: newRecord.normativa };

                // Actualizar lista si es visible
                refreshSearchResults();

                // Actualizar MODAL si está abierto en ese item
                const modalCodeEl = document.querySelector('#modalContent .font-mono');
                if (modalCodeEl && modalCodeEl.textContent.replace(/\./g, '') === cleanCode) {
                    const normDiv = document.querySelector('#viewModeContainer div.whitespace-pre-wrap');
                    if (normDiv) {
                        if (newRecord.normativa) {
                            normDiv.textContent = newRecord.normativa;
                            normDiv.classList.remove('italic', 'text-slate-400', 'text-center');
                        } else {
                            normDiv.textContent = 'Sin normativa especial.';
                            normDiv.classList.add('italic', 'text-slate-400', 'text-center');
                        }
                    }
                    // También actualizar el textarea por si acaso cambian a modo edición
                    const ta = document.querySelector('#editModeContainer textarea');
                    if (ta) ta.value = newRecord.normativa || '';
                }
            }
        )
        .subscribe();
}


// --- Helper Functions ---

function refreshSearchResults() {
    const query = dom.searchInput.value;
    if (query.length >= 2) {
        const results = engine.search(state.currentTab, query);
        renderResults(results);
    }
}

function displayCode(code) {
    return String(code).replace(/\./g, '');
}

function getEffectiveNormativa(item) {
    const cleanCode = String(item.code).replace(/\./g, '').trim().padStart(6, '0');
    const override = state.userOverrides[cleanCode];
    if (override && override.normativa) {
        return override.normativa;
    }
    return item.normativa || ''; // Normativa original del PDF si no hay override
}

function showToast(message, type) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast ' + (type === 'success' ? 'toast-success' : 'toast-info');
    if (type === 'error') toast.style.backgroundColor = '#ef4444'; // Red for errors
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

function copyToClipboard(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copiado al portapapeles', 'success');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

function initTheme() {
    const html = document.documentElement;
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
        dom.sunIcon.classList.remove('hidden');
        dom.moonIcon.classList.add('hidden');
    } else {
        html.classList.remove('dark');
        dom.sunIcon.classList.add('hidden');
        dom.moonIcon.classList.remove('hidden');
    }
}

// --- Tab Switching ---
function updateTab(tabName) {
    state.currentTab = tabName;
    document.body.dataset.scope = tabName;

    dom.tabs.forEach(t => {
        if (t.dataset.tab === tabName) {
            t.classList.add('active');
        } else {
            t.classList.remove('active');
        }
    });

    dom.searchInput.value = '';
    dom.searchInput.placeholder = 'Buscar en ' + tabName.toUpperCase() + '...';
    dom.clearSearch.classList.add('hidden');
    renderResults([]);
    dom.resultsCount.textContent = '';
    dom.searchInput.focus();
}

dom.tabs.forEach(tab => {
    tab.addEventListener('click', () => updateTab(tab.dataset.tab));
});

// --- Search Logic ---
dom.searchInput.addEventListener('input', function () {
    const query = this.value;

    if (query.length > 0) {
        dom.clearSearch.classList.remove('hidden');
    } else {
        dom.clearSearch.classList.add('hidden');
    }

    if (query.length < 2) {
        renderResults([]);
        dom.resultsCount.textContent = '';
        return;
    }

    const results = engine.search(state.currentTab, query);
    renderResults(results);
    dom.resultsCount.textContent = results.length + ' resultados encontrados';
});

dom.clearSearch.addEventListener('click', function () {
    dom.searchInput.value = '';
    dom.clearSearch.classList.add('hidden');
    renderResults([]);
    dom.resultsCount.textContent = '';
    dom.searchInput.focus();
});

dom.themeToggle.addEventListener('click', function () {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        dom.sunIcon.classList.add('hidden');
        dom.moonIcon.classList.remove('hidden');
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        dom.sunIcon.classList.remove('hidden');
        dom.moonIcon.classList.add('hidden');
    }
});

// --- Render Results (Pure DOM API) ---
function renderResults(items) {
    while (dom.searchResults.firstChild) {
        dom.searchResults.removeChild(dom.searchResults.firstChild);
    }

    if (items.length === 0 && dom.searchInput.value.length >= 2) {
        renderEmptyState('No se encontraron resultados para "' + dom.searchInput.value + '"');
        return;
    }

    if (items.length === 0) {
        renderEmptyState('Inicia tu búsqueda seleccionando una categoría.');
        return;
    }

    items.forEach((item, index) => {
        const card = createResultCard(item, index);
        dom.searchResults.appendChild(card);
    });
}

function renderEmptyState(message) {
    const container = document.createElement('div');
    container.className = 'flex flex-col items-center justify-center h-full text-center text-slate-400';
    // Simplified SVG for brevity
    const p = document.createElement('p');
    p.className = 'text-lg mt-4';
    p.textContent = message;
    container.appendChild(p);
    dom.searchResults.appendChild(container);
}

// --- Create Result Card ---
// --- Create Result Card ---
function createResultCard(item, index) {
    const normativa = getEffectiveNormativa(item);
    const hasNormativa = normativa && normativa.length > 0;
    const coseguro = item.coseguro || '';

    const card = document.createElement('div');
    card.className = 'result-card p-4 rounded-xl mb-3 transition-all duration-200 border-l-4 border-l-transparent relative';
    card.style.animationDelay = (index * 30) + 'ms';

    // Logo (placeholder path)
    const logo = document.createElement('img');
    logo.src = 'iapos.png';
    logo.alt = '';
    logo.className = 'card-logo';
    logo.onerror = function () { this.style.display = 'none'; }; // Hide if missing
    card.appendChild(logo);

    // Header
    const topRow = document.createElement('div');
    topRow.className = 'flex items-center mb-1 flex-wrap gap-1';

    const codeSpan = document.createElement('span');
    codeSpan.className = 'font-mono font-bold text-themed text-lg';
    codeSpan.textContent = displayCode(item.code);
    topRow.appendChild(codeSpan);

    if (coseguro) {
        const cosegBadge = document.createElement('span');
        cosegBadge.className = 'badge-coseguro ml-2';
        cosegBadge.textContent = coseguro;
        topRow.appendChild(cosegBadge);
    }

    if (hasNormativa) {
        const badge = document.createElement('span');
        badge.className = 'badge-normativa ml-2';
        badge.textContent = 'Normativa';
        topRow.appendChild(badge);
    }
    card.appendChild(topRow);

    // Description
    const descDiv = document.createElement('div');
    descDiv.className = 'text-slate-600 dark:text-slate-300 font-medium text-sm md:text-base leading-snug mb-2';
    descDiv.textContent = item.description;
    card.appendChild(descDiv);

    // Preview
    if (hasNormativa) {
        const normDiv = document.createElement('div');
        normDiv.className = 'mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/50 text-xs text-slate-500 dark:text-slate-400 leading-relaxed';
        const preview = normativa.length > 180 ? normativa.substring(0, 180) + '...' : normativa;
        normDiv.textContent = preview;
        card.appendChild(normDiv);
    }

    // Buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'flex flex-wrap gap-2 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50';

    // Copy Code
    actionsDiv.appendChild(createActionBtn('Código', function (e) {
        e.stopPropagation();
        copyToClipboard(displayCode(item.code));
    }));

    // Copy Name
    actionsDiv.appendChild(createActionBtn('+ Nombre', function (e) {
        e.stopPropagation();
        copyToClipboard(displayCode(item.code) + ' ' + item.description);
    }));

    // Copy Note
    if (hasNormativa) {
        actionsDiv.appendChild(createActionBtn('Nota', function (e) {
            e.stopPropagation();
            copyToClipboard(normativa);
        }));
    }

    // Detail -> Open in View Mode
    actionsDiv.appendChild(createActionBtn('Detalle', function (e) {
        e.stopPropagation();
        openModal(item, 'view');
    }, true));

    // Edit -> Open in Edit Mode
    actionsDiv.appendChild(createActionBtn('Editar', function (e) {
        e.stopPropagation();
        openModal(item, 'edit');
    }));

    card.appendChild(actionsDiv);

    // Click anywhere on card -> Open in View Mode
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openModal(item, 'view'));

    return card;
}

function createActionBtn(label, onClick, isPrimary) {
    const btn = document.createElement('button');
    btn.className = 'action-btn ' + (isPrimary ? 'btn-themed' : 'btn-secondary');
    btn.textContent = label;
    btn.addEventListener('click', onClick);
    return btn;
}

// --- Modal Logic ---
function openModal(item, mode = 'view') {
    const normativa = getEffectiveNormativa(item);

    // Clear content
    while (dom.modalContent.firstChild) {
        dom.modalContent.removeChild(dom.modalContent.firstChild);
    }

    // --- Header ---
    const title = document.createElement('h3');
    title.className = 'text-2xl font-bold text-slate-800 dark:text-white mb-3 text-center';
    title.textContent = 'Detalle de Práctica';
    dom.modalContent.appendChild(title);

    // --- Code ---
    const codeBox = document.createElement('div');
    codeBox.className = 'bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4 text-center';
    const codeSpan = document.createElement('span');
    codeSpan.className = 'block text-4xl font-mono font-bold text-themed tracking-widest select-all';
    codeSpan.textContent = displayCode(item.code);
    codeBox.appendChild(codeSpan);
    dom.modalContent.appendChild(codeBox);

    // --- Desc ---
    const descP = document.createElement('p');
    descP.className = 'text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 px-2 text-center font-medium';
    descP.textContent = item.description;
    dom.modalContent.appendChild(descP);

    // Container for View Mode
    const viewContainer = document.createElement('div');
    viewContainer.id = 'viewModeContainer';
    // Initially hidden if mode is 'edit'
    if (mode === 'edit') viewContainer.classList.add('hidden');

    // Normativa Display (View Mode)
    const normSection = document.createElement('div');
    normSection.className = 'bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-sm text-left border border-slate-200 dark:border-slate-600 mb-4 whitespace-pre-wrap';

    if (normativa) {
        normSection.textContent = normativa;
    } else {
        normSection.textContent = 'Sin normativa especial.';
        normSection.className += ' italic text-slate-400 text-center';
    }
    viewContainer.appendChild(normSection);

    // Button to switch to Edit Mode
    const toEditBtn = document.createElement('button');
    toEditBtn.className = 'w-full py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors';
    toEditBtn.textContent = '✏️ Editar Normativa';
    toEditBtn.addEventListener('click', () => {
        viewContainer.classList.add('hidden');
        editContainer.classList.remove('hidden');
        // Focus textarea
        const ta = editContainer.querySelector('textarea');
        if (ta) ta.focus();
    });
    viewContainer.appendChild(toEditBtn);

    dom.modalContent.appendChild(viewContainer);


    // Container for Edit Mode
    const editContainer = document.createElement('div');
    editContainer.id = 'editModeContainer';
    // Initially hidden if mode is 'view'
    if (mode === 'view') editContainer.classList.add('hidden');

    // Label
    const editLabel = document.createElement('label');
    editLabel.className = 'block text-xs font-bold text-slate-500 uppercase mb-2';
    editLabel.textContent = 'Editar Normativa Personalizada (Sincronizado en Nube)';
    editContainer.appendChild(editLabel);

    // Textarea (Edit Mode)
    const textarea = document.createElement('textarea');
    textarea.className = 'w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm focus:ring-2 focus:ring-themed outline-none transition-all mb-3';
    textarea.rows = 6;
    textarea.placeholder = 'Escribe aquí para modificar la normativa...';
    // Pre-fill with effective content
    textarea.value = normativa || '';
    editContainer.appendChild(textarea);

    // Actions Row
    const editActions = document.createElement('div');
    editActions.className = 'flex gap-2';

    // Cancel Button
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'flex-1 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors';
    cancelBtn.textContent = 'Cancelar';
    cancelBtn.addEventListener('click', () => {
        // Switch back to view mode
        editContainer.classList.add('hidden');
        viewContainer.classList.remove('hidden');
        // Reset textarea value to current saved state just in case
        textarea.value = getEffectiveNormativa(item) || '';
    });
    editActions.appendChild(cancelBtn);

    // Save Button - using btn-themed class for visibility
    const saveBtn = document.createElement('button');
    saveBtn.className = 'flex-1 py-2 btn-themed font-bold rounded-lg shadow hover:bg-opacity-90 transition-colors';
    saveBtn.textContent = 'Guardar Cambios';
    saveBtn.addEventListener('click', () => {
        const newText = textarea.value.trim();
        saveOverrideToCloud(item.code, newText);

        // Update view mode content
        if (newText) {
            normSection.textContent = newText;
            normSection.classList.remove('italic', 'text-slate-400', 'text-center');
        } else {
            normSection.textContent = 'Sin normativa especial.';
            normSection.classList.add('italic', 'text-slate-400', 'text-center');
        }

        // Switch back to view mode
        editContainer.classList.add('hidden');
        viewContainer.classList.remove('hidden');

        // Re-render search results to reflect changes in list
        refreshSearchResults();
    });
    editActions.appendChild(saveBtn);

    editContainer.appendChild(editActions);
    dom.modalContent.appendChild(editContainer);

    // Show modal with animation
    dom.modal.classList.remove('hidden');
    dom.modal.style.display = 'flex';
    setTimeout(() => {
        dom.modal.classList.remove('opacity-0');
        dom.modal.querySelector('div').classList.remove('scale-95');
        dom.modal.querySelector('div').classList.add('scale-100');
    }, 10);
}

// --- Modal Logic ---
// Track mousedown target to prevent closing when selecting text (dragging outside)
let modalMouseDownTarget = null;
dom.modal.addEventListener('mousedown', (e) => {
    modalMouseDownTarget = e.target;
});

function closeModal() {
    dom.modal.classList.add('opacity-0');
    const inner = dom.modal.querySelector('div');
    if (inner) {
        inner.classList.remove('scale-100');
        inner.classList.add('scale-95');
    }
    setTimeout(() => {
        dom.modal.classList.add('hidden');
        dom.modal.style.display = 'none';
        modalMouseDownTarget = null; // Reset
    }, 300);
}

dom.closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    // Solo cerrar si el click Y el mousedown fueron en el backdrop
    if (e.target === dom.modal && modalMouseDownTarget === dom.modal) {
        closeModal();
    }
});

// Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
