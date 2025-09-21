// Таймер обратного отсчета
function updateCountdown() {
    const weddingDate = new Date('October 12, 2025 10:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Первый таймер
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Второй таймер
    document.getElementById("days2").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours2").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes2").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds2").innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearCountdown();
    }
}

function clearCountdown() {
    const timerText = "<div class='countdown__item'><span class='countdown__number' style='font-size: 1.5rem;'>Мы поженились!</span></div>";
    document.getElementById("timer").innerHTML = timerText;
    document.getElementById("timer2").innerHTML = timerText;
}

// Управление музыкой
const audio = document.getElementById('weddingMusic');
const musicToggle = document.getElementById('musicToggle');

// По умолчанию музыка выключена
audio.pause();
musicToggle.textContent = '🔇';

function toggleMusic() {
    if (audio.paused) {
        audio.play().catch(error => {
            console.log('Автовоспроизведение заблокировано:', error);
        });
        musicToggle.textContent = '🔊';
    } else {
        audio.pause();
        musicToggle.textContent = '🔇';
    }
}

musicToggle.addEventListener('click', toggleMusic);

// Запуск таймера
updateCountdown();
setInterval(updateCountdown, 1000);
