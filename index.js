let display = document.querySelector(".display")
const buttons = document.querySelectorAll(".number")
const clear = document.querySelector('.clear')
const plus = document.querySelector('.plus')
const equals = document.querySelector('.equals')
const zero = document.querySelector('.zero')

let numArray = [];
let actualNumbers = '';
let adding = 0;

// if zero is first number it will not be displayed
function addZeroToDisplay() {
    if (actualNumbers !== '') {
        let nmbr = `${zero.innerText}`;
        actualNumbers = actualNumbers.concat(nmbr);
        display.innerText = actualNumbers;
    }
}

// adding numbers to display
function addToDisplay(item) {
    let nmbr = `${item.innerText}`;
    actualNumbers = actualNumbers.concat(nmbr);   
    display.innerText = actualNumbers;
};

// plus button making first numbers to one array, and new input to new numbers

function addPlus(){
    if (actualNumbers !== ''){
     let first = `${actualNumbers}`;
     numArray.push(first)
     actualNumbers = ''
    }
 }


 //equals button showing sum of numbers
function sum(){
    addPlus();
    const reduceArray = numArray.reduce((acc, num) => {       
        let full =  acc + Number(num)
        console.log(full)
        display.innerText = full
        return full
    }, 0);
}

function clearing() {
    display.innerText = '';
    numArray = [];
    actualNumbers = '';
}



zero.addEventListener('click', addZeroToDisplay)

buttons.forEach(item => {
    item.addEventListener('click', event => {
        addToDisplay(item);
    });
});

plus.addEventListener('click', addPlus)

equals.addEventListener('click', sum)

clear.addEventListener("click", clearing)