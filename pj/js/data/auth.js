// Auth system - Basic localStorage-based auth for demo purposes

const Auth = {
    STORAGE_KEY: 'np-users',
    SESSION_KEY: 'np-session',
    BOOKMARKS_KEY: 'np-bookmarks',
    HISTORY_KEY: 'np-history',
    PREFS_KEY: 'np-prefs',

    // Registration logic
    register(firstName, lastName, email, password) {
        const users = this.getUsers();
        if (users.find(u => u.email === email)) {
            return { success: false, error: 'Email đã được sử dụng.' };
        }
        const user = {
            id: Date.now(),
            firstName,
            lastName,
            email,
            password: this.hashPassword(password),
            avatar: `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=0e1c2b&color=fff&size=128`,
            joinDate: new Date().toISOString(),
            role: 'Thành Viên Premium'
        };
        users.push(user);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
        this.setSession(user);
        return { success: true, user };
    },

    // Login logic
    login(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email);
        if (!user) return { success: false, error: 'Email không tồn tại.' };
        if (user.password !== this.hashPassword(password)) return { success: false, error: 'Mật khẩu không đúng.' };
        this.setSession(user);
        return { success: true, user };
    },

    // Logout
    logout() {
        sessionStorage.removeItem(this.SESSION_KEY);
        localStorage.removeItem(this.SESSION_KEY);
    },

    // Session handling
    setSession(user) {
        const session = { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, avatar: user.avatar, role: user.role };
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    },

    getSession() {
        try { return JSON.parse(localStorage.getItem(this.SESSION_KEY)); }
        catch { return null; }
    },

    isLoggedIn() { return this.getSession() !== null; },

    getCurrentUser() { return this.getSession(); },

    // User DB access
    getUsers() {
        try { return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || []; }
        catch { return []; }
    },

    // Bookmarks management
    toggleBookmark(articleId) {
        const bookmarks = this.getBookmarks();
        const idx = bookmarks.indexOf(articleId);
        if (idx > -1) { bookmarks.splice(idx, 1); } else { bookmarks.push(articleId); }
        localStorage.setItem(this.BOOKMARKS_KEY, JSON.stringify(bookmarks));
        return idx === -1; // true if added
    },

    isBookmarked(articleId) { return this.getBookmarks().includes(articleId); },

    getBookmarks() {
        try { return JSON.parse(localStorage.getItem(this.BOOKMARKS_KEY)) || []; }
        catch { return []; }
    },

    // Reading history tracking
    addToHistory(articleId) {
        let history = this.getHistory();
        history = history.filter(h => h.id !== articleId);
        history.unshift({ id: articleId, time: new Date().toISOString() });
        if (history.length > 50) history = history.slice(0, 50);
        localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
    },

    getHistory() {
        try { return JSON.parse(localStorage.getItem(this.HISTORY_KEY)) || []; }
        catch { return []; }
    },

    // User preferences storage
    getPrefs() {
        try { return JSON.parse(localStorage.getItem(this.PREFS_KEY)) || { categories: ['politics', 'tech'], newsletter: true }; }
        catch { return { categories: ['politics', 'tech'], newsletter: true }; }
    },

    savePrefs(prefs) { localStorage.setItem(this.PREFS_KEY, JSON.stringify(prefs)); },

    // Super simple hash (not for production use!)
    hashPassword(pw) {
        let hash = 0;
        for (let i = 0; i < pw.length; i++) { hash = ((hash << 5) - hash) + pw.charCodeAt(i); hash |= 0; }
        return 'h_' + Math.abs(hash).toString(36);
    }
};