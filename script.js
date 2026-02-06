/**
 * Buscador Médico IAPOS v3.0
 * Motor de búsqueda robusto con DOM API puro (sin innerHTML para datos de usuario)
 */

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

    deduplicate(items) {
        const seen = new Set();
        return items.filter(item => {
            if (seen.has(item.code)) return false;
            seen.add(item.code);
            return true;
        });
    }
}

// --- App State ---
const state = {
    currentTab: 'medicas',
    userOverrides: {}
};

// Load user overrides from localStorage
try {
    const saved = localStorage.getItem('userOverrides_v3');
    if (saved) state.userOverrides = JSON.parse(saved);
} catch (e) {
    console.error('Error loading overrides:', e);
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

// --- Utility: Get merged data (base + user overrides) for a code ---
function getMergedNormativa(code) {
    const cleanCode = String(code).replace(/\./g, '').trim().padStart(6, '0');
    const override = state.userOverrides[cleanCode];
    return override || null;
}

function getEffectiveNormativa(item) {
    const cleanCode = String(item.code).replace(/\./g, '').trim().padStart(6, '0');
    const override = state.userOverrides[cleanCode];
    if (override && override.normativa) {
        return override.normativa;
    }
    return item.normativa || '';
}

// --- Utility: Save overrides ---
function saveOverrides() {
    localStorage.setItem('userOverrides_v3', JSON.stringify(state.userOverrides));
}

// --- Utility: Show toast ---
function showToast(message, type) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast ' + (type === 'success' ? 'toast-success' : 'toast-info');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// --- Utility: Copy to clipboard ---
function copyToClipboard(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copiado al portapapeles', 'success');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
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

    // Show/hide clear button
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

// Clear button
dom.clearSearch.addEventListener('click', function () {
    dom.searchInput.value = '';
    dom.clearSearch.classList.add('hidden');
    renderResults([]);
    dom.resultsCount.textContent = '';
    dom.searchInput.focus();
});

// --- Render Results (Pure DOM API - NO innerHTML for user data) ---
function renderResults(items) {
    // Clear previous results
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

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'w-16 h-16 mb-4 opacity-50');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke', 'currentColor');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('d', 'M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z');
    svg.appendChild(path);
    container.appendChild(svg);

    const p = document.createElement('p');
    p.className = 'text-lg';
    p.textContent = message;
    container.appendChild(p);

    dom.searchResults.appendChild(container);
}

// --- Create Result Card (Pure DOM) ---
function createResultCard(item, index) {
    const normativa = getEffectiveNormativa(item);
    const hasNormativa = normativa && normativa.length > 0;

    const card = document.createElement('div');
    card.className = 'result-card p-4 rounded-xl mb-3 transition-all duration-200 border-l-4 border-l-transparent';
    card.style.animationDelay = (index * 30) + 'ms';

    // --- Top Row: Code + Badge ---
    const topRow = document.createElement('div');
    topRow.className = 'flex items-center mb-1 flex-wrap gap-1';

    const codeSpan = document.createElement('span');
    codeSpan.className = 'font-mono font-bold text-themed text-lg';
    codeSpan.textContent = item.code;
    topRow.appendChild(codeSpan);

    if (hasNormativa) {
        const badge = document.createElement('span');
        badge.className = 'badge-normativa ml-2';

        const badgeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        badgeSvg.setAttribute('class', 'w-3 h-3 mr-1');
        badgeSvg.setAttribute('fill', 'none');
        badgeSvg.setAttribute('stroke', 'currentColor');
        badgeSvg.setAttribute('viewBox', '0 0 24 24');
        const badgePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        badgePath.setAttribute('stroke-linecap', 'round');
        badgePath.setAttribute('stroke-linejoin', 'round');
        badgePath.setAttribute('stroke-width', '2');
        badgePath.setAttribute('d', 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z');
        badgeSvg.appendChild(badgePath);
        badge.appendChild(badgeSvg);

        const badgeText = document.createTextNode('Normativa');
        badge.appendChild(badgeText);
        topRow.appendChild(badge);
    }

    card.appendChild(topRow);

    // --- Description ---
    const descDiv = document.createElement('div');
    descDiv.className = 'text-slate-600 dark:text-slate-300 font-medium text-sm md:text-base leading-snug mb-2';
    descDiv.textContent = item.description;
    card.appendChild(descDiv);

    // --- Normativa Preview ---
    if (hasNormativa) {
        const normDiv = document.createElement('div');
        normDiv.className = 'mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/50 text-xs text-slate-500 dark:text-slate-400 leading-relaxed';
        const preview = normativa.length > 180 ? normativa.substring(0, 180) + '...' : normativa;
        normDiv.textContent = preview;
        card.appendChild(normDiv);
    }

    // --- Action Buttons ---
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'flex flex-wrap gap-2 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50';

    // [Copiar Código]
    actionsDiv.appendChild(createActionBtn('Código', 'M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2', function (e) {
        e.stopPropagation();
        copyToClipboard(item.code);
    }));

    // [+ Nombre]
    actionsDiv.appendChild(createActionBtn('+ Nombre', 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', function (e) {
        e.stopPropagation();
        copyToClipboard(item.code + ' ' + item.description);
    }));

    // [Copiar Nota] - solo si hay normativa
    if (hasNormativa) {
        actionsDiv.appendChild(createActionBtn('Nota', 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', function (e) {
            e.stopPropagation();
            copyToClipboard(normativa);
        }));
    }

    // [Ver Detalle]
    actionsDiv.appendChild(createActionBtn('Detalle', 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', function (e) {
        e.stopPropagation();
        openModal(item);
    }, true));

    // [Editar]
    actionsDiv.appendChild(createActionBtn('Editar', 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', function (e) {
        e.stopPropagation();
        openEditModal(item);
    }));

    card.appendChild(actionsDiv);

    return card;
}

function createActionBtn(label, iconPath, onClick, isPrimary) {
    const btn = document.createElement('button');
    btn.className = 'action-btn ' + (isPrimary ? 'btn-themed' : 'btn-secondary');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'w-3.5 h-3.5');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('viewBox', '0 0 24 24');

    // Support multiple paths (separated by space + M)
    const paths = iconPath.split(/(?= M)/);
    paths.forEach(d => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', d.trim());
        svg.appendChild(path);
    });

    btn.appendChild(svg);

    const text = document.createTextNode(' ' + label);
    btn.appendChild(text);

    btn.addEventListener('click', onClick);
    return btn;
}

// --- Modal: Detail View ---
function openModal(item) {
    const normativa = getEffectiveNormativa(item);

    // Clear previous content
    while (dom.modalContent.firstChild) {
        dom.modalContent.removeChild(dom.modalContent.firstChild);
    }

    // Title
    const title = document.createElement('h3');
    title.className = 'text-2xl font-bold text-slate-800 dark:text-white mb-3 text-center';
    title.textContent = 'Detalle';
    dom.modalContent.appendChild(title);

    // Code Box
    const codeBox = document.createElement('div');
    codeBox.className = 'bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4 text-center';
    const codeSpan = document.createElement('span');
    codeSpan.className = 'block text-4xl font-mono font-bold text-themed tracking-widest select-all';
    codeSpan.textContent = item.code;
    codeBox.appendChild(codeSpan);
    dom.modalContent.appendChild(codeBox);

    // Description
    const descP = document.createElement('p');
    descP.className = 'text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 px-2 text-center';
    descP.textContent = item.description;
    dom.modalContent.appendChild(descP);

    // Normativa Section
    const normSection = document.createElement('div');
    normSection.className = 'bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-sm text-left border border-slate-200 dark:border-slate-600 mb-6';

    const normHeader = document.createElement('h4');
    normHeader.className = 'font-bold text-slate-700 dark:text-slate-300 mb-3 border-b border-slate-200 dark:border-slate-600 pb-1';
    normHeader.textContent = 'Normativa / Detalles';
    normSection.appendChild(normHeader);

    if (normativa && normativa.length > 0) {
        const normText = document.createElement('p');
        normText.className = 'text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line';
        normText.textContent = normativa;
        normSection.appendChild(normText);
    } else {
        const noNorm = document.createElement('p');
        noNorm.className = 'text-slate-400 italic text-center py-2';
        noNorm.textContent = 'Sin normativa cargada.';
        normSection.appendChild(noNorm);
    }

    dom.modalContent.appendChild(normSection);

    // Action Buttons
    const actionsGrid = document.createElement('div');
    actionsGrid.className = 'grid grid-cols-2 gap-3';

    // Copiar Código
    const btnCode = createModalBtn('Copiar Código', false, function () {
        copyToClipboard(item.code);
    });
    actionsGrid.appendChild(btnCode);

    // Copiar Código + Nombre
    const btnCodeName = createModalBtn('Código + Nombre', false, function () {
        copyToClipboard(item.code + ' ' + item.description);
    });
    actionsGrid.appendChild(btnCodeName);

    // Copiar Normativa (if exists)
    if (normativa) {
        const btnNorm = createModalBtn('Copiar Normativa', false, function () {
            copyToClipboard(normativa);
        });
        btnNorm.className += ' col-span-2';
        actionsGrid.appendChild(btnNorm);
    }

    // Copiar Todo
    const btnAll = createModalBtn('Copiar Info Completa', true, function () {
        let fullText = item.code + ' - ' + item.description;
        if (normativa) fullText += '\n' + normativa;
        copyToClipboard(fullText);
    });
    btnAll.className += ' col-span-2';
    actionsGrid.appendChild(btnAll);

    // Editar
    const btnEdit = createModalBtn('Editar Normativa', false, function () {
        closeModal();
        setTimeout(() => openEditModal(item), 350);
    });
    btnEdit.className += ' col-span-2';
    actionsGrid.appendChild(btnEdit);

    dom.modalContent.appendChild(actionsGrid);

    // Show modal
    showModal();
}

function createModalBtn(label, isPrimary, onClick) {
    const btn = document.createElement('button');
    btn.className = 'flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-200 text-sm shadow-sm hover:-translate-y-0.5 active:translate-y-0 ' +
        (isPrimary ? 'btn-themed' : 'btn-secondary');
    btn.textContent = label;
    btn.addEventListener('click', onClick);
    return btn;
}

// --- Modal: Edit View ---
function openEditModal(item) {
    const cleanCode = String(item.code).replace(/\./g, '').trim().padStart(6, '0');
    const currentNormativa = getEffectiveNormativa(item);

    // Clear previous content
    while (dom.modalContent.firstChild) {
        dom.modalContent.removeChild(dom.modalContent.firstChild);
    }

    // Title
    const title = document.createElement('h4');
    title.className = 'font-bold text-themed mb-4 text-sm flex items-center';

    const editSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    editSvg.setAttribute('class', 'w-4 h-4 mr-2');
    editSvg.setAttribute('fill', 'none');
    editSvg.setAttribute('stroke', 'currentColor');
    editSvg.setAttribute('viewBox', '0 0 24 24');
    const editPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    editPath.setAttribute('stroke-linecap', 'round');
    editPath.setAttribute('stroke-linejoin', 'round');
    editPath.setAttribute('stroke-width', '2');
    editPath.setAttribute('d', 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z');
    editSvg.appendChild(editPath);
    title.appendChild(editSvg);

    const titleText = document.createTextNode('Editar Normativa (' + item.code + ')');
    title.appendChild(titleText);
    dom.modalContent.appendChild(title);

    // Code + Description (read-only display)
    const infoDiv = document.createElement('div');
    infoDiv.className = 'bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 mb-4 text-sm';
    const infoCode = document.createElement('span');
    infoCode.className = 'font-mono font-bold text-themed';
    infoCode.textContent = item.code;
    infoDiv.appendChild(infoCode);
    const infoDesc = document.createElement('span');
    infoDesc.className = 'text-slate-600 dark:text-slate-300 ml-2';
    infoDesc.textContent = item.description;
    infoDiv.appendChild(infoDesc);
    dom.modalContent.appendChild(infoDiv);

    // Normativa Textarea
    const label = document.createElement('label');
    label.className = 'block text-xs font-bold text-slate-500 uppercase mb-1';
    label.textContent = 'Normativa (Incluye / Excluye / Criterios / Observaciones)';
    dom.modalContent.appendChild(label);

    const textarea = document.createElement('textarea');
    textarea.id = 'editNormativa';
    textarea.rows = 6;
    textarea.className = 'edit-textarea mb-4';
    textarea.placeholder = 'Ej: Incluye: Honorarios, Material descartable. Excluye: Anestesia...';
    textarea.value = currentNormativa || '';
    dom.modalContent.appendChild(textarea);

    // Buttons
    const btnRow = document.createElement('div');
    btnRow.className = 'flex justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-700';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors';
    cancelBtn.textContent = 'Cancelar';
    cancelBtn.addEventListener('click', closeModal);
    btnRow.appendChild(cancelBtn);

    const saveBtn = document.createElement('button');
    saveBtn.className = 'px-5 py-2 text-sm font-bold btn-themed rounded-lg shadow-md hover:shadow-lg transition-all';
    saveBtn.textContent = 'Guardar Cambios';
    saveBtn.addEventListener('click', function () {
        const newNormativa = document.getElementById('editNormativa').value.trim();

        if (newNormativa) {
            if (!state.userOverrides[cleanCode]) state.userOverrides[cleanCode] = {};
            state.userOverrides[cleanCode].normativa = newNormativa;
        } else {
            if (state.userOverrides[cleanCode]) {
                delete state.userOverrides[cleanCode].normativa;
                if (Object.keys(state.userOverrides[cleanCode]).length === 0) {
                    delete state.userOverrides[cleanCode];
                }
            }
        }

        saveOverrides();
        closeModal();
        showToast('Guardado correctamente', 'success');

        // Re-render current search results
        const query = dom.searchInput.value;
        if (query.length >= 2) {
            const results = engine.search(state.currentTab, query);
            renderResults(results);
        }
    });
    btnRow.appendChild(saveBtn);

    dom.modalContent.appendChild(btnRow);

    // Show modal
    showModal();

    // Focus textarea
    setTimeout(() => textarea.focus(), 350);
}

// --- Modal Show/Hide ---
function showModal() {
    dom.modal.style.display = 'flex';
    dom.modal.classList.remove('hidden');
    setTimeout(() => {
        dom.modal.classList.remove('opacity-0');
        const inner = dom.modal.querySelector('div');
        if (inner) {
            inner.classList.remove('scale-95');
            inner.classList.add('scale-100');
        }
    }, 10);
}

function closeModal() {
    dom.modal.classList.add('opacity-0');
    const inner = dom.modal.querySelector('div');
    if (inner) {
        inner.classList.remove('scale-100');
        inner.classList.add('scale-95');
    }
    setTimeout(() => {
        dom.modal.style.display = 'none';
        dom.modal.classList.add('hidden');
    }, 300);
}

dom.closeModalBtn.addEventListener('click', closeModal);
dom.modal.addEventListener('click', function (e) {
    if (e.target === dom.modal) closeModal();
});

// --- Theme Toggle ---
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

dom.themeToggle.addEventListener('click', function () {
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

// --- Keyboard Shortcuts ---
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (dom.modal.style.display === 'flex') {
            closeModal();
        } else {
            dom.searchInput.value = '';
            dom.clearSearch.classList.add('hidden');
            renderResults([]);
            dom.resultsCount.textContent = '';
            dom.searchInput.focus();
        }
    }
});

// --- Init ---
updateTab('medicas');
dom.searchInput.focus();
