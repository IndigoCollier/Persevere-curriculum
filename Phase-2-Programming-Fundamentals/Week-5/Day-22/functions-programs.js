// ============================================================
//  functions-programs.js — DAY 22 PROJECT
//  Instructor Version: Indigo Collier
//  5 Function-Based Programs — functions, conditionals, loops
// ============================================================

// ── THE BIG SHIFT FROM DAY 21 ────────────────────────────────
// Day 21: variables and console.log at the top level
// Day 22: wrapping logic in FUNCTIONS — reusable blocks of code
//
// WHY FUNCTIONS MATTER:
// Without functions: write the same tip calculation 50 times for 50 tables
// With functions: write it ONCE, call it 50 times
// Functions are the most important concept in all of programming.


// ============================================================
//  PROGRAM 1: Tip Calculator Functions
//  Demonstrates: function declaration, parameters, return values
// ============================================================

// FUNCTION SYNTAX:
// function functionName(parameter1, parameter2) {
//   // code that runs when function is called
//   return value; // sends a value BACK to whoever called the function
// }
//
// parameter = a variable that receives input when the function is called. like a coin slot.
// argument  = the actual value you pass in when calling the function. The coin itself.
// return    = sends a value back out of the function. The treat coming out the vending machine.

// Function 1: calculate just the tip amount
function calculateTip(billAmount, tipPercent) {
  // billAmount and tipPercent are parameters
  // They only exist inside this function — not accessible outside
  return billAmount * (tipPercent / 100);
  // return sends the calculated value back to whoever called this function
  // Without return, the function does the math and throws it away
}

// Function 2: calculate the total bill including tip
function calculateTotalBill(billAmount, tipPercent) {
  // Call calculateTip from inside another function
  // Functions can call other functions — this is reuse in action
  const tip = calculateTip(billAmount, tipPercent);
  return billAmount + tip;
  // Notice: we do NOT console.log inside the function
  // The function just CALCULATES and RETURNS — it does not print
  // Printing happens outside when we use the returned value
}

// Function 3: split the bill evenly among a group
function splitBill(billAmount, tipPercent, numberOfPeople) {
  const total = calculateTotalBill(billAmount, tipPercent);
  // Math.ceil rounds UP to the nearest cent
  // Better to round up than leave someone short
  return Math.ceil((total / numberOfPeople) * 100) / 100;
}

// CALLING the functions and logging results
// This is where console.log belongs — outside the functions
console.log("=== Tip Calculator ===");
console.log("Tip (20%): $" + calculateTip(80, 20).toFixed(2));         // $16.00
console.log("Total Bill: $" + calculateTotalBill(80, 20).toFixed(2));   // $96.00
console.log("Per Person: $" + splitBill(80, 20, 4).toFixed(2));         // $24.00

// THE MOST COMMON DAY 22 MISTAKE — confusing console.log with return:
// WRONG: function calculateTip(bill, pct) { console.log(bill * pct / 100); }
// This prints but returns undefined — you cannot use the result in math
// RIGHT: function calculateTip(bill, pct) { return bill * pct / 100; }
// This sends the value back so you can add it, store it, or log it


// ============================================================
//  PROGRAM 2: Grade Calculator with Conditionals
//  Demonstrates: if / else if / else, comparison operators
// ============================================================

// CONDITIONALS — making decisions in code
// if (condition) — runs the block if condition is TRUE
// else if (condition) — checked only if the above was FALSE
// else — runs if EVERYTHING above was FALSE
//
// COMPARISON OPERATORS:
// ===  exactly equal (value AND type)
// !==  not equal
// >    greater than
// <    less than
// >=   greater than or equal to
// <=   less than or equal to
//
// ALWAYS use === not == in JavaScript
// == does type coercion (42 == "42" is true which is almost never what you want)
// === is strict (42 === "42" is false, which is correct)

function getLetterGrade(score) {
  // CONDITIONS ARE CHECKED TOP TO BOTTOM
  // The FIRST true condition runs — the rest are skipped
  // Order matters: check highest threshold first
  if (score >= 90) {
    return "A";         // 90-100
  } else if (score >= 80) {
    return "B";         // 80-89 (we already know it is not 90+ from above)
  } else if (score >= 70) {
    return "C";         // 70-79
  } else if (score >= 60) {
    return "D";         // 60-69
  } else {
    return "F";         // anything below 60
  }
}

function getGradeMessage(score) {
  const letter = getLetterGrade(score);
  // Template literal to combine the score, letter, and message cleanly
  return `Score: ${score} → Grade: ${letter}`;
}

console.log("\n=== Grade Calculator ===");
console.log(getGradeMessage(95));   // Score: 95 → Grade: A
console.log(getGradeMessage(83));   // Score: 83 → Grade: B
console.log(getGradeMessage(74));   // Score: 74 → Grade: C
console.log(getGradeMessage(61));   // Score: 61 → Grade: D
console.log(getGradeMessage(45));   // Score: 45 → Grade: F


// ============================================================
//  PROGRAM 3: FizzBuzz
//  Demonstrates: for loop, modulo operator, nested conditionals
//  Classic programming challenge — every developer has written this
// ============================================================

// THE MODULO OPERATOR: %
// Returns the REMAINDER after division
// 10 % 3 = 1  (10 ÷ 3 = 3 remainder 1)
// 15 % 3 = 0  (15 ÷ 3 = 5 remainder 0 — perfectly divisible)
// 15 % 5 = 0  (15 ÷ 5 = 3 remainder 0 — perfectly divisible)
// Use % to check if a number is evenly divisible by another

// FOR LOOP SYNTAX:
// for (initializer; condition; increment) { body }
// initializer: let i = 1  — creates the counter variable
// condition: i <= 100     — loop runs WHILE this is true
// increment: i++          — runs after each loop, adds 1 to i

// FIZZBUZZ RULES:
// Numbers 1-100
// Divisible by BOTH 3 and 5 → "FizzBuzz"
// Divisible by 3 only → "Fizz"
// Divisible by 5 only → "Buzz"
// Everything else → the number itself

// ⚠️ THE ORDER OF CONDITIONS IS CRITICAL ⚠️
// Check divisible by BOTH (15, 30, 45...) FIRST
// If you check % 3 first, 15 prints "Fizz" — WRONG
// Always check the most specific condition first

function fizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    // Check BOTH first — most specific condition
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");    // 15, 30, 45, 60, 75, 90
    } else if (i % 3 === 0) {
      console.log("Fizz");        // 3, 6, 9, 12, 18...
    } else if (i % 5 === 0) {
      console.log("Buzz");        // 5, 10, 20, 25...
    } else {
      console.log(i);             // everything else
    }
    // After each iteration: i++ runs, then condition i <= limit is checked again
    // When i reaches 101, condition is false and the loop stops
  }
}

console.log("\n=== FizzBuzz (1-20) ===");
fizzBuzz(20);   // Run for first 20 to keep output manageable in class
// Expected: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz


// ============================================================
//  PROGRAM 4: While Loop — Inventory Countdown
//  Demonstrates: while loop, mutation with -=, real-world use case
// ============================================================

// WHILE LOOP — use when you do not know in advance how many times to loop
// Loop continues WHILE the condition is true
// DANGER: if the condition never becomes false, the loop runs forever (infinite loop)
// Always make sure something inside changes the condition toward false

function runInventoryCountdown(itemName, startingCount, saleAmount) {
  let inventory = startingCount;   // let because this value will CHANGE
  let day = 1;

  console.log(`\n=== ${itemName} Inventory Countdown ===`);
  console.log(`Starting inventory: ${inventory}`);

  // Loop continues while there is still inventory
  while (inventory > 0) {
    // Subtract from inventory each day
    inventory -= saleAmount;    // same as: inventory = inventory - saleAmount

    // Math.max prevents inventory from going below 0
    // (if 5 remain and you sell 10, it shows 0 not -5)
    inventory = Math.max(0, inventory);

    console.log(`Day ${day}: ${inventory} units remaining`);
    day++;   // increment the day counter — prevents infinite loop
  }
  console.log(`${itemName} sold out on day ${day - 1}`);
}

runInventoryCountdown("Wireless Earbuds", 50, 12);


// ============================================================
//  PROGRAM 5: Combined — Full Order Summary
//  Demonstrates: functions calling functions, all concepts together
// ============================================================

// This program shows how everything connects —
// functions calling functions, conditionals inside functions,
// and the result assembled with template literals

function getLoyaltyDiscount(totalSpent) {
  // Return a discount percentage based on spend history
  if (totalSpent >= 500) {
    return 0.15;    // 15% off for high spenders
  } else if (totalSpent >= 200) {
    return 0.10;    // 10% off for mid-tier
  } else if (totalSpent >= 100) {
    return 0.05;    // 5% off for new customers with history
  } else {
    return 0;       // no discount
  }
}

function calculateFinalPrice(basePrice, taxRate, customerSpendHistory) {
  const discount = getLoyaltyDiscount(customerSpendHistory);
  const discountedPrice = basePrice * (1 - discount);    // apply discount
  const tax = discountedPrice * taxRate;                  // calculate tax on discounted price
  return discountedPrice + tax;
}

function generateOrderSummary(customerName, item, price, spendHistory) {
  const TAX = 0.095;
  const finalPrice = calculateFinalPrice(price, TAX, spendHistory);
  const discount = getLoyaltyDiscount(spendHistory);

  return `
=== Order Summary ===
Customer: ${customerName}
Item: ${item}
Original Price: $${price.toFixed(2)}
Loyalty Discount: ${(discount * 100)}%
Tax (9.5%): included
Final Price: $${finalPrice.toFixed(2)}
Thank you for your business!`;
}

console.log(generateOrderSummary("Indigo Collier", "Wireless Headphones", 89.99, 350));
// Customer has spent $350 → 10% loyalty discount applied


//Practice #1
const scores = [72, 95, 61, 88, 45, 79];

function checkScores(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] >= 80) {
      console.log("Pass: " + num[i]);
    } else {
      console.log("Needs Review: " + num[i]);
    }
  }
}

 checkScores(scores);

 // Practice #2

const temperatures = [68, 74, 91, 55, 82, 63];

function countHotDays (temp) {

let count = 0;
for (let i = 0; i < temp.length; i++) {

if ( temp[i] >= 80) { 

  count++;
  
  }

  }
   return count++;
}

console.log(countHotDays(temperatures));

// Practice #3
const names = ["Shani", "Travis", "Rashon", "Indigo", "Sam", "Taylor"];


function findLongNames(name) {

for (let i = 0; i < name.length; i++) {

  if (name[i].length > 5) {
    console.log(name[i]);
  }
}

}

findLongNames(names);

//Practice #4

const cart = [
  { item: "shoes", price: 79.99 },
  { item: "shirt", price: 24.99 },
  { item: "jacket", price: 120.00 },
  { item: "socks", price: 8.99 },
  { item: "hat", price: 34.99 }
];

function cartTotal (purchaseItems) {
  let priceCount = 0;
  for (let i = 0; i < purchaseItems.length; i++) {
   priceCount += purchaseItems[i].price;
   
  }
  return priceCount;
}

console.log(cartTotal(cart));

// Practice #5

const orders = [
  { table: 1, total: 45.00, paid: true },
  { table: 2, total: 82.50, paid: false },
  { table: 3, total: 31.00, paid: true },
  { table: 4, total: 97.75, paid: false },
  { table: 5, total: 58.25, paid: true }
];

function getUnpaidTables (table) {
  
  let notPaid = 0;
  for (let i = 0; i < table.length; i++) {

    if(!table[i].paid ) {
      console.log("Table" + " " + table[i].table + " " + "owes" + " " + "$" + table[i].total)
    }
  }

}

getUnpaidTables(orders);