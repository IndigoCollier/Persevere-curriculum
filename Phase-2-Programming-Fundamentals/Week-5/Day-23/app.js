// ============================================================
//  app.js — Mario's Pizzeria Interactive Webpage
//  Day 23: DOM Manipulation
//  Instructor Version: Indigo Collier
//  All 5 features complete with line-by-line comments
// ============================================================

// ── WHAT IS THE DOM? ─────────────────────────────────────────
// DOM = Document Object Model
// When a browser loads your HTML, it creates a JavaScript object
// representing every element on the page. That object is the DOM.
// document is your entry point to the entire DOM.
// Every querySelector and getElementById call reaches into that object
// to find a specific element so you can read or change it.

// ── WHY IS THE SCRIPT AT THE BOTTOM OF BODY? ─────────────────
// JavaScript runs top to bottom as soon as it is loaded.
// If this script were in the <head>, it would run before the HTML
// elements exist — querySelector would find nothing and return null.
// At the bottom of <body>, all elements are loaded first, THEN JS runs.
// That is why script placement matters.


// ===========================================
// FEATURE 1: BUTTON CHANGES TEXT
// ===========================================

// TODO 1: Select the button with id="reveal-special"
// document.querySelector() finds ONE element using a CSS selector.
// # means ID — same as CSS. querySelector('#reveal-special') finds
// the element where id="reveal-special" in the HTML.
const revealBtn = document.querySelector('#reveal-special');

// TODO 2: Select the paragraph with id="special-text"
// Same pattern — store the element in a variable so we can use it later.
// Now specialText points directly to that <p> tag in the HTML.
const specialText = document.querySelector('#special-text');

// TODO 3: Add a click event listener to the button
// addEventListener takes two arguments:
//   1. The event type as a string: 'click'
//   2. A function to run when that event fires
//
// ⚠️ CRITICAL — no parentheses on the function inside addEventListener:
//   RIGHT: addEventListener('click', function() { ... })
//   WRONG: addEventListener('click', myFunction())
//   The () version calls the function IMMEDIATELY instead of waiting for click.
//
// textContent sets the plain text content of an element.
// It replaces whatever text was there before.
revealBtn.addEventListener('click', function() {

  if (specialText.textContent === "Click the button to reveal today's special!") {
    specialText.textContent = "Today's Special: Large Pepperoni Pizza - Only $12.99!";
    revealBtn.textContent = 'Hide Special';
  } else {
    specialText.textContent = "Click the button to reveal today's special!";
    revealBtn.textContent = "Show Special";
  }
  // BONUS: Change the button text after revealing so user knows they can hide it
  
});


// ===========================================
// FEATURE 2: INPUT DISPLAYS TEXT (LIVE)
// ===========================================

// TODO 4: Select the input field with id="name-input"
// This is the <input> element where the user types their name.
const nameInput = document.querySelector('#name-input');

// TODO 5: Select the span with id="name-display"
// This is the <span> inside the paragraph where we display the typed name.
// It starts showing "___" until the user types something.
const nameDisplay = document.querySelector('#name-display');

// TODO 6: Add an 'input' event listener to the input field
// 'input' event fires EVERY TIME the value changes — on every keystroke.
// This is what makes the display update live as you type.
// (Compare to 'change' which only fires when you click away — not live)
//
// Inside the event listener, use .value to get whatever is currently
// in the input field. .value is a property specific to input elements.
nameInput.addEventListener('input', function() {
  nameDisplay.textContent = nameInput.value;
  // As the user types "John", this runs on every keystroke:
  // keystroke 1: nameDisplay shows "J"
  // keystroke 2: nameDisplay shows "Jo"
  // keystroke 3: nameDisplay shows "Joh"
  // keystroke 4: nameDisplay shows "John"
});


// ===========================================
// FEATURE 3: COLOR PICKER BUTTONS
// ===========================================

// TODO 7: Select ALL buttons with class="theme-btn"
// querySelectorAll() returns a NodeList — like an array of all matching elements.
// This is how you select multiple elements at once.
// . means class — same as CSS.
const themeButtons = document.querySelectorAll('.theme-btn');

// TODO 8: Select the preview div with id="theme-preview"
// This is the colored box that changes when you click a color button.
const themePreview = document.querySelector('#theme-preview');

// TODO 9: Loop through all theme buttons and add click listeners
// querySelectorAll returns a NodeList, not a regular array.
// forEach works on NodeLists just like arrays — runs the function once per element.
// Each time through, `button` is the current theme button being processed.
themeButtons.forEach(function(button) {
  button.addEventListener('click', function() {

    // getAttribute() reads the value of any HTML attribute on an element.
    // In the HTML: <button data-color="#ff6b6b">
    // button.getAttribute('data-color') returns "#ff6b6b"
    //
    // data-* attributes are custom attributes you can add to any HTML element
    // to store extra information. They do not affect appearance — just hold data.
    const color = button.getAttribute('data-color');

    // style.backgroundColor sets the inline CSS backgroundColor property.
    // CSS property names with dashes become camelCase in JavaScript:
    // background-color → backgroundColor
    // font-size → fontSize
    // border-radius → borderRadius
    themePreview.style.backgroundColor = color;
  });
});


// ===========================================
// FEATURE 4: SHOW/HIDE TOGGLE
// ===========================================

// TODO 10: Select the toggle button with id="toggle-info"
const toggleBtn = document.querySelector('#toggle-info');

// TODO 11: Select the content div with id="info-content"
// In the HTML this div starts with style="display: none;" — it is hidden.
// We read and change that display value to show and hide it.
const infoContent = document.querySelector('#info-content');

// TODO 12: Add click listener to toggle button
// We check the current display value and flip it each click.
// style.display reads or sets the inline display CSS property on the element.
toggleBtn.addEventListener('click', function() {

  // Check the current display value of the content div
  if (infoContent.style.display === 'none') {
    // Currently hidden — show it
    infoContent.style.display = 'block';
    // BONUS: Update button text so user knows they can hide it
    toggleBtn.textContent = 'Hide Hours';
  } else {
    // Currently showing — hide it
    infoContent.style.display = 'none';
    // BONUS: Update button text back
    toggleBtn.textContent = 'Show Hours';
  }

  // ALTERNATIVE APPROACH using classList.toggle (cleaner but requires CSS):
  // infoContent.classList.toggle('hidden');
  // This adds the class 'hidden' if absent, removes it if present.
  // You would define .hidden { display: none; } in your CSS.
  // Both approaches work — the if/else version is more beginner-readable.
});


// ===========================================
// FEATURE 5: COUNTER WITH +/- BUTTONS
// ===========================================

// TODO 13: Create a variable to track the guest count (start at 2)
// This variable lives OUTSIDE the event listeners so both + and - can access it.
// If it were inside a listener it would reset to 2 every click.
// This is the accumulator pattern from Day 22 — same concept, different context.
let guestCount = 2;

// TODO 14: Select the increase button with id="increase"
const increaseBtn = document.querySelector('#increase');

// TODO 15: Select the decrease button with id="decrease"
const decreaseBtn = document.querySelector('#decrease');

// TODO 16: Select the display span with id="guest-count"
// This is where the current number is displayed on the page.
// It starts showing "2" from the HTML.
const guestDisplay = document.querySelector('#guest-count');

// TODO 17: Add click listener to increase button
increaseBtn.addEventListener('click', function() {
  guestCount++;                                    // add 1 to the counter variable
  guestDisplay.textContent = guestCount;           // update the display with new value
  // textContent can set numbers — JavaScript converts them to strings automatically
});

// TODO 18: Add click listener to decrease button
// The rubric says do not go below 1 — you need at least 1 guest.
// Math.max(1, guestCount - 1) returns whichever is larger: 1 or (guestCount - 1)
// This prevents the count from going below 1.
decreaseBtn.addEventListener('click', function() {
  guestCount = Math.max(1, guestCount - 1);        // never goes below 1
  guestDisplay.textContent = guestCount;            // update the display
});


// ===========================================
// TESTING CHECKLIST
// ===========================================
// Open index.html in Live Server (not just open file — use Live Server)
// Press F12 to open DevTools — watch console for any red errors
// Test each feature:
// [✅] Feature 1: Click "Show Special" — text changes to pizza special
// [✅] Feature 2: Type in name field — display updates live on every keystroke
// [✅] Feature 3: Click Red/Teal/Blue buttons — preview box color changes
// [✅] Feature 4: Click "Show Hours" — hours appear. Click "Hide Hours" — hours disappear
// [✅] Feature 5: Click + to go up, click - to go down, stops at 1

// GIT COMMIT WHEN DONE:
// git add .
// git commit -m "Day 23: DOM manipulation - all 5 interactive features complete"
// git push