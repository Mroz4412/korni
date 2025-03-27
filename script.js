document.addEventListener('DOMContentLoaded', function () {
    // Funkcja do tworzenia serduszek
    function createHeart(side) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';

        // Ustawiamy serce po lewej lub prawej stronie
        const container = document.getElementById(side);
        
        // Dodajemy serduszko do odpowiedniego kontenera
        container.appendChild(heart);

        // Losowa pozycja animacji
        const animationDelay = Math.random() * 2;
        heart.style.animationDelay = `${animationDelay}s`;

        // Usuwamy serduszko po zakończeniu animacji
        setTimeout(() => {
            heart.remove();
        }, 3000); // Czas trwania animacji (3s)
    }

    // Tworzymy serduszka co 500 ms po lewej stronie
    setInterval(() => createHeart('heartsLeft'), 500);
    // Tworzymy serduszka co 500 ms po prawej stronie
    setInterval(() => createHeart('heartsRight'), 500);
});
