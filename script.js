let display = document.querySelector(".display")
const buttons = document.querySelectorAll(".number")
const clear = document.querySelector('.clear')
const plus = document.querySelector('.plus')
const equals = document.querySelector('.equals')
const zero = document.querySelector('.zero')
const minus = document.querySelector('.minus')

let backUp = '';

// fucntions

function zeroAdd() {
    if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {
    } else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("0")
        backUp = backUp.concat("0");
    }
}

function addToDisplay(item) {
    let nmbr = item.innerText;
    backUp = backUp.concat(nmbr);   
    display.innerText = backUp;
};

function substr() {
    if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

    } else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("-")
        backUp = backUp.concat("-");
    }
}

function add() {
    if (backUp.endsWith("-") === true) {
    }
    else if (display.innerText !== '' && backUp.endsWith("+") === false) {
        display.innerText = display.innerText.concat("+")
        backUp = backUp.concat("+");
    }
}

function equal() {
    if (backUp.charAt(backUp.length-1) === "+" || backUp.charAt(backUp.length-1) === "-") {
        eval(backUp.slice(0, -1))
        display.innerText = eval(backUp.slice(0, -1))
        backUp = display.innerText
    }
    else if (backUp !== "") {
        display.innerText = eval(backUp)
        backUp = display.innerText
    }
}

function clearing() {
    backUp = '';
    display.innerText = '';
}

// event listeners

buttons.forEach(item => {
    item.addEventListener('click', event => {
        addToDisplay(item);     
    });
});

plus.addEventListener('click', add)

equals.addEventListener('click', equal)

clear.addEventListener('click', clearing)

minus.addEventListener('click', substr)

zero.addEventListener('click', zeroAdd)