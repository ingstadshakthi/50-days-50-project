const ripple = document.querySelectorAll('.ripple');

ripple.forEach(button => {
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const spanEl = document.createElement('span');
    spanEl.classList.add('circle');
    spanEl.style.top = yInside + 'px';
    spanEl.style.left = xInside + 'px';

    this.appendChild(spanEl)
    setTimeout(() => {
      spanEl.remove();
    }, 500);
  });
})