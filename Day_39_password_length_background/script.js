const password = document.getElementById('password');
const bg = document.getElementById('background');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const passwordLength = input.length;
  let counter = 20 - passwordLength * 2;
  bg.style.filter = `blur(${counter}px)`;
});
