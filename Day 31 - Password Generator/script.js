const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipBoardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSpecial
}

clipBoardEl.addEventListener('click', async () => {
  await navigator.clipboard.writeText(result.innerText);
})

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSpecial = symbolsEl.checked;
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length)
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

  if (typesCount === 0) { return ''; }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]()
    })
  }
  return generatedPassword.slice(0, length);
}


function getRandomLower() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26))
}

function getRandomUpper() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26))
}
function getRandomSpecial() {
  return String.fromCharCode(33 + Math.floor(Math.random() * 10))
}
function getRandomNumber() {
  return String.fromCharCode(48 + Math.floor(Math.random() * 10))
}