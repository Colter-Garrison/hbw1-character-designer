// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

// set state for all of the character's catchphrases
let catchphrase = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    console.log('changing select', headDropdown.value);
    // increment the head change count state
    headCount++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url('./assets/${headDropdown.value}.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    console.log('changing select', middleDropdown.value);
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    console.log('changing select', bottomDropdown.value);
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}.png')`
    // update the stats to show the new count (call displayStats() to do this work)    
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    console.log('clicking add', catchphraseInput.value);
    // push the new catchphrase to the catchphrase array in state
    catchphrase.push(catchphraseInput.value);
    console.log(catchphrase);
    displayCatchphrases();
    // clear out the form input's value so it's empty to the user
   
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You have changed the head ${headCount} times, the middle ${middleCount} times and the bottom ${bottomCount} times. And don't forget your beasts classic catchphrases: `;
}

function displayCatchphrases() {
//     // clear out the DOM for the currently displayed catchphrases
//     // loop through each catchphrase in state
//     // and for each catchphrase
//     // create an HTML element with the catchphrase as its text content
//     // and append that HTML element to the cleared-out DOM
// 
    const catchphraseList = document.getElementById('catchphrase-list');
    catchphraseList.textContent = ' ';

    for (let phrase of catchphrase) {
        const thePhrase = document.createElement('li');
        thePhrase.textContent = phrase;
        catchphraseList.append(thePhrase);
    }
}