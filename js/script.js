const promoContainer = document.querySelector(".promo-container");
const promoText = document.querySelector(".promo-text");

// Вычисляем ширину текста
const textWidth = promoText.offsetWidth;

// Устанавливаем стартовую позицию
promoContainer.style.transform = `translateX(0px)`; // Изменено значение на 0px

// Анимация бегущей строки
function animatePromo() {
  promoContainer.style.animation = `promo-animation ${
    (textWidth + 28) / 50
  }s linear infinite`; // Изменено значение на (textWidth + 28)
}

// Выполняем после загрузки страницы
window.addEventListener("load", animatePromo);
