const textarea = document.getElementById('textarea');
const tagsEl = document.querySelector('.tags');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }

});

function createTags(input) {
  const tags = input.split(',').filter(el => el.trim() !== "").map(el => el.trim());

  tagsEl.innerHTML = ''
  tags.forEach(element => {
    const tag = document.createElement('span');
    tag.innerHTML = element;
    tag.classList.add('tag');
    tagsEl.appendChild(tag);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag)
    })
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}


function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}