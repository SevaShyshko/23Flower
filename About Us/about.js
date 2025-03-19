function toggleMenu() {
    const burgerMenu = document.getElementById('burgerMenu');
    burgerMenu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const spoilers = document.querySelectorAll(".spoiler");

    spoilers.forEach(spoiler => {
        const question = spoiler.querySelector(".spoiler-question");
        const answer = spoiler.querySelector(".spoiler-answer");

        question.addEventListener("click", () => {
            answer.classList.toggle("open");
        });
    });
})