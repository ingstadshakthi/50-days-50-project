const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});


const createHeart = (e) => {
  times.innerHTML = Number(times.innerHTML) + 1;
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const cx = e.clientX
  const cy = e.clientY

  const { x, y } = loveMe.getBoundingClientRect()

  loveMe.appendChild(heart);
  heart.style.top = `${cy - y}px`
  heart.style.left = `${cx - x}px`
  setTimeout(() => {
    loveMe.innerHTML = "";
  }, 1000)
}