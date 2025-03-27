document.addEventListener('DOMContentLoaded', function () {
    // Animacja dla tekstu po lewej stronie
    const loveTextLeft = document.getElementById('loveTextLeft');
    if (loveTextLeft) {
        const loveAnimationLeft = new mojs.Html({
            el: '#loveTextLeft',
            opacity: { 0: 1 },
            scale: { 0.5: 1 },
            duration: 1000,
            easing: 'cubic.out',
            delay: 300
        });

        loveAnimationLeft.play();
    }

    // Animacja dla tekstu po prawej stronie
    const loveTextRight = document.getElementById('loveTextRight');
    if (loveTextRight) {
        const loveAnimationRight = new mojs.Html({
            el: '#loveTextRight',
            opacity: { 0: 1 },
            scale: { 0.5: 1 },
            duration: 1500,
            easing: 'cubic.out',
            delay: 500
        });

        loveAnimationRight.play();
    }

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
