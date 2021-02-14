const result = document.getElementById('results');
const search = document.getElementById('search');
const listItems = [];
const API_URl = 'https://randomuser.me/api/';
const queryNumParam = '?results=50';

getUserData();
async function getUserData() {
  const response = await fetch(`${API_URl}${queryNumParam}`);
  // console.log(response);
  const { results } = await response.json();

  result.innerHTML = '';

  results.forEach((user) => {
    const li = document.createElement('li');
    listItems.push(li);
    li.innerHTML = `
      <img src='${user.picture.large}' alt="${user.name.first} ${user.name.last}">
      <article class="info">
        <h2>${user.name.first} ${user.name.last}</h2> 
        <p>${user.location.city}, ${user.location.country}</p>
        <div class="circle"></div>
      </article>
    `;
    result.appendChild(li);
  });
}
function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

search.addEventListener('input', (e) => filterData(e.target.value));
