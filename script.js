// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable to count animations triggered
let animationCount = 0;

/**
 * Calculates animation duration based on a base time and multiplier.
 * Demonstrates use of parameters and return value.
 * @param {number} baseTime - base duration in seconds
 * @param {number} multiplier - factor to multiply the base time
 * @returns {number} calculated duration in seconds
 */
function calculateDuration(baseTime, multiplier) {
  // local variable scoped inside function
  let duration = baseTime * multiplier;
  return duration;
}

/**
 * Toggles a CSS class to trigger flip animation.
 * Demonstrates scope by using global variable animationCount.
 * @param {HTMLElement} element - element to animate
 */
function toggleFlipAnimation(element) {
  element.classList.toggle('flip');
  animationCount++;
  console.log(`Animation toggled ${animationCount} times`);
}

/**
 * Shows or hides the modal popup.
 * @param {boolean} show - true to show, false to hide
 */
function toggleModal(show) {
  const modal = document.getElementById('modal');
  if (show) {
    modal.classList.add('show');
  } else {
    modal.classList.remove('show');
  }
}

// Event Listeners

// Part 3: Button triggers flip animation
const animateBtn = document.getElementById('animateBtn');
const jsAnimatedBox = document.getElementById('jsAnimatedBox');
animateBtn.addEventListener('click', () => {
  toggleFlipAnimation(jsAnimatedBox);
});

// Modal open/close
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => toggleModal(true));
closeModalBtn.addEventListener('click', () => toggleModal(false));

// Part 2: Calculate duration button
const calculateBtn = document.getElementById('calculateBtn');
const calcResult = document.getElementById('calcResult');

calculateBtn.addEventListener('click', () => {
  // Use the function with parameters and capture the return value
  const duration = calculateDuration(2, 1.5); // 2s * 1.5 = 3s
  calcResult.textContent = `Calculated animation duration: ${duration} seconds`;
});
