document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById("prelouder");
    if (!preloader.classList.contains("done")) {
      prelouder.classList.add("done");
    }
  }, 1000);
};

const TOKEN = "6677281101:AAHzXCaxCUAHvkIkhprS56LjYoZ9bP-l4gA";
const CHAT_ID = "-1002078322968";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// document.getElementById("form_tg").addEventListener("submit", function (e) {
//   e.preventDefault();

//   let message = `<b> Вы получили пожертвования крипто валютой на сумму ${this.name.value} <b>\n`;
//   message += `<b> Отправитель: ${this.token.value}<b>\n`;
//   message += `<b> Пожелания отпрвителя: ${this.text.value}<b> `;
//   axios.post(URL_API, {
//     chat_id: CHAT_ID,
//     parse_mode: html,
//     text: message,
//   });
// });

document.getElementById("form_tg").addEventListener("submit", function (event) {
  event.preventDefault();

  let message = `<b> Вы получили пожертвования крипто валютой на сумму ${event.target.name.value} <b>\n`;
  message += `<b> Отправитель: ${event.target.token.value}<b>\n`;
  message += `<b> Пожелания отпрвителя: ${event.target.text.value}<b> `;

  message = message.replace(/<[^>]+>/g, "");
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    // parse_mode: html,
    text: message,
  });
});

let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;
    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  };
});

// 538ur893ut9j:2342

const headerBtn = document.querySelector(".burger_btns");
const wraperBtn = document.querySelector(".btn_block");
const Menu = document.querySelector(".burger_menu");
let menuOpen = false;

headerBtn.addEventListener("click", () => {
  if (!menuOpen) {
    Menu.classList.add("active");
    menuOpen = true;
  } else {
    Menu.classList.remove("active");
    menuOpen = false;
  }
});

wraperBtn.addEventListener("click", () => {
  if (!menuOpen) {
    Menu.classList.add("active");
    menuOpen = true;
  } else {
    Menu.classList.remove("active");
    menuOpen = false;
  }
});
