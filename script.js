// script.js
document.addEventListener('DOMContentLoaded', function () {
    const loveText = document.getElementById('loveText');

    if (loveText) {
        // Animacja tekstu z użyciem mo.js
        const loveAnimation = new mojs.Html({
            el: '#loveText',
            opacity: { 0: 1 },
            scale: { 0.5: 1 },
            duration: 1000,
            easing: 'cubic.out',
            delay: 300
        });

        // Uruchom animację przy załadowaniu strony
        loveAnimation.play();
    } else {
        console.error("Element #loveText nie został znaleziony.");
    }
});
