window.addEventListener('load', () => {
    initializeLayout();
    
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
        const loadingTime = 2500;
        const messageChangeInterval = loadingTime / loadingMessages.length;
        
        const messageTimer = setInterval(() => {
            messageIndex = (messageIndex + 1) % loadingMessages.length;
            preloaderText.style.opacity = '0';
            
            setTimeout(() => {
                preloaderText.textContent = loadingMessages[messageIndex];
                preloaderText.style.opacity = '1';
            }, 200);
        }, messageChangeInterval);
        
        setTimeout(() => {
            clearInterval(messageTimer);
            preloader.style.display = 'none';
            app.classList.add('visible');
        }, loadingTime);
    } 
    else {
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

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarCollapse = document.getElementById('navbarNav');
  
    menuToggle.addEventListener('change', () => {
        navbarCollapse.classList.toggle('show');
        if (menuToggle.checked) {
            document.body.style.overflow = 'hidden';
        } 
        else {
            document.body.style.overflow = '';
        }
    });
  
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            menuToggle.checked = false;
            navbarCollapse.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});