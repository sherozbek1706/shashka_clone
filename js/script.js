const one_bars = document.querySelector("#one_bars");
const two_bars = document.querySelector("#two_bars");
const one_mark = document.querySelector("#one_mark");
const two_mark = document.querySelector("#two_mark");
const site_bar = document.querySelector(".site-bar");
const chat_bar = document.querySelector(".chat-bar");

function motion(div, clas) {
  div.classList.toggle(clas);
}

one_bars.addEventListener("click", () => {
  motion(site_bar, "to_one");
  if(chat_bar.classList.contains("to_two")){
    motion(chat_bar, "to_two");
  }
});
one_mark.addEventListener("click", () => {
  motion(site_bar, "to_one");
});
two_bars.addEventListener("click", () => {
  motion(chat_bar, "to_two");
  if(site_bar.classList.contains("to_one")){
    motion(site_bar, "to_one");
  }
});
two_mark.addEventListener("click", () => {
  motion(chat_bar, "to_two");
});
