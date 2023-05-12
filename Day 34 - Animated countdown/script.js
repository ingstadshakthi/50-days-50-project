const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');


runAnimation()

function runAnimation() {
  nums.forEach((numEl, idx) => {
    const nextToLast = nums.length - 1;

    numEl.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        numEl.classList.remove('in');
        numEl.classList.add('out');
      } else if (e.animationName === "goOut" && numEl.nextElementSibling) {
        numEl.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show')
      }
    })
  });
}

replay.addEventListener('click', () => {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')
  nums.forEach(num => {
    num.classList.value = ''
  });
  nums[0].classList.add('in')
});