
// DOM Elements
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const resultsCount = document.getElementById('resultsCount');
const modal = document.getElementById('copyModal');
const modalCode = document.getElementById('modalCode');
const modalDesc = document.getElementById('modalDescription');
const copyBtn = document.getElementById('copyButton');
const closeModalBtn = document.getElementById('closeModal');

// State
let currentTab = 'elementos'; // 'elementos', 'pmo', 'iapos'
let currentData = [];

// Local Storage & Merging Logic
let userOverrides = {};
try {
    const saved = localStorage.getItem('userOverrides');
    if (saved) userOverrides = JSON.parse(saved);
} catch (e) { console.error("Error loading overrides", e); }

function getFinalData(code) {
    const clean = String(code).replace(/\./g, '').trim().padStart(6, '0');
    const base = window.enrichedDataRaw && window.enrichedDataRaw[clean] ? window.enrichedDataRaw[clean] : {};
    const override = userOverrides[clean] || {};
    return { ...base, ...override };
}

// Deduplicate Arrays on load
const deduplicate = (arr, key) => {
    const seen = new Set();
    return arr.filter(item => {
        const val = item[key];
        if (seen.has(val)) return false;
        seen.add(val);
        return true;
    });
};

// Data Sources (mapped from data.js globals)
// Data Sources (mapped from data.js globals)
const dataSources = {
    elementos: deduplicate(typeof medicasDataV3 !== 'undefined' ? medicasDataV3 : [], 'code'),
    pmo: deduplicate(typeof pmoDataRaw !== 'undefined' ? pmoDataRaw : [], 'code'),
    iapos: deduplicate(typeof iaposDataRaw !== 'undefined' ? iaposDataRaw : [], 'code'),
    bioquimica: deduplicate(typeof biochemDataV3 !== 'undefined' ? biochemDataV3 : [], 'code')
};

// Utilities
const normalizeConfirm = (str) => {
    if (!str) return '';
    return str.toString()
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/\./g, '') // Remove dots
        .replace(/[^a-z0-9\s]/g, ''); // Keep only alphanumeric and spaces
};


// Initialize
function init() {
    updateTab('elementos');
    searchInput.focus();
}

// Tab Switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        updateTab(target);
    });
});

function updateTab(tabName) {
    currentTab = tabName;
    currentTab = tabName;
    currentData = dataSources[tabName];

    // Set Global Theme Scope
    document.body.dataset.scope = tabName;

    // Update UI
    tabs.forEach(t => {
        if (t.dataset.tab === tabName) {
            t.classList.add('active');
        } else {
            t.classList.remove('active');
        }
    });

    // Clear search and results
    searchInput.value = '';
    searchInput.placeholder = `Buscar en ${tabName.toUpperCase()}...`;
    renderResults([]);
    resultsCount.textContent = '';
}

// Search Logic
searchInput.addEventListener('input', (e) => {
    const query = normalizeConfirm(e.target.value);

    if (query.length < 2) {
        renderResults([]);
        resultsCount.textContent = '';
        return;
    }

    const results = currentData.filter(item => {
        const code = normalizeConfirm(item.code);
        const desc = normalizeConfirm(item.description);
        return code.includes(query) || desc.includes(query);
    });

    renderResults(results);
    resultsCount.textContent = `${results.length} resultados encontrados`;
});

function renderResults(items) {
    searchResults.innerHTML = '';

    if (items.length === 0 && searchInput.value.length >= 2) {
        searchResults.innerHTML = `
            <div class="text-center p-8 text-slate-400">
                <p>No se encontraron resultados para "${searchInput.value}"</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        // Use custom class 'result-card' which handles dark mode bg via CSS variables
        card.className = `result-card source-${currentTab} p-4 rounded-xl cursor-pointer mb-3 flex justify-between items-center group transition-all duration-200 border-l-4 border-l-transparent`;

        // Check for enriched data
        // Ensure consistent 6-digit zero-padding for matching
        let cleanCode = String(item.code).replace(/\./g, '').trim();
        if (/^\d+$/.test(cleanCode)) {
            cleanCode = cleanCode.padStart(6, '0');
        }

        const extraData = getFinalData(String(item.code).replace(/\./g, '').trim());

        let extraBadge = '';
        let extraContent = '';

        // Inicializar variables para evitar ReferenceError
        let normPreview = '';
        let financialBlock = '';

        if (extraData) {
            // Normative Preview logic
            const hasNormative = extraData.incluye || extraData.excluye || extraData.text || extraData.observacion;

            // Financial Data (Hidden by default)
            financialBlock = `
                <div class="hidden financial-data mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/50 grid grid-cols-3 gap-2 text-xs opacity-75">
                    <div>
                        <span class="text-slate-400 block mb-0.5">Galenos</span>
                        <span class="font-mono font-semibold text-slate-700 dark:text-slate-200">${extraData.galenos || '-'}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 block mb-0.5">Gastos</span>
                        <span class="font-mono font-semibold text-slate-700 dark:text-slate-200">${extraData.gastos || '-'}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 block mb-0.5">Total</span>
                        <span class="font-mono font-bold text-themed">${extraData.total || '-'}</span>
                    </div>
                </div>
            `;

            if (hasNormative) {
                extraBadge = `<span class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-themed-soft text-themed" title="Normativa Disponible">
                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Normas
                 </span>`;

                let previewParts = [];
                if (extraData.incluye) previewParts.push(`<span class="text-green-700 dark:text-green-400 font-bold">Incluye:</span> ${extraData.incluye}`);
                if (extraData.excluye) previewParts.push(`<span class="text-red-700 dark:text-red-400 font-bold">Excluye:</span> ${extraData.excluye}`);
                if (extraData.text && !extraData.incluye && !extraData.excluye) previewParts.push(`<span class="text-slate-500">Nota:</span> ${extraData.text}`);

                let previewText = previewParts.join(' | ');
                if (previewText.length > 200) previewText = previewText.substring(0, 200) + '...';

                if (previewText) {
                    normPreview = `
                        <div class="mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            ${previewText}
                        </div>
                    `;
                }
            }

            extraContent = normPreview + financialBlock;
        }


        // V3 Specific: Coseguro & Bonos (Visible) - Prioritize V3 Data fields over stored overrides or enriched
        let v3Badges = '';
        if (item.coseguro || item.bonos) {
            v3Badges = `
                <div class="flex flex-wrap gap-2 mt-2 mb-1">
                    ${item.coseguro ? `
                        <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-themed-soft text-themed border border-themed/20 shadow-sm" title="Coseguro a cargo del afiliado">
                            <svg class="w-3 h-3 mr-1.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            Coseguro: ${item.coseguro}
                        </span>` : ''}
                    
                    ${item.bonos ? `
                        <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 shadow-sm" title="Cantidad de Bonos/Unidades">
                            <svg class="w-3 h-3 mr-1.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                            ${item.bonos} ${/^\d+$/.test(item.bonos) ? (currentTab === 'bioquimica' ? 'UB' : 'Bonos') : ''}
                        </span>` : ''}
                </div>
             `;
        }

        card.innerHTML = `
            <div class="flex-1 pr-4">
                <div class="flex items-center mb-1">
                    <span class="font-mono font-bold text-themed text-lg">${item.code}</span>
                    ${extraBadge}
                </div>
                <div class="text-slate-600 dark:text-slate-300 font-medium text-sm md:text-base leading-snug">${item.description}</div>
                ${v3Badges}
                ${extraContent}
            </div>
            <button class="self-start mt-2 text-slate-300 hover:text-themed transition-colors" title="Ver detalles y copiar">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            </button>
        `;

        card.addEventListener('click', () => openModal(item));
        searchResults.appendChild(card);
    });
}



// Modal Logic
function openModal(item) {
    modalCode.textContent = item.code;
    modalDesc.textContent = item.description;

    // Enrich Modal Content - Normative
    const cleanCode = String(item.code).replace(/\./g, '').trim().padStart(6, '0');
    // Use getFinalData to include user edits
    const extraData = getFinalData(cleanCode);

    const existingExtra = document.getElementById('modalExtraInfo');
    if (existingExtra) existingExtra.remove();
    const existingEdit = document.getElementById('editContainer');
    if (existingEdit) existingEdit.remove();

    // Always create container to allow adding data if empty
    const extraDiv = document.createElement('div');
    extraDiv.id = 'modalExtraInfo';
    extraDiv.className = 'mt-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-sm text-left border border-slate-200 dark:border-slate-600';

    let contentHtml = '';
    const hasData = extraData && (Object.keys(extraData).length > 0);

    if (hasData) {
        if (extraData.incluye) contentHtml += `<div class="mb-3"><h5 class="font-bold text-green-700 dark:text-green-400 text-xs uppercase mb-1">Incluye</h5><p class="text-slate-700 dark:text-slate-300 leading-relaxed">${extraData.incluye}</p></div>`;
        if (extraData.excluye) contentHtml += `<div class="mb-3"><h5 class="font-bold text-red-700 dark:text-red-400 text-xs uppercase mb-1">Excluye</h5><p class="text-slate-700 dark:text-slate-300 leading-relaxed">${extraData.excluye}</p></div>`;
        if (extraData.criterios) contentHtml += `<div class="mb-3"><h5 class="font-bold text-blue-700 dark:text-blue-400 text-xs uppercase mb-1">Criterios</h5><p class="text-slate-700 dark:text-slate-300 italic">${extraData.criterios}</p></div>`;
        if (extraData.observacion) contentHtml += `<div class="mb-3"><h5 class="font-bold text-orange-700 dark:text-orange-400 text-xs uppercase mb-1">Observación</h5><p class="text-slate-700 dark:text-slate-300">${extraData.observacion}</p></div>`;
        if (!contentHtml && extraData.text) contentHtml += `<p class="text-slate-700 dark:text-slate-300 whitespace-pre-line">${extraData.text}</p>`;
    }

    extraDiv.innerHTML = `
        <h4 class="font-bold text-slate-700 dark:text-slate-300 mb-3 border-b border-slate-200 dark:border-slate-600 pb-1 flex justify-between items-center">
            <span>Normativa / Detalles</span>
            <button onclick="enableEdit('${cleanCode}')" class="text-xs text-themed hover:text-themed-dark font-semibold flex items-center bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-600 shadow-sm transition-colors">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                ${hasData ? 'Editar' : 'Agregar Nota'}
            </button>
        </h4>
        ${contentHtml || '<p class="text-slate-400 italic text-center py-2">Sin normativa cargada.</p>'}
    `;
    modalDesc.parentNode.insertBefore(extraDiv, modalDesc.nextSibling);

    // Reset Button State
    const copyBtn = document.getElementById('copyButton');
    copyBtn.innerHTML = `
        <span class="flex items-center justify-center gap-2">
            <span>Copiar Código</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
        </span>
    `;
    copyBtn.className = "w-full btn-themed font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 transform active:translate-y-0"; // Ensure class overrides any previous state


    modal.classList.remove('hidden');
    // Animate in
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('div').classList.remove('scale-95');
        modal.querySelector('div').classList.add('scale-100');
    }, 10);
}

function closeModal() {
    modal.classList.add('opacity-0');
    modal.querySelector('div').classList.remove('scale-100');
    modal.querySelector('div').classList.add('scale-95');

    // Granular Copy Buttons
    const copyBtn = document.getElementById('copyButton');
    copyBtn.classList.add('hidden'); // Hide original big button

    const existingActions = document.getElementById('granularActions');
    if (existingActions) existingActions.remove();

    const granularActions = document.createElement('div');
    granularActions.id = 'granularActions';
    granularActions.className = 'grid grid-cols-2 gap-3 mt-6';

    // Theme-aware classes
    const btnClass = "flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-200 text-sm shadow-sm hover:-translate-y-0.5 active:translate-y-0";
    const primaryClass = "btn-themed text-white shadow-themed/30";
    const secondaryClass = "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600";

    granularActions.innerHTML = `
        <button onclick="copyToClipboard('${item.code}')" class="${btnClass} ${secondaryClass}">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
            Código
        </button>
        <button onclick="copyToClipboard('${item.description.replace(/'/g, "\\'")}')" class="${btnClass} ${secondaryClass}">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Descripción
        </button>
        ${(extraData?.incluye || extraData?.excluye) ? `
        <button onclick="copyToClipboard('${(extraData.incluye || "")} ${(extraData.excluye || "")}')" class="${btnClass} ${secondaryClass} col-span-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            Normativa
        </button>
        ` : ''}
        <button onclick="copyToClipboard('${item.code} - ${item.description.replace(/'/g, "\\'")} ${extraData?.incluye ? '\\nIncluye: ' + extraData.incluye : ''}')" class="${btnClass} ${primaryClass} col-span-2">
            Copiar Info
        </button>
    `;

    // Append after modal content
    const container = document.querySelector('#copyModal .text-center');
    container.appendChild(granularActions);

    modal.classList.remove('hidden');
    // Animate in
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('div').classList.remove('scale-95');
        modal.querySelector('div').classList.add('scale-100');
    }, 10);
}

function closeModal() {
    modal.classList.add('opacity-0');
    modal.querySelector('div').classList.remove('scale-100');
    modal.querySelector('div').classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        // Reset state
        const actions = document.getElementById('granularActions');
        if (actions) actions.remove();
        const copyBtn = document.getElementById('copyButton');
        copyBtn.classList.remove('hidden');
    }, 300);
}

// Global helper for granular buttons
window.copyToClipboard = function (text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        // Find the button that was clicked to give feedback
        const btn = document.activeElement;
        // Simple visual feedback
        const originalContent = btn.innerHTML;
        btn.innerHTML = `<span class="font-bold">¡Copiado!</span>`;
        btn.classList.add('ring-2', 'ring-green-400');

        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.classList.remove('ring-2', 'ring-green-400');
        }, 1000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
};

/* 
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(modalCode.textContent).then(() => {
        copyBtn.innerHTML = `<span class="text-white">¡Copiado Exitosamente!</span>`;
        if (currentTab === 'iapos') copyBtn.classList.add('bg-green-500'); // Valid feedback
        setTimeout(() => closeModal(), 800);
    });
});
*/

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Theme Logic
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const html = document.documentElement;

// Check Local Storage or System Preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
} else {
    html.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
}

themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        } else {
            searchInput.value = '';
            renderResults([]);
            resultsCount.textContent = '';
            searchInput.focus();
        }
    }
});

// Run
// Editor Functions
window.enableEdit = function (code) {
    const cleanCode = String(code).padStart(6, '0');
    const currentData = getFinalData(cleanCode);

    const infoDiv = document.getElementById('modalExtraInfo');
    if (infoDiv) infoDiv.classList.add('hidden');

    const existing = document.getElementById('editContainer');
    if (existing) existing.remove();

    const editContainer = document.createElement('div');
    editContainer.id = 'editContainer';
    editContainer.className = 'mt-4 bg-white dark:bg-slate-800 rounded-lg p-5 border-2 border-themed/20 shadow-xl animate-fade-in';

    editContainer.innerHTML = `
        <h4 class="font-bold text-themed mb-4 text-sm flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            Editar Normativa (${cleanCode})
        </h4>
        
        <div class="space-y-4">
            <div>
                <label class="block text-xs font-bold text-green-600 dark:text-green-400 uppercase mb-1">Incluye</label>
                <textarea id="editIncluye" rows="2" class="w-full text-sm p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" placeholder="Ej: Honorarios, Material descartable...">${currentData.incluye || ''}</textarea>
            </div>
            
            <div>
                <label class="block text-xs font-bold text-red-600 dark:text-red-400 uppercase mb-1">Excluye</label>
                <textarea id="editExcluye" rows="2" class="w-full text-sm p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" placeholder="Ej: Material radioactivo...">${currentData.excluye || ''}</textarea>
            </div>
            
            <div>
                <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Observaciones / Criterios</label>
                <textarea id="editObs" rows="3" class="w-full text-sm p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-themed focus:border-transparent transition-all" placeholder="Notas adicionales...">${currentData.observacion || currentData.criterios || ''}</textarea>
            </div>
        </div>
        
        <div class="flex justify-end gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
            <button onclick="cancelEdit()" class="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">Cancelar</button>
            <button onclick="saveEdit('${cleanCode}')" class="px-5 py-2 text-sm font-bold text-white bg-themed hover:bg-themed-dark rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95">Guardar Cambios</button>
        </div>
    `;

    modalDesc.parentNode.insertBefore(editContainer, modalDesc.nextSibling);
};

window.cancelEdit = function () {
    const editContainer = document.getElementById('editContainer');
    if (editContainer) editContainer.remove();
    const infoDiv = document.getElementById('modalExtraInfo');
    if (infoDiv) infoDiv.classList.remove('hidden');
};

window.saveEdit = function (code) {
    const incluye = document.getElementById('editIncluye').value.trim();
    const excluye = document.getElementById('editExcluye').value.trim();
    const obs = document.getElementById('editObs').value.trim();

    const cleanCode = String(code).padStart(6, '0');
    if (!userOverrides[cleanCode]) userOverrides[cleanCode] = {};

    if (incluye) userOverrides[cleanCode].incluye = incluye; else delete userOverrides[cleanCode].incluye;
    if (excluye) userOverrides[cleanCode].excluye = excluye; else delete userOverrides[cleanCode].excluye;
    if (obs) userOverrides[cleanCode].observacion = obs; else delete userOverrides[cleanCode].observacion;

    // Clean empty objects
    if (Object.keys(userOverrides[cleanCode]).length === 0) delete userOverrides[cleanCode];

    localStorage.setItem('userOverrides', JSON.stringify(userOverrides));

    // Refresh modal
    cancelEdit();
    // Re-render info part
    const item = { code: cleanCode, description: modalDesc.textContent }; // Hacky re-open
    openModal(item);

    // Show Toast
    const copyBtn = document.getElementById('copyButton');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = `<span class="text-green-200">¡Guardado Persistente!</span>`;
    copyBtn.classList.add('bg-green-600');
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.classList.remove('bg-green-600');
    }, 1500);
};

init();

