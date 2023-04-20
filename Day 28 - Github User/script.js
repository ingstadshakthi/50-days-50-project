const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
  try {
    const { data, status } = await axios.get(APIURL + username);
    createUserCard(data);
    getRepos(username)
  } catch (err) {
    console.log(err);
    if (err.response.status === 403) {
      main.innerHTML = `<div class="card"><h2>Limit Over</h2></div>`
    } else if (err.response.status === 404) {
      main.innerHTML = `<div class="card"><h2>No User with given Name</h2></div>`
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    main.innerHTML = `<div class="card"><h2>Problem Fetching repos</h2></div>`
  }
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')
  repos.slice(0, 5).forEach(repo => {
    const repoLink = document.createElement('a');
    repoLink.classList.add('repo');
    repo.href = repo.html_url;
    reposEl.target = '_blank'
    repoLink.innerHTML = repo.name;
    reposEl.appendChild(repoLink)
  })
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
  <div>
    <img src="${user.avatar_url}" alt="" class="avatar">
  </div>
  <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following} <strong>Following</strong></li>
      <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos">
    </div>
  </div>
</div>`
  main.innerHTML = cardHTML;
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user)
    search.value = ''
  }
});