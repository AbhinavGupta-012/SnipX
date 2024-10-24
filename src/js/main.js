// Particle system setup
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
const particles = [];

function initParticles() {
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

// Preloader and content management
window.addEventListener('load', () => {
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
    
    // Initialize particles immediately
    initParticles();
    animate();
    
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
        canvas.classList.add('visible');
        app.classList.add('visible');
    }, loadingTime);
});

// Handle window resize for particles
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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