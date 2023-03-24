const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const MAX_PAGE = 4
let activeIndex = 1;
progress.style.width = "0px";

next.addEventListener('click', () => {
  activeIndex = activeIndex + 1
  if (activeIndex === MAX_PAGE) {
    next.setAttribute('disabled', 'true');
  }
  prev.removeAttribute('disabled');
  updateBar(activeIndex);
});


prev.addEventListener('click', () => {
  activeIndex = activeIndex - 1
  if (activeIndex === 1) {
    prev.setAttribute('disabled', 'true');
  }
  next.removeAttribute('disabled');
  updateBar(activeIndex);
});

function updateBar(index) {
  circles.forEach((circle, i) => {
    if (i < index) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  progress.style.width = (index - 1) * (100 / (MAX_PAGE - 1)) + '%';
}