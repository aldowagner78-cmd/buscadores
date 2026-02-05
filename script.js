
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
const dataSources = {
    elementos: deduplicate(typeof elementosDataRaw !== 'undefined' ? elementosDataRaw : [], 'code'),
    pmo: deduplicate(typeof pmoDataRaw !== 'undefined' ? pmoDataRaw : [], 'code'),
    iapos: deduplicate(typeof iaposDataRaw !== 'undefined' ? iaposDataRaw : [], 'code')
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
    currentData = dataSources[tabName];

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
        const cleanCode = String(item.code).replace(/\./g, '').trim();
        let extraBadge = '';
        if (window.enrichedDataRaw && window.enrichedDataRaw[cleanCode]) {
            extraBadge = `<span class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" title="Información Extra Disponible">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Info
             </span>`;
        }

        card.innerHTML = `
            <div class="flex-1 pr-4">
                <div class="flex items-center mb-1">
                    <span class="font-mono font-bold text-iapos-dark dark:text-iapos-light text-lg">${item.code}</span>
                    ${extraBadge}
                </div>
                <div class="text-slate-600 dark:text-slate-300 font-medium text-sm md:text-base leading-snug">${item.description}</div>
            </div>
            <button class="text-slate-300 hover:text-iapos-light transition-colors">
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

    // Enrich Modal Content
    const cleanCode = String(item.code).replace(/\./g, '').trim();
    const extraData = (window.enrichedDataRaw && window.enrichedDataRaw[cleanCode]) ? window.enrichedDataRaw[cleanCode] : null;

    const existingExtra = document.getElementById('modalExtraInfo');
    if (existingExtra) existingExtra.remove();

    if (extraData) {
        const extraDiv = document.createElement('div');
        extraDiv.id = 'modalExtraInfo';
        extraDiv.className = 'mt-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 text-sm text-left border border-slate-200 dark:border-slate-600';

        extraDiv.innerHTML = `
            <h4 class="font-bold text-slate-700 dark:text-slate-300 mb-2 border-b border-slate-200 dark:border-slate-600 pb-1 flex justify-between">
                <span>Detalles (Nomenclador)</span>
                <span class="text-xs font-normal text-slate-500">${extraData.categoria}</span>
            </h4>
            <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                <div class="flex justify-between"><span class="text-slate-500 text-xs">Galenos:</span> <span class="font-mono font-bold">${extraData.galenos}</span></div>
                <div class="flex justify-between"><span class="text-slate-500 text-xs">Gastos:</span> <span class="font-mono font-bold">${extraData.gastos}</span></div>
                <div class="flex justify-between border-t border-slate-200 dark:border-slate-600 pt-1 mt-1 col-span-2">
                    <span class="text-slate-600 dark:text-slate-400 font-bold">TOTAL:</span> 
                    <span class="font-mono font-bold text-green-600 dark:text-green-400 text-lg">${extraData.total}</span>
                </div>
            </div>
        `;
        modalDesc.parentNode.insertBefore(extraDiv, modalDesc.nextSibling);
    }

    // Auto Copy on Click? Maybe too aggressive. Keep button.
    copyBtn.innerHTML = `
        <span class="flex items-center justify-center gap-2">
            <span>Copiar Código</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
        </span>
    `;

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
    }, 300);
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(modalCode.textContent).then(() => {
        copyBtn.innerHTML = `<span class="text-white">¡Copiado Exitosamente!</span>`;
        if (currentTab === 'iapos') copyBtn.classList.add('bg-green-500'); // Valid feedback
        setTimeout(() => closeModal(), 800);
    });
});

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
init();

