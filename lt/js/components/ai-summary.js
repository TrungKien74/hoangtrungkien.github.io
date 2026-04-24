/* AI Summary component - Client-side simulated summarization */

document.addEventListener("click", (e) => {
    const btn = e.target.closest("#btn-generate-summary");
    if (!btn) return;
    
    const container = document.getElementById("ai-summary-text");
    if (!container) return;

    btn.disabled = true;
    btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px; animation: spin 1s linear infinite;">progress_activity</span> Đang phân tích dữ liệu...';
    
    // Loading state with skeleton animation
    container.innerHTML = `
        <div class="ai-shimmer-wrapper">
            <div class="ai-skeleton"></div>
            <div class="ai-skeleton" style="width: 80%"></div>
            <div class="ai-skeleton" style="width: 60%"></div>
        </div>
    `;

    const body = document.getElementById("article-body");
    const summary = extractSummary(body ? body.innerText : "");

    setTimeout(() => {
        container.innerHTML = "";
        let words = summary.split(" ");
        btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px; color:var(--secondary);">magic_button</span> Hệ thống đang tổng hợp...';
        
        // Reveal text with a "typing" effect
        words.forEach((word, index) => {
            const span = document.createElement("span");
            span.className = "ai-word-reveal";
            span.style.animationDelay = `${(index * 40)}ms`;
            span.textContent = word;
            container.appendChild(span);
            container.appendChild(document.createTextNode(" "));
        });

        const totalTime = words.length * 40 + 500;
        setTimeout(() => {
            btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">check_circle</span> Đã lấy tóm tắt';
            btn.style.background = "rgba(32, 201, 151, 0.1)";
            btn.style.color = "#20c997";
            btn.style.boxShadow = "none";
        }, totalTime);
        
    }, 1800);
});

function extractSummary(text) {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    if (sentences.length === 0) return "Không có nội dung để tóm tắt.";

    const keywords = ["phát hiện", "khoa học", "vũ trụ", "quan trọng", "thiên hà", "nghiên cứu", "sóng", "năng lượng", "âm thanh", "hố đen", "kinh tế", "bán dẫn", "geneva", "toàn cầu"];
    const scored = sentences.map(s => {
        let score = 0;
        keywords.forEach(k => { if (s.toLowerCase().includes(k)) score += 2; });
        if (s.length > 50 && s.length < 180) score += 1.5;
        return { sentence: s.trim(), score };
    });

    scored.sort((a, b) => b.score - a.score);
    const topSentences = scored.slice(0, 3).map(s => s.sentence);

    return "Điểm nhấn chính: " + topSentences.join(" ");
}

const style = document.createElement("style");
style.textContent = `
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    /* Animations and UI effects */
    .ai-shimmer-wrapper { display: flex; flex-direction: column; gap: 8px; }
    .ai-skeleton { height: 14px; width: 100%; border-radius: 4px; background: linear-gradient(90deg, var(--surface-container-high) 25%, var(--surface-container-highest) 50%, var(--surface-container-high) 75%); background-size: 200% 100%; animation: ai-shimmer 1.5s infinite linear; }
    @keyframes ai-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    .ai-word-reveal { display: inline-block; opacity: 0; filter: blur(8px); transform: translateY(4px); animation: word-reveal 0.4s ease forwards; font-family: var(--font-body); font-size: var(--text-sm); line-height: 1.6; color: var(--on-surface); }
    @keyframes word-reveal { to { opacity: 1; filter: blur(0); transform: translateY(0); } }
`;
document.head.appendChild(style);