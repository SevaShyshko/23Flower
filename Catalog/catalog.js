function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('active');
}

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    // Элементы для открытия popup
    const cartIcon = document.getElementById("cart-icon");
    const userIcon = document.getElementById("user-icon");

    // Popup окна
    const cartPopup = document.getElementById("cart-popup");
    const userPopup = document.getElementById("user-popup");

    // Кнопки закрытия
    const closeButtons = document.querySelectorAll(".close-btn");

    // Функция для открытия popup
    function openPopup(popup) {
        popup.style.display = "flex";
    }

    // Функция для закрытия popup
    function closePopup(popup) {
        popup.style.display = "none";
    }

    // Открытие popup для корзины
    cartIcon.addEventListener("click", () => {
        openPopup(cartPopup);
    });

    // Открытие popup для пользователя
    userIcon.addEventListener("click", () => {
        openPopup(userPopup);
    });

    // Закрытие popup при клике на кнопку закрытия
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            closePopup(cartPopup);
            closePopup(userPopup);
        });
    });

    // Закрытие popup при клике вне окна
    window.addEventListener("click", (event) => {
        if (event.target === cartPopup) {
            closePopup(cartPopup);
        }
        if (event.target === userPopup) {
            closePopup(userPopup);
        }
    });
});