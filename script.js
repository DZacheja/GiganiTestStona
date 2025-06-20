function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.remove('hidden');
            page.classList.add('active');
        } else {
            page.classList.add('hidden');
            page.classList.remove('active');
        }
    });
}

// Pokazujemy stronę główną domyślnie
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
