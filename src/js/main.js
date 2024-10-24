document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const preloaderText = document.querySelector('.preloader-text');
    const body = document.body;
    
    const loadingMessages = [
        'Loading SnipX...',
        'Preparing your workspace...',
        'Almost there...',
        'Getting things ready...'
    ];
    
    let messageIndex = 0;

    // Random time between 2 and 3 seconds
    const loadingTime = Math.random() * (3000 - 2000) + 2000;

    // Calculate how often to change the message
    const messageChangeTime = loadingTime / loadingMessages.length;
    
    // Change loading message at intervals proportional to the loading time
    const messageInterval = setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        preloaderText.style.opacity = '0';
        
        setTimeout(() => {
            preloaderText.textContent = loadingMessages[messageIndex];
            preloaderText.style.opacity = '1';
        }, 1000);
    }, messageChangeTime);

    // Hide preloader and show content after the loading time
    setTimeout(() => {
        clearInterval(messageInterval);
        preloader.classList.add('preloader-hidden');
        body.classList.remove('content-hidden');
        body.classList.add('content-visible');
        
        // Remove preloader from DOM after animation
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 5000);
    }, loadingTime);
});


const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
const particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3,
        color: `rgba(0, 255, 255, ${Math.random()})`,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

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