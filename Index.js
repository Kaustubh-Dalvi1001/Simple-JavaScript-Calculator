let input_display = document.querySelector("#display");
let clear_btn = document.querySelector("#btn-C");
let buttons = document.querySelectorAll(".button");
let equalTo = document.querySelector("#equalTo");

for (let button of buttons) {
  button.addEventListener("click", () => {
    input_display.value += button.innerHTML;
  });
}

clear_btn.addEventListener("click", () => {
  input_display.value = "";
});

equalTo.addEventListener("click", () => {
  if (/[\+\-\*\/]{2,}/.test(input_display.value)) {
    return (input_display.value = "Syntax Error");
  }
  input_display.value = eval(input_display.value);
});
