// Анимация кнопки Connect
const connectBtn = document.getElementById('connectBtn');
connectBtn.addEventListener('click', function() {
    this.textContent = 'Connecting...';
    this.classList.add('loading');

    // Симуляция подключения (через 2 секунды)
    setTimeout(() => {
        this.textContent = 'Connected!';
        this.classList.remove('pulse');
        this.style.background = '#4CAF50';
    }, 2000);
});

// Мобильное меню
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Анимация при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Запуск при загрузке