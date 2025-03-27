// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Funkcja do tworzenia serduszek
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';

        // Ustawiamy losową pozycję początkową dla serduszka
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 2;

        heart.style.left = `${left}%`;
        heart.style.animationDelay = `${animationDelay}s`;

        // Dodajemy serduszko do body
        document.body.appendChild(heart);

        // Usuwamy serduszko po zakończeniu animacji
        setTimeout(() => {
            heart.remove();
        }, 3000); // Czas trwania animacji (3s)
    }

    // Tworzymy serduszka co 500 ms
    setInterval(createHeart, 500);
});
