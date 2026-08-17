// ============================================================
//  console-programs.js — DAY 21 PROJECT
//  Instructor Version: Indigo Collier
//  Console Programs Trio — 3 programs using variables + console.log
// ============================================================

// ── WHAT IS THIS FILE? ──────────────────────────────────────
// This is a plain JavaScript file — no HTML, no CSS.
// To run it: open in VS Code, right-click → Run in Node Terminal
// OR paste sections into the browser console (Ctrl+Shift+J)
// The browser console is your output window for all of Phase 2.

// ── HOW JAVASCRIPT IS DIFFERENT FROM HTML/CSS ───────────────
// HTML: builds structure
// CSS: adds visual style
// JavaScript: adds LOGIC and BEHAVIOR
// You are now writing programs, not pages.
// Feedback is in the console, not the browser window.


// ============================================================
//  PROGRAM 1: Restaurant Order Calculator
//  Demonstrates: const, let, strings, numbers, console.log
// ============================================================

// const = a value that NEVER changes
// Use const for anything that stays the same
// Think of it as a labeled box you seal shut
const RESTAURANT_NAME = "Golden Fork Grill";   // string — text in quotes
const TAX_RATE = 0.085;                         // number — decimals are fine
const TIP_RATE = 0.20;                          // 20% tip

// let = a value that CAN change
// Use let for anything that updates during the program
let itemPrice = 24.99;      // the cost of one menu item
let quantity = 3;           // how many were ordered

// Arithmetic with variables — same as math, just with variable names
// JavaScript follows standard order of operations (PEMDAS)
let subtotal = itemPrice * quantity;            // 24.99 × 3 = 74.97
let tax = subtotal * TAX_RATE;                  // 74.97 × 0.085 = 6.372...
let tip = subtotal * TIP_RATE;                  // 74.97 × 0.20 = 14.994
let total = subtotal + tax + tip;               // full bill

// console.log() — prints output to the browser console
// This is your ONLY output method in Phase 2 (no HTML to render to)
// Whatever goes inside the parentheses gets printed
console.log("=== " + RESTAURANT_NAME + " ===");       // string concatenation with +
console.log("Subtotal: $" + subtotal.toFixed(2));      // .toFixed(2) rounds to 2 decimal places
console.log("Tax: $" + tax.toFixed(2));
console.log("Tip: $" + tip.toFixed(2));
console.log("Total: $" + total.toFixed(2));
// Expected output:
// === Golden Fork Grill ===
// Subtotal: $74.97
// Tax: $6.37
// Tip: $14.99
// Total: $96.33


// ============================================================
//  PROGRAM 2: Student Info Display
//  Demonstrates: multiple data types, typeof, template literals
// ============================================================

// The 5 primitive data types in JavaScript:
const studentName = "Indigo Collier";    // string  — always in quotes
const currentDay = 21;                   // number  — no quotes
const isEnrolled = true;                 // boolean — true or false (no quotes!)
const graduationDate = null;             // null    — intentionally empty (value exists but is blank)
let favoriteProject;                     // undefined — declared but no value assigned yet

// typeof operator — tells you what data type a value is
// Returns the type as a STRING
console.log("\n=== Student Info ===");
console.log("Name: " + studentName);
console.log("Current Day: " + currentDay);
console.log("Enrolled: " + isEnrolled);

// typeof in action — useful for debugging
console.log("\n=== Data Type Check ===");
console.log(typeof studentName);         // "string"
console.log(typeof currentDay);          // "number"
console.log(typeof isEnrolled);          // "boolean"
console.log(typeof graduationDate);      // "object" — typeof null returns "object" (a known JS quirk)
console.log(typeof favoriteProject);     // "undefined"

// Template literals — a cleaner way to combine strings and variables
// Use backticks ` ` instead of regular quotes
// Put variables inside ${} — called interpolation
console.log(`\nStudent ${studentName} is on Day ${currentDay} of the program.`);
// Output: Student Indigo Collier is on Day 21 of the program.
// This is cleaner than: "Student " + studentName + " is on Day " + currentDay + " of the program."


// ============================================================
//  PROGRAM 3: Tip Calculator Breakdown
//  Demonstrates: multiple variables working together, rounding, practical math
// ============================================================

// Real-world scenario: a table at a restaurant
const billAmount = 87.50;       // the bill before tip
const numberOfPeople = 4;       // splitting equally

// Different tip percentages stored as variables
const tip15 = billAmount * 0.15;    // 15% tip
const tip18 = billAmount * 0.18;    // 18% tip
const tip20 = billAmount * 0.20;    // 20% tip

// Each person's share at each tip level
const perPerson15 = (billAmount + tip15) / numberOfPeople;
const perPerson18 = (billAmount + tip18) / numberOfPeople;
const perPerson20 = (billAmount + tip20) / numberOfPeople;

console.log("\n=== Tip Calculator ===");
console.log(`Bill: $${billAmount}`);
console.log(`Split between: ${numberOfPeople} people`);
console.log("\n--- Tip Options ---");
console.log(`15% tip: $${tip15.toFixed(2)} | Per person: $${perPerson15.toFixed(2)}`);
console.log(`18% tip: $${tip18.toFixed(2)} | Per person: $${perPerson18.toFixed(2)}`);
console.log(`20% tip: $${tip20.toFixed(2)} | Per person: $${perPerson20.toFixed(2)}`);
// Expected output:
// === Tip Calculator ===
// Bill: $87.5
// Split between: 4 people
// --- Tip Options ---
// 15% tip: $13.13 | Per person: $25.16
// 18% tip: $15.75 | Per person: $25.81
// 20% tip: $17.50 | Per person: $26.25
