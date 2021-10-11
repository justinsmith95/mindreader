var symbolarray = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?'
];

var bigTextarray = [
    "I can read your mind",
    "Pick a number from 01-99",
    "Add both digits together to get a new number",
    "Subtract your new number from the original number",
    getRandomNumberSymbol(),
    "Correct Symbol"
    // getMultipleOf9Symbol()
];

var smallTextarray = [
    '',
    "when you have your number click next",
    "Ex: 14 is 1 + 4 = 5, click next to proceed",
    "Ex: 14 - 5 = 9, click next to proceed",
    "Find your new number., Note the symbol beside the number",
    "Your correct symbol is: Multipleof9Symbol"
    // "Your symbol is:" + getMultipleOf9Symbol
];


let nextBtn = document.getElementById("nextButton")
let resetBtn = document.getElementById("resetButton")
let smallTextPara = document.getElementById("smallText")
let bigTextPara = document.getElementById("bigText")
// creates state of mindReader as an object

class mindReader {
    constructor(page, nextButton, resetButton, bigText, smallText) {
        this.page = page;
        this.nextButton = nextButton;
        this.resetButton = resetButton;
        this.bigText = bigText;
        this.smallText = smallText;
    };
    stateManager() {
        if (this.page === 0) {
            this.bigText.innerHTML = bigTextarray[this.page];
            this.smallText.innerHTML = smallTextarray[this.page];
        } else if (this.page === 1) {
            this.bigText.innerHTML = bigTextarray[this.page];
            this.smallText.innerHTML = smallTextarray[this.page];
        } else if (this.page === 2) {
            this.bigText.innerHTML = bigTextarray[this.page];
            this.smallText.innerHTML = smallTextarray[this.page];
        } else if (this.page === 3) {
            this.bigText.innerHTML = bigTextarray[this.page];
            this.smallText.innerHTML = smallTextarray[this.page];
        } else if (this.page === 4) {
            this.bigText.innerHTML = bigTextarray[this.page];
            this.smallText.innerHTML = smallTextarray[this.page];
        } else if (this.page === 5) {
            this.bigText.innerHTML = bigTextarray[this.page];
            this.smallText.innerHTML = smallTextarray[this.page];
        }
    }
};

function nextButtonMethod() {
    // should i use nextBtn here? Do i even need this line? Is this the same as the addEventListener function?
    console.log(mindReaderObj.page)

    mindReaderObj.page++;
    console.log(mindReaderObj.page)
    mindReaderObj.stateManager();
    // Do I need stateManager() OR the class mindReader function???
}

function resetButtonMethod() {
    mindReaderObj.page = 0;
    mindReaderObj.stateManager();
}

resetBtn.addEventListener('click', resetButtonMethod)
nextBtn.addEventListener('click', nextButtonMethod)

function getRandomNumberSymbol() {
    console.log(symbolarray);
    let randomNumberSymbol = '';
    let multipleOf9Symbol = '';
    for (let i = 1; i < 100; i++) {
        // console.log(Math.random() * symbolarray.length)
        let randomSymbol = symbolarray[Math.floor(Math.random() * symbolarray.length)];
        if (i % 9 === 0) {
        // check these 2 things: already has a symbol or is the first multiple of 9
            if (multipleOf9Symbol === '') {
                multipleOf9Symbol = randomSymbol;
            } else {
                randomSymbol = multipleOf9Symbol;
            };
        };
        // tried to use '/n', seemed to work in console but didnt work
        randomNumberSymbol = randomNumberSymbol + i + ' - ' + randomSymbol + '<br/>';
        console.log(randomNumberSymbol);

    };
    return randomNumberSymbol;
}

// use function getMultipleOf9Symbol() to set the small and big text array [5] to the multipleof9symbol



// create variables for each page of mindReader
var mindReaderObj = new mindReader(0, nextBtn, nextBtn, bigTextPara, smallTextPara);
mindReaderObj.stateManager()
console.log('reached this point')

// function trigger for going to the next page of mindReader
// // if (mindReader.nextButton === true) {
//     // to-do mindReader;
// };



// // function to reset mindReader
// if (MindReader.resetButton === true) {
//     // to-do mindReader;
// }

// // function to set the boolean value of the nextButton to be true, which should trigger going to next page
// if ().onclick) {
//     document.getElementById("nextButton") = true
// };
// if (document.getElementById("nextButton") = true) {
//     this.nextButton = true;
// }

// // function to set the boolean value of the resetButton to be true, which should trigger going back to page 1
// if (document.getElementById("resetButton").onclick) {
//     document.getElementById("resetButton") = true
// }