
const toggles = document.querySelectorAll(".faq .faq-toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("click", function (e) {
    this.parentElement?.classList.toggle("active");
  })
});