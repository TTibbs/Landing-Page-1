let button = document.querySelector('.btn');
let message = document.querySelector('.buttons p');

button.addEventListener('click', function() {
  let nameInput = document.querySelector('.form[type="text"]');
  let mobileInput = document.querySelector('.form[type="email"]');
  let locationInput = document.querySelector('.form[type="tel"]');

  if (nameInput.value === '' || mobileInput.value === '' || locationInput.value === '') {
    message.innerText = 'Please fill out all fields';
  } else {
    message.innerText = '';
    // Send form data here
  }
});