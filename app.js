const numberInput = document.getElementById('numberPlace');
const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const ce = document.getElementById('ce');
const backs = document.getElementById('delete');
const operators = document.getElementsByClassName('operators');
const plus = document.getElementById('sum');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const resultat = document.getElementById('result');

const arithmetic = (number) => {
    numberInput.value += number.innerHTML;

 
}

zero.addEventListener('click', function () {
    arithmetic(zero);
})

one.addEventListener('click', function () {
    arithmetic(one);
})

two.addEventListener('click', function () {
    arithmetic(two);
})

three.addEventListener('click', function () {
    arithmetic(three);
})

four.addEventListener('click', function () {
    arithmetic(four);
})

five.addEventListener('click', function () {
    arithmetic(five);
})

six.addEventListener('click', function () {
    arithmetic(six);
})

seven.addEventListener('click', function () {
    arithmetic(seven);
})

eight.addEventListener('click', function () {
    arithmetic(eight);
})

nine.addEventListener('click', function () {
    arithmetic(nine);
})

ce.addEventListener('click', () => {
    numberInput.value = '';
})

backs.addEventListener('click', () => {
    numberInput.value = numberInput.value.slice(0, -1);
})

let operatorS;    

const cikl = (operator) => {
    let lastNumber = +numberInput.value.at(-1);
    for(let i = 0; i <= lastNumber; i++){
        if (lastNumber === i) {
            numberInput.value += operator.innerHTML; 
            operatorS = operator.innerHTML;
        }
    }
    
}

let firstNumbers;

let firstNumber = function () {
    firstNumbers = +numberInput.value.slice(0, -1);
    console.log(typeof(firstNumbers));
}


plus.addEventListener('click', () => {
    cikl(plus);
    firstNumber();
})

minus.addEventListener('click', () => {
    cikl(minus);
    firstNumber();
})

multiply.addEventListener('click', () => {
    cikl(multiply);
    firstNumber();
})

divide.addEventListener('click', () => {
    cikl(divide);
    firstNumber();
})

resultat.addEventListener('click', () => {
    
    let secondNumber = +numberInput.value.slice(numberInput.value.indexOf(operatorS) + 1, numberInput.value[numberInput.value.lenght - 1]);

    let result;

    switch(operatorS) {
        case plus.innerHTML:
            result = firstNumbers + secondNumber;
            numberInput.value = result;
            break;
        case minus.innerHTML:
            result = firstNumbers - secondNumber;
            numberInput.value = result;
            break;
        case divide.innerHTML:
            result = firstNumbers / secondNumber;
            numberInput.value = result;
            break;
        case multiply.innerHTML:
            result = firstNumbers * secondNumber;
            numberInput.value = result;
            break;
    }
})
