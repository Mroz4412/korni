const text = document.getElementById("loveText");

// Animacja napisu
const animation = new mojs.Timeline().add(
    new mojs.Html({
        el: text,
        duration: 1000,
        opacity: { 0: 1 },
        scale: { 0.5: 1 },
        easing: "sin.out",
    })
);
animation.play();
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Różna prędkość
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
