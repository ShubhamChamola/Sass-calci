let element = document.documentElement;
let themes = document.querySelectorAll(".themes");
let circle = document.querySelector(".circle");
let btns = document.querySelectorAll(".btn");
let screen = document.querySelector(".expression");
let expression = "";

//For themes
let properties = [
  "--body-bg",
  "--text-color",
  "--toggle-keypad-bg",
  "--circle",
  "--screen",
  "--keypad",
  "--key-border",
  "--del-bg",
  "--del-border",
  "--equal-bg",
  "--equal-border",
  "--keypad-bg",
  "--equal-color",
];

let value1 = [
  "hsl(222, 26%, 31%)",
  "white",
  "hsl(223, 31%, 20%)",
  "hsl(6, 63%, 50%)",
  "hsl(224, 36%, 15%)",
  "hsl(221, 14%, 31%)",
  "hsl(28, 16%, 65%)",
  "hsl(225, 21%, 49%)",
  " hsl(224, 28%, 35%)",
  "hsl(6, 63%, 50%)",
  "hsl(6, 70%, 34%)",
  "white",
  "white",
];

let value2 = [
  "hsl(0, 0%, 90%)",
  "hsl(60, 10%, 19%)",
  "hsl(0, 5%, 81%)",
  "hsl(25, 98%, 40%)",
  "hsl(0, 0%, 93%)",
  "hsl(60, 10%, 19%)",
  "hsl(35, 11%, 61%)",
  "hsl(185, 42%, 37%)",
  " hsl(185, 58%, 25%)",
  "hsl(25, 98%, 40%)",
  "hsl(25, 99%, 27%)",
  "hsl(45, 7%, 89%)",
  "white",
];

let value3 = [
  "hsl(268, 75%, 9%)",
  "hsl(52, 100%, 62%)",
  "hsl(268, 71%, 12%)",
  "hsl(176, 100%, 44%)",
  "hsl(268, 71%, 12%)",
  "hsl(52, 100%, 62%)",
  "hsl(285, 91%, 52%)",
  "hsl(281, 89%, 26%)",
  " hsl(285, 91%, 52%)",
  "hsl(176, 100%, 44%)",
  "hsl(177, 92%, 70%)",
  "hsl(268, 47%, 21%)",
  "hsl(198, 20%, 13%)",
];

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    if (theme.classList.contains("theme1")) {
      circle.style.setProperty("left", "0px");
      theme1();
    } else if (theme.classList.contains("theme2")) {
      circle.style.setProperty("left", "15px");
      theme2();
    } else if (theme.classList.contains("theme3")) {
      circle.style.setProperty("left", "30px");
      theme3();
    }
  });
});

const theme1 = () => {
  for (i = 0; i <= 13; i++) {
    element.style.setProperty(`${properties[i]}`, `${value1[i]}`);
  }
};

const theme2 = () => {
  for (i = 0; i <= 13; i++) {
    element.style.setProperty(`${properties[i]}`, `${value2[i]}`);
  }
};

const theme3 = () => {
  for (i = 0; i <= 13; i++) {
    element.style.setProperty(`${properties[i]}`, `${value3[i]}`);
  }
};

//for btn animation
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc(btn);
    btn.classList.add("animate");
    setTimeout(() => {
      btn.classList.remove("animate");
    }, 100);
  });
});

//for calculation
const calc = (btn) => {
  let val = btn.value;
  if ((val != "=") & (val != "reset")) {
    if (val == "del") {
      expression = expression.slice(0, -1);
    } else {
      expression += val;
    }
  } else if ((val == "=") & (expression != "")) {
    expression = eval(expression);
  } else if (val == "reset") {
    expression = "0";
  }
  screen.textContent = expression;
};
