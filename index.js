// Write your code here!
// Create a new header
const newHeader = document.createElement('h1');

// Give the header an id of 'victory'
newHeader.id = 'victory';

// Add the text "YOUR-NAME is the champion" to the header (with your name in place of YOUR-NAME)
newHeader.textContent = `vicky is the champion`;

// Get the main element from the DOM
const mainElement = document.getElementById('main');

// Insert the new header before the end of the main element
mainElement.appendChild(newHeader);

// Remove the main element from the DOM
mainElement.remove();