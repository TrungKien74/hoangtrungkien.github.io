/* 
 * main.js - Core site logic
 * Handles theme, auth UI, notifications, and mobile navigation
 */

document.addEventListener("DOMContentLoaded", () => {
    initThemeManager();
    initAuthUI();
    initMobileMenu();
    initScrollAnimations();
    initBackToTop();
    initCookieConsent();
    initPremiumEffects();
});

// --- Theme Management ---
function initThemeManager() {
    const btn = document.getElementById("btn-theme-toggle");
    if (!btn) return;
    const icon = btn.querySelector(".material-symbols-outlined");
    const saved = localStorage.getItem("np-theme") || "light";
    applyTheme(saved, icon);

    btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "light" ? "dark" : "light";
        applyTheme(next, icon);
        localStorage.setItem("np-theme", next);
        Toast.show(next === "dark" ? "Đã chuyển sang chế độ tối" : "Đã chuyển sang chế độ sáng", "info");
    });
}

function applyTheme(theme, icon) {
    document.documentElement.setAttribute("data-theme", theme);
    if (icon) icon.textContent = theme === "dark" ? "light_mode" : "dark_mode";
}

// --- Auth-Aware UI ---
function initAuthUI() {
    const actionsEl = document.querySelector(".header-actions");
    if (!actionsEl || typeof Auth === "undefined") return;

    const user = Auth.getCurrentUser();
    const authLink = actionsEl.querySelector(".auth-link");
    if (authLink) authLink.remove();

    if (user) {
        // Swap sign-in button for user avatar dropdown
        const regBtn = actionsEl.querySelector("a.btn-primary");
        if (regBtn) regBtn.remove();

        const dropdown = document.createElement("div");
        dropdown.className = "user-dropdown";
        dropdown.innerHTML = `
            <button class="user-avatar-btn" aria-label="Menu tài khoản">
                <img src="${user.avatar}" alt="${user.firstName}" class="avatar-sm">
                <span class="avatar-name">${user.firstName}</span>
                <span class="material-symbols-outlined" style="font-size:18px;">expand_more</span>
            </button>
            <div class="dropdown-menu">
                <div class="dropdown-header">
                    <img src="${user.avatar}" alt="${user.firstName}" class="avatar-md">
                    <div><strong>${user.firstName} ${user.lastName}</strong><span>${user.email}</span></div>
                </div>
                <hr>
                <a href="${getPagePath('pages/profile.html')}"><span class="material-symbols-outlined">person</span> Hồ Sơ Cá Nhân</a>
                <a href="${getPagePath('pages/bookmarks.html')}"><span class="material-symbols-outlined">bookmarks</span> Bài Viết Đã Lưu</a>
                <a href="${getPagePath('pages/history.html')}"><span class="material-symbols-outlined">history</span> Lịch Sử Đọc</a>
                <hr>
                <a href="#" id="btn-logout"><span class="material-symbols-outlined">logout</span> Đăng Xuất</a>
            </div>
        `;
        actionsEl.appendChild(dropdown);

        // Toggle dropdown
        const avatarBtn = dropdown.querySelector('.user-avatar-btn');
        const menu = dropdown.querySelector('.dropdown-menu');
        avatarBtn.addEventListener('click', (e) => { e.stopPropagation(); menu.classList.toggle('show'); });
        document.addEventListener('click', () => menu.classList.remove('show'));

        // Logout
        dropdown.querySelector('#btn-logout').addEventListener('click', (e) => {
            e.preventDefault();
            Auth.logout();
            Toast.show("Đã đăng xuất thành công!", "success");
            setTimeout(() => window.location.href = getPagePath('index.html'), 800);
        });
    }
}

function getPagePath(page) {
    const depth = window.location.pathname.split('/').filter(Boolean);
    const isInPages = depth.some(p => p === 'pages');
    if (isInPages) return page.startsWith('pages/') ? page.replace('pages/', '') : '../' + page;
    return page;
}

// --- Toast Notifications ---
const Toast = {
    container: null,
    init() {
        if (this.container) return;
        this.container = document.createElement('div');
        this.container.id = 'toast-container';
        document.body.appendChild(this.container);
    },
    show(message, type = 'info', duration = 3000) {
        this.init();
        const icons = { success: 'check_circle', error: 'error', info: 'info', warning: 'warning' };
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `<span class="material-symbols-outlined">${icons[type]}</span><span>${message}</span>`;
        this.container.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('show'));
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 400);
        }, duration);
    }
};

// --- Mobile Menu ---
function initMobileMenu() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const hamburger = document.createElement("button");
    hamburger.className = "icon-btn mobile-menu-btn";
    hamburger.setAttribute("aria-label", "Menu di động");
    hamburger.innerHTML = '<span class="material-symbols-outlined">menu</span>';

    const inner = header.querySelector(".header-inner");
    if (inner) inner.insertBefore(hamburger, inner.firstChild);

    hamburger.addEventListener("click", () => {
        const nav = header.querySelector(".nav-links");
        if (nav) {
            nav.classList.toggle("open");
            hamburger.querySelector('.material-symbols-outlined').textContent = nav.classList.contains('open') ? 'close' : 'menu';
        }
    });
}

// --- Scroll Reveal Animations ---
function initScrollAnimations() {
    const els = document.querySelectorAll(".reveal:not(.is-observed), .fade-in:not(.is-observed), .reveal-left:not(.is-observed), .reveal-right:not(.is-observed), .reveal-scale:not(.is-observed), .reveal-sidebar-item:not(.is-observed)");
    if (!els.length || !("IntersectionObserver" in window)) return;

    if (!window.npScrollObserver) {
        window.npScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    window.npScrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    }

    els.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 10) * 0.05}s`;
        el.classList.add("is-observed");
        window.npScrollObserver.observe(el);
    });
}

// --- Back To Top ---
function initBackToTop() {
    const btn = document.createElement("button");
    btn.id = "back-to-top";
    btn.setAttribute("aria-label", "Về đầu trang");
    btn.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_up</span>';
    document.body.appendChild(btn);

    window.addEventListener("scroll", () => {
        btn.classList.toggle("visible", window.scrollY > 400);
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// --- Cookie Consent ---
function initCookieConsent() {
    if (localStorage.getItem("np-cookie-consent")) return;

    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.innerHTML = `
        <div class="cookie-inner">
            <span class="material-symbols-outlined" style="font-size:1.5rem; flex-shrink:0;">cookie</span>
            <p>Chúng tôi sử dụng cookie để cải thiện trải nghiệm đọc. Tiếp tục sử dụng trang web đồng nghĩa với việc bạn đồng ý. <a href="#">Tìm hiểu thêm</a></p>
            <button id="accept-cookies" class="btn btn-primary" style="flex-shrink:0;">Đồng ý</button>
        </div>
    `;
    document.body.appendChild(banner);

    requestAnimationFrame(() => banner.classList.add("show"));

    document.getElementById("accept-cookies").addEventListener("click", () => {
        localStorage.setItem("np-cookie-consent", "true");
        banner.classList.remove("show");
        setTimeout(() => banner.remove(), 500);
    });
}

// --- Social Sharing ---
function shareArticle(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
        copy: null
    };
    if (platform === 'copy') {
        navigator.clipboard.writeText(window.location.href).then(() => Toast.show("Đã sao chép liên kết!", "success"));
        return;
    }
    if (urls[platform]) window.open(urls[platform], '_blank', 'width=600,height=400');
}