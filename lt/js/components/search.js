/* Search component - In-app search with key nav support */

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("search-overlay");
    const openBtn = document.getElementById("btn-search");
    const closeBtn = document.getElementById("close-search");
    const input = document.getElementById("live-search-input");
    const suggestionsEl = document.getElementById("search-suggestions");

    if (!overlay || !openBtn) return;

    let selectedIndex = -1;

    // Open/Close handlers
    const openSearch = () => {
        overlay.style.display = "flex";
        overlay.classList.add("active");
        if (input) {
            input.value = "";
            renderInitialState();
            setTimeout(() => input.focus(), 150);
        }
    };

    const closeSearch = () => {
        overlay.classList.remove("active");
        setTimeout(() => overlay.style.display = "none", 300);
    };

    openBtn.addEventListener("click", openSearch);
    if (closeBtn) closeBtn.addEventListener("click", closeSearch);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeSearch();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay.style.display === "flex") closeSearch();
        if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); openSearch(); }
        
        // Keyboard Nav
        if (overlay.style.display === "flex") {
            const items = suggestionsEl.querySelectorAll(".search-item");
            if (e.key === "ArrowDown") {
                selectedIndex = (selectedIndex + 1) % items.length;
                updateSelection(items);
            } else if (e.key === "ArrowUp") {
                selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                updateSelection(items);
            } else if (e.key === "Enter" && selectedIndex > -1) {
                items[selectedIndex].click();
            }
        }
    });

    function updateSelection(items) {
        items.forEach((item, idx) => {
            item.classList.toggle("selected", idx === selectedIndex);
            if (idx === selectedIndex) item.scrollIntoView({ block: 'nearest' });
        });
    }

    // Search Input + Debounce
    let debounce;
    if (input && suggestionsEl) {
        input.addEventListener("input", () => {
            selectedIndex = -1;
            clearTimeout(debounce);
            debounce = setTimeout(() => search(input.value.trim()), 200);
        });
    }

    function renderInitialState() {
        // Show "Xu hướng" or "Trending" when empty
        const trending = typeof ArticlesDB !== 'undefined' ? ArticlesDB.slice(0, 3) : [];
        if (trending.length === 0) return;

        suggestionsEl.innerHTML = `
            <div style="font-family:var(--font-label); font-size:var(--text-xs); text-transform:uppercase; letter-spacing:0.15em; color:var(--outline); margin-bottom:var(--sp-4); margin-top:var(--sp-6);">Xu hướng quan tâm</div>
            <div class="search-initial-grid">
                ${trending.map(a => `
                    <a href="${window.location.pathname.includes('/pages/') ? '' : 'pages/'}article.html?id=${a.id}" class="trending-pill">
                        <span class="material-symbols-outlined">trending_up</span>
                        ${a.title}
                    </a>
                `).join('')}
            </div>
        `;
    }

    function search(q) {
        if (!suggestionsEl) return;
        if (!q) { renderInitialState(); return; }

        if (typeof ArticlesDB === 'undefined') return;

        const results = ArticlesDB.filter(a =>
            a.title.toLowerCase().includes(q.toLowerCase()) ||
            a.categoryLabel.toLowerCase().includes(q.toLowerCase()) ||
            (a.tags && a.tags.some(t => t.toLowerCase().includes(q.toLowerCase())))
        ).slice(0, 8);

        if (results.length === 0) {
            suggestionsEl.innerHTML = `
                <div style="padding:var(--sp-12); text-align:center; color:var(--on-surface-variant); animation: fadeIn 0.3s ease;">
                    <span class="material-symbols-outlined" style="font-size:3rem; display:block; margin-bottom:var(--sp-3); color:var(--surface-container-highest);">search_off</span>
                    <p style="font-family:var(--font-body);">Không tìm thấy báo cáo cho "<strong>${escapeHTML(q)}</strong>"</p>
                </div>`;
            return;
        }

        suggestionsEl.innerHTML = results.map(r => `
            <a href="${window.location.pathname.includes('/pages/') ? '' : 'pages/'}article.html?id=${r.id}" class="search-item">
                <div class="search-item-img"><img src="${r.image}" alt=""></div>
                <div class="search-item-info">
                    <div class="search-item-title">${highlightMatch(r.title, q)}</div>
                    <div class="search-item-meta">
                        <span class="cat-label">${r.categoryLabel}</span>
                        <span class="dot">•</span>
                        <span>${r.readTime} phút đọc</span>
                    </div>
                </div>
                <span class="material-symbols-outlined nav-arrow">chevron_right</span>
            </a>
        `).join("");

        // Add "View All" link
        if (results.length > 0) {
            const viewAllLink = document.createElement("a");
            viewAllLink.href = `${window.location.pathname.includes('/pages/') ? '' : 'pages/'}search.html?q=${encodeURIComponent(q)}`;
            viewAllLink.className = "search-view-all";
            viewAllLink.innerHTML = `<span>Xem tất cả kết quả cho "${q}"</span> <span class="material-symbols-outlined">arrow_forward</span>`;
            suggestionsEl.appendChild(viewAllLink);
        }
    }

    function highlightMatch(text, q) {
        const reg = new RegExp(`(${escapeRegex(q)})`, "gi");
        return text.replace(reg, "<span class='highlight'>$1</span>");
    }

    function escapeHTML(str) { return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])); }
    function escapeRegex(str) { return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

    // Component-specific styles
    const style = document.createElement("style");
    style.textContent = `
        #search-overlay { opacity: 0; transition: opacity 0.3s ease, backdrop-filter 0.3s ease; display: none; }
        #search-overlay.active { opacity: 1; }
        
        .search-initial-grid { display: flex; flex-wrap: wrap; gap: var(--sp-2); }
        .trending-pill { display: flex; align-items: center; gap: var(--sp-2); padding: var(--sp-2) var(--sp-4); background: var(--surface-container-low); border: 1px solid var(--border-light); border-radius: var(--radius-pill); font-family: var(--font-body); font-size: var(--text-sm); color: var(--primary); text-decoration: none; transition: all 0.2s; }
        .trending-pill:hover { background: var(--primary); color: var(--on-primary); transform: translateY(-2px); }
        .trending-pill span { font-size: 16px; }

        .search-item { display: flex; align-items: center; gap: var(--sp-4); padding: var(--sp-4); border-radius: var(--radius-lg); text-decoration: none; color: var(--on-surface); transition: all 0.2s; border-bottom: 1px solid var(--surface-container-low); margin-bottom: 4px; }
        .search-item:hover, .search-item.selected { background: var(--surface-container-high); transform: translateX(8px); border-bottom-color: transparent; }
        .search-item-img { width: 64px; height: 64px; border-radius: var(--radius); overflow: hidden; flex-shrink: 0; }
        .search-item-img img { width: 100%; height: 100%; object-fit: cover; }
        .search-item-info { flex: 1; }
        .search-item-title { font-family: var(--font-headline); font-size: var(--text-base); color: var(--primary); line-height: 1.4; }
        .search-item-meta { font-family: var(--font-label); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--on-surface-variant); margin-top: 4px; display: flex; align-items: center; gap: 8px; }
        .highlight { color: var(--secondary); font-weight: 700; background: rgba(var(--secondary-rgb, 103, 80, 164), 0.1); padding: 0 2px; border-radius: 2px; }
        .nav-arrow { color: var(--outline); font-size: 18px; opacity: 0; transition: all 0.2s; }
        .search-item:hover .nav-arrow { opacity: 1; transform: translateX(4px); }
        
        .search-view-all { display: flex; align-items: center; justify-content: center; gap: 8px; padding: var(--sp-4); margin-top: var(--sp-4); background: var(--surface-container); border-radius: var(--radius-lg); font-family: var(--font-label); font-size: var(--text-sm); color: var(--primary); font-weight: 600; text-decoration: none; transition: all 0.2s; border: 1px solid var(--border-light); }
        .search-view-all:hover { background: var(--primary); color: var(--on-primary); transform: translateY(-2px); }
        .search-view-all span { font-size: 14px; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(style);
});