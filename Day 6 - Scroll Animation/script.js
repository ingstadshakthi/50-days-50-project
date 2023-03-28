const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

// called to load  initial boxes
checkBoxes();

function checkBoxes() {
  const bottomDimension = window.innerHeight / 5 * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < bottomDimension) {
      box.classList.add('show')
    } else {
      box.classList.remove('show');
    }
  });
}