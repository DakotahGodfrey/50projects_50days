const boxesContainer = document.getElementById('boxes');
const magicBtn = document.getElementById('btn-magic');
const newBtn = document.getElementById('btn-new');

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();

magicBtn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big');
});

newBtn.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(
    (box) =>
      (box.style.backgroundImage =
        "url('https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif')")
  );
});
