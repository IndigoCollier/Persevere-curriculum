const greetBtn = document.querySelector('#change-btn');
const greeting = document.querySelector('#greeting');
const body = document.querySelector('#body');

greetBtn.addEventListener('click', function() {
    if (greetBtn.textContent === 'Change Greeting') {
  greeting.textContent = 'Welcome to DOM manipulation!';
  greetBtn.style.backgroundColor = 'pink';
  greetBtn.textContent = 'Revert Back';
  body.style.backgroundColor = 'pink';
    } else 
     {
        greetBtn.textContent = 'Change Greeting';
        greeting.textContent = 'Im back!';
        body.style.backgroundColor = 'white';
       
    }
}) 

const userInput = document.querySelector('#user-input');
const output = document.querySelector('#output');

userInput.addEventListener('input', function(){
  if (userInput.value === '') {
    output.textContent = 'Please type something first.';
  } else {
  output.textContent = userInput.value; 
  }
});

let guest = 0;
const counter = document.querySelector('#count');
const countUp = document.querySelector('#count-up');
const removeGuest = document.querySelector('#remove-guest');
const counterMsg = document.querySelector('#counter-message');

countUp.addEventListener('click', function(){
  if (guest < 10) {
     guest++;
  counter.textContent = guest;
  } 
  if (guest === 10) {
    counterMsg.textContent = 'Maximum Capacity Reached!';
  }
})

removeGuest.addEventListener('click', function(){
  guest = Math.max(0, guest - 1);
  counter.textContent = guest;
  if (guest < 10) {
  counterMsg.textContent = '';
  }
});

const redBtn = document.querySelector('#red-btn');
const blueBtn = document.querySelector('#blue-btn');
const greenBtn = document.querySelector('#green-btn');
const resetBtn = document.querySelector('#reset-btn');
const colorLabel = document.querySelector('#color-label');
const colorBox = document.querySelector('#color-box');

redBtn.addEventListener('click', function() {
  colorLabel.textContent = 'Red button selected.';
  colorBox.style.backgroundColor = 'red';
});

blueBtn.addEventListener('click', function() {
  colorLabel.textContent = 'Blue button selected.';
  colorBox.style.backgroundColor = 'blue';
});

greenBtn.addEventListener('click', function() {
  colorLabel.textContent = 'Green button selected.';
  colorBox.style.backgroundColor = 'green';
});

resetBtn.addEventListener('click', function() {
  colorLabel.textContent = 'Pick a color.'
  colorBox.style.backgroundColor = 'lightgrey'
});

