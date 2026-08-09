**CSS Fundamentals**

Day 3 Cheat Sheet  •  Indigo Collier

## **1\. Syntax & Structure**

A CSS rule has three parts: a selector, a property, and a value. Every declaration ends with a semicolon.

| selector {   property: value;   /\* one declaration \*/   property: value;   /\* another one \*/ } |
| :---- |

*💡 Missing a semicolon is the \#1 beginner bug. CSS won't show an error — it just silently breaks.*

Linking your CSS file to HTML — always goes inside \<head\>, not \<body\>:

| \<head\>   \<link rel="stylesheet" href="styles.css"\> \</head\> |
| :---- |

*💡 If your styles aren't showing up, check this line first. The href must match your filename exactly — case matters.*

## **2\. Selectors**

| h1 { } | element — targets every h1 on the page |
| :---- | :---- |
| **.card { }** | class — targets elements with class="card" |
| **\#hero { }** | ID — targets the element with id="hero" |
| **header h1 { }** | descendant — h1 inside a header only |
| **h1, h2 { }** | group — same rules apply to both |

Adding a class in HTML, then targeting it in CSS:

| \<section class="bio-section"\>...\</section\> /\* The dot means: look for this class in HTML \*/ .bio-section {   background-color: white;   padding: 20px; } |
| :---- |

*💡 Use classes for anything you'll reuse. Use IDs only when an element is truly one-of-a-kind on the page. In practice, classes do 95% of the work.*

## **3\. The Box Model**

Every HTML element is a box made of four layers (outside → in):

* Margin — space outside the element (pushes other elements away)

* Border — the line around the element

* Padding — space inside the element (between border and content)

* Content — the actual text or image

| /\* Padding shorthand — clockface: top right bottom left \*/ padding: 10px 20px 10px 20px; /\* All four sides at once \*/ padding: 20px; /\* Top/bottom and left/right \*/ padding: 10px 20px; /\* Margin — same shorthand rules \*/ margin: 16px; margin: 0 auto;   /\* centers a block element horizontally \*/ /\* Border shorthand: width style color \*/ border: 2px solid \#333333; border-radius: 6px;          /\* rounded corners \*/ border-bottom: 1px solid \#dddddd; /\* one side only \*/ |
| :---- |

*💡 Use padding when you want space inside an element. Use margin when you want space between elements.*

## **4\. Colors**

| color: red; | named color — limited options, good for quick tests |
| :---- | :---- |
| **color: \#e94560;** | hex — most common in real codebases |
| **color: rgb(233,69,96);** | rgb — useful when you want to tweak values |
| **color: \#222222;** | text color — use near-black, easier on eyes than \#000 |
| **background-color: \#f5f5f5;** | background — light gray looks more polished than white |

*💡 Contrast rule: dark text on light background, or light text on dark background. If you squint and can't read it, the contrast is wrong.*

## **5\. Typography**

| font-family | typeface — what the letters look like |
| :---- | :---- |
| **font-size** | how big the text is (px or rem) |
| **font-weight** | thin vs bold — 400 is normal, 700 is bold |
| **line-height** | space between lines — 1.6 is comfortable for reading |
| **text-align** | left, center, right, justify |
| **text-decoration** | underline, none (removes link underlines) |

| body {   font-family: Arial, sans-serif;  /\* fallback if Arial isn't available \*/   font-size: 16px;   line-height: 1.6; } h1 {   font-size: 2rem;     /\* rem \= relative to base size. 2rem \= 32px \*/   font-weight: 700; } |
| :---- |

*💡 px is fixed. rem scales with the browser's base font size. For now, px is fine — just know rem exists.*

## **6\. Specificity — Who Wins When Rules Conflict?**

| inline style="..." | 1000 points — always wins |
| :---- | :---- |
| **\#id selector** | 100 points |
| **.class selector** | 10 points |
| **element selector (h1)** | 1 point |

| h1 { color: black; }         /\* score: 1 \*/ .hero h1 { color: white; }   /\* score: 11 — this wins \*/ |
| :---- |

When specificity is equal, the rule that appears later in the file wins. This is the 'cascading' in Cascading Style Sheets.

| h1 { color: black; } h1 { color: blue; }   /\* same score, comes later — wins \*/ |
| :---- |

## **7\. Common Mistakes**

**Missing semicolon**

| /\* broken — missing ; breaks everything after it \*/ color: red background-color: blue; /\* fixed \*/ color: red; background-color: blue; |
| :---- |

**Selector typo — the silent killer**

| \<div class="bio-section"\>     /\* HTML \*/ .biosection { padding: 20px; } /\* CSS — nothing happens, no error \*/ .bio-section { padding: 20px; } /\* fixed — hyphen was missing \*/ |
| :---- |

*💡 CSS never throws errors — it silently does nothing. If a rule isn't working, check the selector spelling first.*

**Centering a div**

| /\* text-align: center only centers inline content (text) \*/ /\* To center a block element horizontally: \*/ .container {   max-width: 800px;   margin: 0 auto;   /\* auto left \+ right \= centered \*/ } |
| :---- |

**Margin collapse**

| h1 { margin-bottom: 20px; } p  { margin-top: 20px; } /\* Gap between them \= 20px, NOT 40px \*/ /\* Top \+ bottom margins collapse to the larger value \*/ |
| :---- |

*💡 When two vertical margins touch, they merge. Use padding instead of margin when you need guaranteed space between elements.*

Persevere Full-Stack Program  •  Day 3: CSS Basics  •  Indigo Collier