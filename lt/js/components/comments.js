/* Comment system - Simple local storage implementation */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("comment-form");
    const input = document.getElementById("comment-input");
    const list = document.getElementById("comment-list");
    const countLabel = document.getElementById("comment-count-label");
    const STORAGE_KEY = "np-comments-" + (window.location.pathname || "default");

    if (!form || !input || !list) return;

    // Fetch comments on init
    loadComments();

    // Handle new comment submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        const comment = {
            id: Date.now(),
            initials: generateInitials(),
            name: "Khách " + Math.floor(Math.random() * 900 + 100),
            text: text,
            time: new Date().toISOString()
        };

        const comments = getComments();
        comments.unshift(comment);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));

        input.value = "";
        loadComments();
    });

    function loadComments() {
        const comments = getComments();
        updateCount(comments.length);

        if (comments.length === 0) {
            list.innerHTML = `
                <div style="text-align:center; padding:var(--sp-8); color:var(--on-surface-variant);">
                    <span class="material-symbols-outlined" style="font-size:2rem; color:var(--outline); margin-bottom:var(--sp-2); display:block;">forum</span>
                    Chưa có phản hồi nào. Hãy là người đầu tiên!
                </div>`;
            return;
        }

        list.innerHTML = comments.map(c => `
            <div class="comment-item" style="animation: fadeIn 0.4s ease forwards;">
                <div class="comment-avatar">${escapeHTML(c.initials)}</div>
                <div>
                    <div style="display:flex; align-items:baseline; gap:var(--sp-2); margin-bottom:var(--sp-1);">
                        <span class="comment-name">${escapeHTML(c.name)}</span>
                        <span class="comment-date">${formatTime(c.time)}</span>
                    </div>
                    <p class="comment-text">${escapeHTML(c.text)}</p>
                </div>
            </div>
        `).join("");
    }

    function getComments() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
        catch { return []; }
    }

    function updateCount(n) {
        if (countLabel) countLabel.textContent = `${n} Phản Hồi`;
    }

    function generateInitials() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letters[Math.floor(Math.random() * 26)] + letters[Math.floor(Math.random() * 26)];
    }

    function formatTime(isoStr) {
        const d = new Date(isoStr);
        const diff = Math.floor((Date.now() - d.getTime()) / 1000);
        if (diff < 60) return "Vừa xong";
        if (diff < 3600) return Math.floor(diff / 60) + " phút trước";
        if (diff < 86400) return Math.floor(diff / 3600) + " giờ trước";
        return d.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
    }

    function escapeHTML(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }
});