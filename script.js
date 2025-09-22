// Таймер обратного отсчета
function updateCountdown() {
    const weddingDate = new Date('October 12, 2025 10:00:00').getTime();
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
    document.getElementById("timer").innerHTML = "<div class='countdown__item'><span class='countdown__number' style='font-size: 1.5rem;'>Мы поженились!</span></div>";
}

// Управление музыкой
const audio = document.getElementById('weddingMusic');
const musicToggle = document.getElementById('musicToggle');

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

// Обработка формы RSVP
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Здесь должна быть логика отправки формы на сервер
    // Для примера просто показываем сообщение об успехе
    document.getElementById('rsvpForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // В реальном приложении здесь должен быть код отправки данных на сервер
    // Например, с использованием fetch API
    /*
    const formData = new FormData(this);
    
    fetch('https://formsubmit.co/wedding_am@mail.ru', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('rsvpForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    });
    */
});

// Запуск
updateCountdown();
setInterval(updateCountdown, 1000);
