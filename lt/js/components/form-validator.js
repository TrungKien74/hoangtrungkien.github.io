/* Form validation component - Regex-based checks and password meter */

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    if (!registerForm) return;

    const fields = {
        "reg-first": { regex: /^.{2,}$/, msg: "Họ phải có ít nhất 2 ký tự." },
        "reg-last": { regex: /^.{2,}$/, msg: "Tên phải có ít nhất 2 ký tự." },
        "reg-email": { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: "Email không đúng định dạng." },
        "reg-password": { regex: /^.{8,}$/, msg: "Mật khẩu phải có ít nhất 8 ký tự." },
    };

    // Real-time validation hooks
    Object.entries(fields).forEach(([id, rule]) => {
        const input = document.getElementById(id);
        if (!input) return;

        input.addEventListener("input", () => validateField(input, rule));
        input.addEventListener("blur", () => validateField(input, rule));
    });

    // Password strength logic
    const pwInput = document.getElementById("reg-password");
    const meter = document.getElementById("pw-meter");
    const fill = document.getElementById("pw-meter-fill");
    const hint = document.getElementById("pw-hint");

    if (pwInput && meter && fill) {
        pwInput.addEventListener("input", () => {
            const val = pwInput.value;
            if (val.length === 0) {
                meter.style.display = "none";
                if (hint) hint.textContent = "Tối thiểu 8 ký tự, bao gồm chữ hoa, chữ thường và số.";
                return;
            }
            meter.style.display = "block";

            let score = 0;
            if (val.length >= 8) score++;
            if (/[A-Z]/.test(val)) score++;
            if (/[a-z]/.test(val)) score++;
            if (/[0-9]/.test(val)) score++;
            if (/[^A-Za-z0-9]/.test(val)) score++;

            const levels = [
                { width: "20%", color: "#ef4444", label: "Rất yếu" },
                { width: "40%", color: "#f97316", label: "Yếu" },
                { width: "60%", color: "#eab308", label: "Trung bình" },
                { width: "80%", color: "#22c55e", label: "Mạnh" },
                { width: "100%", color: "#10b981", label: "Rất mạnh" },
            ];

            const level = levels[Math.min(score, 4)];
            fill.style.width = level.width;
            fill.style.backgroundColor = level.color;
            if (hint) hint.textContent = `Độ mạnh: ${level.label}`;
            if (hint) hint.style.color = level.color;
        });
    }

    // Final submission check
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let allValid = true;

        Object.entries(fields).forEach(([id, rule]) => {
            const input = document.getElementById(id);
            if (input && !validateField(input, rule)) allValid = false;
        });

        if (allValid) {
            alert("🎉 Đăng ký thành công! Chào mừng bạn đến với The Newsroom Prime.");
            registerForm.reset();
            if (meter) meter.style.display = "none";
            if (hint) { hint.textContent = "Tối thiểu 8 ký tự, bao gồm chữ hoa, chữ thường và số."; hint.style.color = ""; }
            document.querySelectorAll(".input-group").forEach(g => { g.classList.remove("is-valid", "is-invalid"); });
        }
    });

    function validateField(input, rule) {
        const group = input.closest(".input-group");
        if (!group) return true;

        const isValid = rule.regex.test(input.value);
        const feedback = group.querySelector(".feedback");

        group.classList.remove("is-valid", "is-invalid");

        if (input.value.length === 0) return true; // Don't show error for empty fields on blur

        if (isValid) {
            group.classList.add("is-valid");
        } else {
            group.classList.add("is-invalid");
            if (feedback) feedback.textContent = rule.msg;
        }
        return isValid;
    }
});