const contentSlides = document.querySelectorAll('.content');
const tabs = document.querySelectorAll('nav ul li');

// console.log(tabs);

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    hideAllContents();
    hideAllActive();
    console.log(idx);
    tab.classList.add('active');
    contentSlides[idx].classList.add('show');
    console.log(contentSlides[idx]);
  });
});

function hideAllContents() {
  contentSlides.forEach((slide) => slide.classList.remove('show'));
}

function hideAllActive() {
  tabs.forEach((tab) => tab.classList.remove('active'));
}
