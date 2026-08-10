# Browser Testing Checklist — Day 13
**Developer:** Indigo Collier  
**Date:** August 2026  
**Project:** Indigo Digital Portfolio  

---

## What Is Cross-Browser Testing?

Different browsers (Chrome, Firefox, Safari, Edge) interpret CSS and HTML slightly differently.
A site that looks perfect in Chrome might have a broken layout in Safari.
Day 13 is about finding those differences and fixing them before users see them.

---

## Browsers to Test

| Browser | Version | Platform | Tested? |
|---|---|---|---|
| Chrome | Latest | Windows | ☐ |
| Firefox | Latest | Windows | ☐ |
| Edge | Latest | Windows | ☐ |
| Chrome | Latest | Android (if available) | ☐ |
| Safari | Latest | Mac/iPhone (if available) | ☐ |

---

## What to Test on Every Page

For each browser, open each of your 4 pages and check these:

### Navigation
- ☐ Nav is sticky — stays at top when you scroll
- ☐ Nav links all work (click every one)
- ☐ Nav stacks vertically on mobile (375px width in DevTools)
- ☐ Nav goes horizontal on tablet (768px+ in DevTools)
- ☐ Hover effect works on all nav links

### Layout
- ☐ No horizontal scrolling on any page at 375px
- ☐ Cards wrap to new rows correctly on projects page
- ☐ CSS Grid cards look identical across browsers
- ☐ Header and footer stretch full width

### Animations (Day 12)
- ☐ Fade-in animation plays on page load
- ☐ Cards animate in with stagger effect on projects page
- ☐ Card hover lift effect is smooth (not jerky)
- ☐ Animations do not cause layout shifts

### Forms (Contact page)
- ☐ All form fields are visible and styled
- ☐ Tab key moves through all fields in logical order
- ☐ Submit button hover effect works
- ☐ Form inputs do not cause page to zoom (font-size: 1rem is set)

### Images
- ☐ All images load on about page
- ☐ All project card images load on projects page
- ☐ Images maintain aspect ratio (object-fit: cover working)
- ☐ No broken image icons visible

---

## Issues Found

| Browser | Page | Issue Description | Fixed? |
|---|---|---|---|
| | | | ☐ |
| | | | ☐ |
| | | | ☐ |

---

## Common Issues and Fixes

**Sticky nav not working in Safari:**
Add `-webkit-sticky` before `sticky`:
```css
position: -webkit-sticky;
position: sticky;
```
(Already applied in styles.css)

**Animations not running in older browsers:**
Add `@-webkit-keyframes` alongside `@keyframes`:
```css
@-webkit-keyframes fadeInUp { ... }
@keyframes fadeInUp { ... }
```

**CSS Grid not supported:**
CSS Grid is supported in all browsers released after 2017.
If a user is on a very old browser, the cards will stack vertically — acceptable fallback.

**Form inputs zooming on iOS Safari:**
Make sure all inputs have `font-size: 1rem` or larger.
iOS Safari zooms in on inputs with font-size below 16px.
(Already applied in styles.css)

---

## Vendor Prefixes Applied in styles.css

| Property | Prefix Added | Why |
|---|---|---|
| `position: sticky` | `-webkit-sticky` | Safari 6.1–12 |
| `transition` | `-webkit-transition` | Chrome 1–25, Safari 3.1–6 |
| `transform` | `-webkit-transform` | Chrome 4–35, Safari 3.1–8 |

---

## Sign-Off

All browsers tested and issues documented.  
**Signature:** _______________________  
**Date:** _______________________
