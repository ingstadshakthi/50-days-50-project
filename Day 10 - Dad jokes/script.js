const jokeEl = document.getElementById("joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateJoke);

// Using .then
// function generateJoke() {
//   fetch("https://icanhazdadjoke.com", { headers: { Accept: "application/json" } })
//     .then(res => res.json())
//     .then(res => jokeEl.innerHTML = res.joke);
// }

// using async await
async function generateJoke() {
  const res = await fetch("https://icanhazdadjoke.com", { headers: { Accept: "application/json" } });
  const data = await res.json()
  jokeEl.innerHTML = data.joke; z
}

generateJoke();