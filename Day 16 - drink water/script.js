const glassContainer = document.querySelector('.glass-container');
const goal = document.querySelector('.target');
const remaining = document.querySelector('.remaining');
const target = +goal.getAttribute('data-target');

remaining.innerHTML = `${target}L <br /> Remaining`
remaining.style.height = "100%";

for (let i = 0; i < target / 0.25; i++) {
  const glass = document.createElement('div');
  glass.classList.add('glass');
  glass.innerHTML = `250 <br /> ml`;
  glass.addEventListener('click', () => {
    updateGlass(i);
  });
  glassContainer.appendChild(glass);
}

const updateGlass = function (index) {
  const glasses = document.querySelectorAll('.glass');
  glasses.forEach((glass) => glass.classList.remove('highlight'));

  for (let i = 0; i <= index; i++) {
    glasses[i].classList.add('highlight');
  }
  const remainingWater = target - (index + 1) * 0.25
  remaining.innerHTML = `${remainingWater}L <br /> Remaining`;
  remaining.style.height = (remainingWater / target) * 100 + '%'
  const drank = document.querySelector('.drank');
  drank.style.height = (1 - (remainingWater / target)) * 100 + '%'
  drank.innerHTML = (1 - (remainingWater / target)) * 100 + '%';

  if ((1 - (remainingWater / target)) * 100 + '%' === '100%') {
    remaining.innerHTML = ''
  }
  if (remainingWater / target >= 0.875) {
    remaining.style.borderBottomLeftRadius = '2.5%'
    remaining.style.borderBottomRightRadius = '2.5%'
  } else {
    remaining.style.borderBottomLeftRadius = '0%'
    remaining.style.borderBottomRightRadius = '0%'
  }
}