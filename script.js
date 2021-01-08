let display = document.querySelector(".display")
const buttons = document.querySelectorAll(".number")
const clear = document.querySelector('.clear')
const plus = document.querySelector('.plus')
const equals = document.querySelector('.equals')
const zero = document.querySelector('.zero')
const minus = document.querySelector('.minus')
const calc = document.querySelector('.calculator')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const dot = document.querySelector(".dot")
const clearEntry = document.querySelector('.clearEntry')

let backUp = '';
let dotBool = true;
// functions


function zeroAdd() {
        if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

        } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

        } else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("0")
        backUp = backUp.concat("0");
    }
}

function dotAdd() {
    if (dotBool === false) {
    } else if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {
    }
    } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {
    }
    else if(display.innerText !== '' && backUp.endsWith(".") === false ) {
      display.innerText = display.innerText.concat(".")
      backUp = backUp.concat(".");
      dotBool = false
    }
}

function addToDisplay(item) {
    let nmbr = item.innerText;
    backUp = backUp.concat(nmbr);   
    display.innerText = backUp;
};

function substr() {
    if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

    } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

    }  else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("-")
        backUp = backUp.concat("-");
        dotBool = true;
    }
}

function add() {
    if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

    } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

    } 
    else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("+")
        backUp = backUp.concat("+");
        dotBool = true;
    }
}

function equal() {
    if (backUp.charAt(backUp.length-1) === "+" || backUp.charAt(backUp.length-1) === "-") {
        eval(backUp.slice(0, -1))
        display.innerText = eval(backUp.slice(0, -1))
        backUp = display.innerText
        dotBool = true;
    }
    else if (backUp !== "") {
        display.innerText = eval(backUp)
        backUp = display.innerText
        dotBool = true;
    }
}

function clearing() {
    backUp = '';
    display.innerText = '';
    dotBool = true;
}

function times() {
    if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

    } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

    } else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("*")
        backUp = backUp.concat("*");
        dotBool = true;
    }
}

function dividedBy() {
    if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

    } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

    } else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("/")
        backUp = backUp.concat("/");
        dotBool = true;
    }
}

function addNumDisplay(key) {
    let nmbr = `${key}`;
    backUp = backUp.concat(nmbr);   
    display.innerText = backUp;
};

function del() {
    backUp = backUp.slice(0, -1);
    display.innerText = backUp;
}

// event listeners

buttons.forEach(item => {
    item.addEventListener('click', event => {
        addToDisplay(item);     
    });
});



function addEventsToButtons(btn) {

    const buttonClass = btn.target.classList.value;

    switch (buttonClass) {
        case 'plus':
            add();
            break;
        case 'equals':
            equal();
            break;
        case 'clear':
            clearing();
            break;
        case 'clearEntry':
            del();
            break;
        case 'minus':
            substr();
            break;
        case 'zero':
            zeroAdd();
            break;
        case 'multiply':
            times();
            break;
        case 'divide':
            dividedBy();
            break;
        case 'dot':
            dotAdd();
            break;
    }
}

function addEventsByKey(btnEvent) {
    const key = (btnEvent.key)

    switch (true) {
        case key ==='+':
            add();
            break;
        case key === '=':
            equal();
            break;
        case key === 'Enter' :
            equal();
            break;
        case key === 'c':
            clearing();
            break;
        case key === '-':
            substr();
            break;
        case key === '0':
            zeroAdd();
            break;
        case key === '*':
            times()
            break;
        case key === '/':
            dividedBy()
            break;
        case key === '.':
            dotAdd()
            break;
        case isNaN(key) === false:
            addNumDisplay(key)
            break;
        case key === 'Backspace':
            del();
            break;

    }
}




calc.addEventListener('click', addEventsToButtons)

window.addEventListener("keydown", addEventsByKey)