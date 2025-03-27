// script.js
const loveText = document.getElementById('loveText');

// Animacja tekstu z użyciem mo.js
const loveAnimation = new mojs.Html({
    el: '#loveText',
    opacity: { 0: 1 },
    scale: { 0.5: 1 },
    duration: 1000,
    easing: 'cubic.out',
    delay: 300,
    onComplete: () => {
        // Po zakończeniu animacji, możemy zrobić coś dodatkowego, np. dodać kolejną animację
    }
});

// Uruchom animację przy załadowaniu strony
window.onload = () => {
    loveAnimation.play();
};
