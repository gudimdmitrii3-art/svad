// Таймер обратного отсчета
function updateCountdown() {
    const weddingDate = new Date('October 12, 2025 16:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearCountdown();
    }
}

function clearCountdown() {
    document.getElementById("timer").innerHTML = "<div class='countdown__item'><span class='countdown__number' style='font-size: 2rem;'>Мы поженились!</span></div>";
}

// Управление музыкой
const audio = document.getElementById('weddingMusic');
const musicToggle = document.getElementById('musicToggle');

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicToggle.textContent = '🔇 Выключить звук';
    } else {
        audio.pause();
        musicToggle.textContent = '🔊 Включить звук';
    }
}

musicToggle.addEventListener('click', toggleMusic);

// Запуск таймера
updateCountdown();
setInterval(updateCountdown, 1000);