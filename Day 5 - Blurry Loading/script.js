const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

console.log(bg);
let load = 0;

let blurInterval = setInterval(() => {
  blurring();
}, 30);

function blurring() {
  load++;
  loadingText.textContent = load + '%'
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`;
  if (load > 99) {
    clearInterval(blurInterval);
  }
}

function scale(number, numberMin, numberMax, rangeMin, rangeMax) {
  return (number - numberMin) * (rangeMax - rangeMin) / (numberMax - numberMin) + rangeMin;
}