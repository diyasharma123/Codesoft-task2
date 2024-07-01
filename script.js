const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.onclick = () => {

    if (button.id == "clear") {
      display.innerText = "";
    } else if (button.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && button.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && button.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += button.id;
    }
  };
});



