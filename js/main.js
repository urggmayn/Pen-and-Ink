// --- SHARED HEADER INJECTION ---
function injectHeader() {
    const headerHTML = `
    <header>
        <button id="hamburger" class="menu-btn menu-left" aria-label="Menu">
            <span class="bar"></span><span class="bar"></span><span class="bar"></span>
        </button>
        <h1>Master Profile</h1>
        <a href="index.html" class="back-btn">Back</a>
    </header>
    <nav id="sidebar" class="sidebar">
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
        </ul>
        <div class="sidebar-footer">
            <button class="settings-trigger" id="openSettings">Settings</button>
        </div>
    </nav>
    <div id="overlay" class="overlay"></div>
    
    <div id="settingsModal" class="modal">
        <button class="close-modal" id="closeSettings">× Close</button>
        <h2>Settings</h2>
        <div class="setting-group">
            <label>Theme</label>
            <div class="btn-group">
                <button class="btn-option" onclick="setTheme('light')">Light</button>
                <button class="btn-option" onclick="setTheme('dark')">Dark</button>
                <button class="btn-option" onclick="setTheme('amoled')">AMOLED</button>
            </div>
        </div>
        <div class="setting-group">
            <label>Menu Position</label>
            <div class="btn-group">
                <button class="btn-option" onclick="setMenuPos('left')">Left</button>
                <button class="btn-option" onclick="setMenuPos('right')">Right</button>
            </div>
        </div>
    </div>`;
    
    // Only inject if header doesn't exist
    if (!document.querySelector('header')) {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
}

// --- CORE FUNCTIONS ---
const els = {}; 

function init() {
    // 1. Inject Header on all pages except Index (Index has custom header)
    if (!document.querySelector('.home-main')) {
        injectHeader();
    }
    
    // 2. Populate 'els' object (Moving this inside init prevents "element not found" errors on load)
    els.bod = document.body;
    els.viewer = document.getElementById('imageViewer');
    els.viewerImg = document.getElementById('viewerImg');
    els.closeViewer = document.getElementById('closeViewer');
    els.zoomIn = document.getElementById('zoomIn');
    els.zoomOut = document.getElementById('zoomOut');
    els.resetZoom = document.getElementById('resetZoom');
    els.search = document.getElementById('searchBar');
    els.ham = document.getElementById('hamburger');
    els.bar = document.getElementById('sidebar');
    els.ovl = document.getElementById('overlay');
    els.mod = document.getElementById('settingsModal');
    
    // 3. Bind Events (Check if elements exist first)
    if(els.ham) els.ham.addEventListener('click', toggleMenu);
    if(els.ovl) els.ovl.addEventListener('click', closeAll);
    if(document.getElementById('openSettings')) document.getElementById('openSettings').addEventListener('click', openSettings);
    if(document.getElementById('closeSettings')) document.getElementById('closeSettings').addEventListener('click', closeAll);
    if(els.closeViewer) els.closeViewer.addEventListener('click', closeAll);

    // 4. Check if we are on the Artist Page
    if (document.getElementById('artist-hero')) {
        loadArtistData();
    }
    
    // 5. Load Preferences
    setTheme(localStorage.getItem('theme') || 'light');
    setMenuPos(localStorage.getItem('menuPos') || 'left');
}

// --- NAVIGATION & MODALS ---
function toggleMenu() {
    if(els.bar) els.bar.classList.toggle('open');
    if(els.ovl) els.ovl.classList.toggle('active');
    toggleLock();
}

function openSettings() {
    if(els.bar) els.bar.classList.remove('open');
    if(els.mod) els.mod.classList.add('active');
    if(els.ovl) {
        els.ovl.classList.add('active');
        els.ovl.classList.add('modal-mode');
    }
    toggleLock(true);
}

function closeAll() {
    if(els.bar) els.bar.classList.remove('open');
    if(els.mod) els.mod.classList.remove('active');
    if(els.ovl) {
        els.ovl.classList.remove('active');
        els.ovl.classList.remove('modal-mode');
    }
    if(els.viewer) els.viewer.classList.remove('active');
    toggleLock(false);
}

function toggleLock(force) {
    const locked = force || (els.ovl && els.ovl.classList.contains('active')) || (els.viewer && els.viewer.classList.contains('active'));
    if(els.bod) els.bod.classList.toggle('noscroll', locked);
}

// --- ARTIST PAGE LOADER ---
function loadArtistData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const artist = db[id];

    if (!artist) {
        document.querySelector('main').innerHTML = "<h2>Artist not found</h2><a href='index.html'>Go Back</a>";
        return;
    }

    document.title = `${artist.name} | Ink Archive`;
    document.getElementById('artist-name').textContent = artist.name;
    document.getElementById('artist-dates').textContent = artist.dates;
    
    const tagContainer = document.getElementById('artist-tags');
    tagContainer.innerHTML = artist.tags.map(t => `<span>${t}</span>`).join('');

    const bioContainer = document.getElementById('artist-bio');
    bioContainer.innerHTML = artist.bio.map(p => `<p>${p}</p>`).join('');

    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = artist.works.map((work, index) => `
        <div class="art-item skeleton-loading" 
             onclick="openViewer(${index})">
            <img src="${work.thumb}" class="art-img" onload="this.classList.add('loaded'); this.parentElement.classList.remove('skeleton-loading')" alt="${work.title}">
            <div class="mag-icon"><svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white"/></svg></div>
            <div class="art-title">${work.title}</div>
        </div>
    `).join('');
}

// --- IMAGE VIEWER ---
window.openViewer = function(index) {
    if(!els.viewer) return;
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    
    if (!db[id] || !db[id].works[index]) return;

    const work = db[id].works[index];

    document.getElementById('vTitle').textContent = work.title;
    document.getElementById('vMeta').textContent = work.meta;
    document.getElementById('vDesc').textContent = work.desc;
    
    els.viewer.classList.add('active');
    els.viewer.classList.add('loading');
    toggleLock(true);
    els.viewerImg.src = "";
    
    const tmp = new Image();
    tmp.onload = () => { els.viewerImg.src = work.full; els.viewer.classList.remove('loading'); resetZoomState(); };
    tmp.src = work.full;
}

// Viewer Zoom/Pan State
let vState = { scale: 1, x: 0, y: 0, sx: 0, sy: 0, panning: false };

function updateView() { els.viewerImg.style.transform = `translate(${vState.x}px, ${vState.y}px) scale(${vState.scale})`; }
function resetZoomState() { vState = { scale: 1, x: 0, y: 0, sx: 0, sy: 0, panning: false }; updateView(); }

document.addEventListener('DOMContentLoaded', () => {
});

function bindViewerEvents() {
    if(els.zoomIn) {
        els.zoomIn.onclick = () => { vState.scale += 0.5; updateView(); };
        els.zoomOut.onclick = () => { if(vState.scale > 0.6) { vState.scale -= 0.5; updateView(); } };
        els.resetZoom.onclick = resetZoomState;
        
        const onDown = (e) => { 
            if(vState.scale > 1) { 
                vState.panning = true; 
                vState.sx = (e.touches?e.touches[0].clientX:e.clientX) - vState.x; 
                vState.sy = (e.touches?e.touches[0].clientY:e.clientY) - vState.y; 
                els.viewerImg.style.transition='none'; 
            }
        };
        const onMove = (e) => { 
            if(vState.panning) { 
                if(e.cancelable) e.preventDefault(); 
                vState.x = (e.touches?e.touches[0].clientX:e.clientX) - vState.sx; 
                vState.y = (e.touches?e.touches[0].clientY:e.clientY) - vState.sy; 
                updateView(); 
            }
        };
        const onUp = () => { vState.panning = false; els.viewerImg.style.transition='transform 0.1s'; };
    
        els.viewerImg.addEventListener('mousedown', onDown);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        
        els.viewerImg.addEventListener('touchstart', onDown);
        window.addEventListener('touchmove', onMove, { passive: false });
        window.addEventListener('touchend', onUp);
    }
}

const originalInit = init;
init = function() {
    originalInit();
    bindViewerEvents();
}

// Viewer Info Toggle
const infoBtn = document.getElementById('toggleInfo');
if(infoBtn) infoBtn.addEventListener('click', (e) => { e.stopPropagation(); document.getElementById('viewerInfo').classList.toggle('active'); });

// --- INDEX SEARCH ---
if(document.getElementById('searchBar')) {
    window.filterMasters = function(category) {
        const search = document.getElementById('searchBar');
        if(search) search.value = '';
        const cards = document.querySelectorAll('.card');
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.getAttribute('onclick').includes(category)));

        cards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            card.style.display = (category === 'all' || cardCat === category) ? 'flex' : 'none';
        });
    };

    document.getElementById('searchBar').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.getAttribute('onclick').includes("'all'")));

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const tags = card.querySelector('.tags').textContent.toLowerCase();
            card.style.display = (title.includes(term) || tags.includes(term)) ? 'flex' : 'none';
        });
    });
}

// --- BACK TO TOP ---
const backBtn = document.getElementById('backToTop');
if(backBtn) {
    window.addEventListener('scroll', () => { backBtn.classList.toggle('visible', window.scrollY > 300); });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// --- PREFERENCES ---
window.setTheme = (t) => { document.documentElement.setAttribute('data-theme', t); localStorage.setItem('theme', t); updateUI(); };
window.setMenuPos = (p) => { 
    if(els.ham) els.ham.className = `menu-btn menu-${p}`;
    if(els.bar) els.bar.className = `sidebar ${p==='right'?'from-right':''}`;
    localStorage.setItem('menuPos', p); 
    updateUI(); 
};
function updateUI() {
    const t = localStorage.getItem('theme')||'light', p = localStorage.getItem('menuPos')||'left';
    document.querySelectorAll('.btn-option').forEach(b => {
        const o = b.getAttribute('onclick');
        if(o) b.classList.toggle('active', o.includes(t) || o.includes(p));
    });
}

window.addEventListener('DOMContentLoaded', init);
