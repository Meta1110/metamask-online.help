// Добавьте этот код в ваш script.js

// Модальное окно инструкции
const connectBtn = document.getElementById('connectBtn');
const modal = document.getElementById('walletGuide');
const guideSteps = document.querySelectorAll('.guide-step');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.step-indicators span');

let currentStep = 0;

// Открытие модального окна
connectBtn.addEventListener('click', () => {
    modal.classList.add('active');
    showStep(0);
});

// Навигация
nextBtn.addEventListener('click', () => {
    if (currentStep < 3) {
        currentStep++;
        showStep(currentStep);
    } else {
        modal.classList.remove('active');
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

// Функция показа шага
function showStep(step) {
    guideSteps.forEach((s, i) => {
        s.classList.toggle('active', i === step);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === step);
    });
    
    prevBtn.disabled = step === 0;
    nextBtn.textContent = step === 3 ? 'Готово' : 'Далее';
}

// Копирование ссылки
function copyLink() {
    const link = 'https://metamask-online.help';
    navigator.clipboard.writeText(link)
        .then(() => {
            const btn = document.querySelector('.btn-copy');
            btn.textContent = 'Скопировано!';
            setTimeout(() => {
                btn.textContent = 'Скопировать ссылку';
            }, 2000);
        });
}

// Закрытие модального окна при клике вне его
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});