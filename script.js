// Таймер обратного отсчета
function updateCountdown() {
    const weddingDate = new Date('October 12, 2025 10:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearCountdown();
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
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

// Обработка формы
const form = document.getElementById('rsvpForm');
const formSuccessMessage = document.getElementById('formSuccessMessage');
const formRegretMessage = document.getElementById('formRegretMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем стандартную отправку формы

    const formData = new FormData(form);
    const attendance = formData.get('attendance');
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const email = 'wedding_am@mail.ru'; // Замените на свою почту

    fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            form.style.display = 'none';
            if (attendance === 'Приду') {
                formSuccessMessage.style.display = 'block';
            } else if (attendance === 'Не смогу') {
                formRegretMessage.style.display = 'block';
            }
        } else {
            alert('Что-то пошло не так. Пожалуйста, попробуйте еще раз.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Что-то пошло не так. Пожалуйста, проверьте подключение и попробуйте еще раз.');
    });
});

// Запуск
updateCountdown();
setInterval(updateCountdown, 1000);
