const panels = document.querySelectorAll('.panel');

Array.from(panels).forEach((panel, i) => {
  panel.addEventListener('click', () => {
    selectActive(i);
  });
});

function selectActive(index) {
  panels.forEach((panel, i) => {
    index === i ? panel.classList.add('active') : panel.classList.remove('active')
  });
}