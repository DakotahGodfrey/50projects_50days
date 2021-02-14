// Taking advantage of event bubbling and event propagating

const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = '';

ratingsContainer.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('rating') ||
    e.target.parentNode.classList.contains('rating')
  ) {
    removeActive();
    e.target.classList.add('active');
    e.target.parentNode.classList.add('active');
    console.log(selectedRating);
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    
    <strong id="thanks">Thank You! </strong>
    <i class="fas fa-heart fa-3x"></i>
    <p class="message">We use your feedback to provide exceptional customer service</p>
    <button class='btn' id="Join" aria-label="Join Our Newsletter">Join Our Newsletter</button>
  `;
});
