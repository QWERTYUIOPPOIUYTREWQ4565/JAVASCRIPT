let input = document.querySelector("input");

function debounce(fnc, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fnc(...args); // yeh woh function hai jo aapne diya hai
    }, delay);
  };
}
input.addEventListener(
  "input",
  debounce(function () {
    console.log("ran");
  }, 1000),
);
