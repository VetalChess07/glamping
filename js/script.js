let headerLi = document.querySelector(".header__list-js");
let headerCheck = document.querySelector(".header__link-js");
let headerLinkPopUp = document.querySelector(".header__link-popup-js");
let burgerBtn = document.querySelector(".burger__btn");
let burgerLineFirst = document.querySelector(".burger__line-first");
let burgerLineCenter = document.querySelector(".burger__line-center");
let burgerLineLast = document.querySelector(".burger__line-last");
let burgerContent = document.querySelector(".burger__content");
let body = document.body;

let burgerContentClose = document.querySelector(".burger__content--close");

// headerLi.addEventListener("click", (e) => {
//   headerLi.classList.toggle("active");
//   headerCheck.classList.toggle("active");
//   headerLinkPopUp.classList.toggle("active");
// });
burgerBtn.addEventListener("click", (e) => {
  burgerLineFirst.classList.toggle("open");
  burgerLineCenter.classList.toggle("open");
  burgerLineLast.classList.toggle("open");
  burgerContent.classList.toggle("open");
  burgerContentClose.classList.toggle("open");
  body.classList.toggle("noscroll");
});
burgerContentClose.addEventListener("click", (e) => {
  burgerLineFirst.classList.toggle("open");
  burgerLineCenter.classList.toggle("open");
  burgerLineLast.classList.toggle("open");
  burgerContent.classList.toggle("open");
  burgerContentClose.classList.toggle("open");
  body.classList.toggle("noscroll");
});
// let tabsBtn = document.querySelectorAll("chat__tab")

const buttons = [...document.querySelectorAll(".chat__btn")];
const chat__svg = [...document.querySelectorAll(".icon__chat-svg")];
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".chat__btn.active").classList.remove("active");

    button.classList.add("active");
  });
});
chat__svg.forEach((svg) => {
  svg.addEventListener("click", () => {
    document.querySelector(".chat__btn.active").classList.remove("active");

    svg.classList.add("active");
  });
});

let liveChatBtn = document.getElementById("chat__btn--live-chat");
let attendeesChatBtn = document.getElementById("chat__btn--attendees");
console.log(liveChatBtn);
console.log(attendeesChatBtn);

let chatAttendees = document.querySelector(".attendees");
console.log(chatAttendees);

let chat = document.querySelector(".chat__messenger");
console.log(chat);
let newUserChat = document.querySelector(".chat__messenger--item--user");
let userChat = [...document.querySelectorAll(".chat__messenger--item")];
console.log(userChat);
// let userChat = document.querySelectorAll('.chat__messenger--item');

// btnOff.addEventListener('click', (e) => {
//    disableScroll();
//    e.currentTarget.style.pointerEvents = 'none';
//    btnOn.style.pointerEvents = 'auto';
// });

// btnOn.addEventListener('click', (e) => {
//    enableScroll();
//    e.currentTarget.style.pointerEvents = 'none';
//    btnOff.style.pointerEvents = 'auto';
// });

let popupBg = document.querySelector(".popup__attendees-bg"); // Фон попап окна
let popup = document.querySelector(".popup__attendees"); // Само окно
let openPopupButtons = document.querySelectorAll(".attendees__item"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".close-popup");

console.log(body);

openPopupButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add("active"); // Добавляем класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
    body.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фот, то:
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
    body.classList.remove("active");
  }
});

const cards = document.querySelectorAll(".attendees__item");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    let targetEl = e.target;
    let targetCardText = card.querySelector(".attendees__item--text");
    let targetCardImage = card.querySelector(".avatar__user");
    document.querySelector(".popup__text-username").textContent =
      targetCardText.textContent;
    document.querySelector(".popup__image").src = targetCardImage.src;
  });
});
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     840: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     },
//   },
// });

// let swiperRunning = new Swiper(".swiper__running", {
//   loop: true,
//   slidesPerView: "auto",
//   spaceBetween: 40,
//   autoplay: {
//     delay: 2500,
//   },
// });
// let swiperRunningDoun = new Swiper(".swiper__running--doun", {
//   loop: true,
//   slidesPerView: "auto",
//   spaceBetween: 40,
//   autoplay: {
//     delay: 2000,
//   },
// });

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

document.querySelector(".tabs__nav-btn").click();

let airpaleSvg = document.querySelector(".airplane__svg--path");
const inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (Array.from(inputs).every((v) => v.value) == true) {
      document.querySelector(".form__button").classList.add("_active");
      airpaleSvg.classList.add("active");
    } else {
      airpaleSvg.classList.add("active");
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper__gallery", {
  navigation: {
    nextEl: ".swiper-button-next__gallery",
    prevEl: ".swiper-button-prev__gallery",
  },
});
