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

// fucntions


function zeroAdd() {
        if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

        } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

        } else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("0")
        backUp = backUp.concat("0");
    }
}

// function dotAdd() {
//     if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

//     } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

//     } else if(backUp.includes(".")){

//     } else if (display.innerText !== '' && backUp.endsWith(".") === false ) {
//     display.innerText = display.innerText.concat(".")
//     backUp = backUp.concat(".");
// }

// }

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
    }
}

function add() {
    if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

    } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

    } 
    else if (display.innerText !== '') {
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

function times() {
    if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

    } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

    } else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("*")
        backUp = backUp.concat("*");
    }
}

function dividedBy() {
    if (backUp.endsWith("+") === true || backUp.endsWith("-") === true) {

    } else if (backUp.endsWith("*") === true || backUp.endsWith("/") === true ) {

    } else if (display.innerText !== '') {
        display.innerText = display.innerText.concat("/")
        backUp = backUp.concat("/");
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
        // case 'dot':
        //     dotAdd();
        //     break;
    }
}

function addEventsByKey(btnEvent) {
    const key = (btnEvent.key)

    console.log(key)
    switch (true) {
        case typeof key == 'Number':
            console.log('działam')
            break;
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
        // case key === '.':
        //     dotAdd()
        //     break;
        case isNaN(key) === false:
            console.log(key)
            addNumDisplay(key)
            break;
        case key === 'Backspace':
            del();
            break;

    }
}




calc.addEventListener('click', addEventsToButtons)

window.addEventListener("keydown", addEventsByKey)