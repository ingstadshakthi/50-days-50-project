const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = "I Love Programming";

let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerHTML = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(() => {
    writeText()
  }, speed);
}
writeText();


speedEl.addEventListener('change', () => {
  speed = 300 / parseInt(speedEl.value)
});