
let gradients = [
    "background: linear-gradient(to right, #67b26f, #4ca2cd);",
    "background: linear-gradient(to right, #be93c5, #7bc6cc);",
    "background: linear-gradient(to right, #ef32d9, #89fffd);",
    "background: linear-gradient(to right, #de6161, #2657eb);"
];

let hero = document.getElementById("hero");

function changeGradient() {
    let randomNumber = Math.floor(Math.random() * 100 % gradients.length);
    hero.style.cssText = gradients[randomNumber];
}

changeGradient();

window.setInterval(changeGradient, 6000);

