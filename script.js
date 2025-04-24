
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle-icon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateThemeIcon(savedTheme === 'dark-mode');
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        
        // Save theme preference
        localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
        
        // Update icon
        updateThemeIcon(isDarkMode);
    });
    
    function updateThemeIcon(isDarkMode) {
        themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
