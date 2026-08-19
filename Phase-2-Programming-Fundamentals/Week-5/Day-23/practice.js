const greetBtn = document.querySelector('#change-btn');
const greeting = document.querySelector('#greeting');
const body = document.querySelector('#body');

greetBtn.addEventListener('click', function() {
    if (greetBtn.textContent === 'Change Greeting') {
  greeting.textContent = 'Welcome to DOM manipulation!';
  greetBtn.style.backgroundColor = 'pink';
  greetBtn.textContent = 'Revert Back';
  body.style.backgroundColor = 'pink';
    } else //(greetBtn.textContent = 'Revert Back' )
     {
        greetBtn.textContent = 'Change Greeting';
        greeting.textContent = 'Im back!';
        body.style.backgroundColor = 'green';
       
    }
})