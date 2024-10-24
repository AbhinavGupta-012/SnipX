// Preloader and content management
window.addEventListener('load', () => {
    // Initialize shared layout (including particles) for all pages
    initializeLayout();
    
    // Only handle preloader on index.html
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        const preloader = document.querySelector('.preloader');
        const preloaderText = document.querySelector('.preloader-text');
        const app = document.querySelector('#app');
        
        const loadingMessages = [
            'Loading SnipX...',
            'Preparing your workspace...',
            'Almost there...',
            'Getting things ready...'
        ];
        
        let messageIndex = 0;
        const loadingTime = 4500; // 4.5 seconds
        const messageChangeInterval = loadingTime / loadingMessages.length;
        
        // Change messages periodically
        const messageTimer = setInterval(() => {
            messageIndex = (messageIndex + 1) % loadingMessages.length;
            preloaderText.style.opacity = '0';
            
            setTimeout(() => {
                preloaderText.textContent = loadingMessages[messageIndex];
                preloaderText.style.opacity = '1';
            }, 200);
        }, messageChangeInterval);
        
        // Show content after loading time
        setTimeout(() => {
            clearInterval(messageTimer);
            preloader.style.display = 'none';
            app.classList.add('visible');
        }, loadingTime);
    } else {
        // For other pages, show content immediately
        document.querySelector('#app').classList.add('visible');
    }
});


const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeButton(isDarkMode);
}

function updateDarkModeButton(isDarkMode) {
    const icon = darkModeToggle.querySelector('i');
    icon.classList.remove('fa-moon', 'fa-sun');
    icon.classList.add(isDarkMode ? 'fa-sun' : 'fa-moon');
}

const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
    updateDarkModeButton(true);
}

darkModeToggle.addEventListener('click', toggleDarkMode);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});