const testimonialsContainer = document.querySelector('.tesimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonialsArray = [
  {
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in atque ratione nisi, expedita eos sit? Est dicta ipsa recusandae culpa delectus. Nobis aperiam aliquid iusto quo sit, quibusdam cupiditate?',
    photo: 'https://randomuser.me/api/portraits/men/20.jpg',
    name: 'Bill Billings',
    position: 'Entrepenuer',
  },
  {
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in atque ratione nisi, expedita eos sit? Est dicta ipsa recusandae!',
    photo: 'https://randomuser.me/api/portraits/women/20.jpg',
    name: 'Jill Doe',
    position: 'Copy-writer',
  },
  {
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in atque ratione nisi, expedita eos sit? Est dicta ipsa recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in atque ratione nisi, expedita eos sit? Est dicta',
    photo: 'https://randomuser.me/api/portraits/women/30.jpg',
    name: 'Grace A',
    position: 'Artist',
  },
  {
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in atque ratione nisi, expedita eos sit? Est dicta ipsa recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in atque ratione nisi, expedita eos sit? Est dicta',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
    name: 'Joe Doe',
    position: 'Data Science',
  },
];

let index = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonialsArray[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > testimonialsArray.length - 1) {
    index = 0;
  }
}

setInterval(updateTestimonial, 10000);
