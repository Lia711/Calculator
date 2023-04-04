//access input and buttons
const inputField=document.querySelector(".input__box")
const buttonNumber=document.querySelectorAll(".buttons__number")
const buttonOperator=document.querySelectorAll(".buttons__operator")
const buttonClear=document.querySelector(".buttons__clear")
const buttonPercentage=document.querySelector(".buttons__percentage")
const buttonDelete=document.querySelector(".buttons__delete")
const buttonSign=document.querySelector(".buttons__sign")
const buttonEquals=document.querySelector(".buttons__equals")

console.log(buttonNumber);
console.log(inputField);
console.log(buttonOperator);
console.log(buttonClear);
console.log(buttonPercentage)
console.log(buttonDelete);
console.log(buttonSign);
console.log(buttonEquals);

//main variables for calculation
let operator = ""
let number1 = ""
let number2= ""

const updateDisplay = () => {
    inputField.innerText=`${number1}${operator}${number2}`;
}

//inputting numbers
const handleNumberClick = (event) => {
    if (operator!=="") {
        number2 =parseInt(number2+event.target.innerText);

    } else {
        number1= parseInt(number1+event.target.innerText);
    }
    updateDisplay();
}

//using operators
const handleOperatorClick = (event) => {
    operator = event.target.innerText
    updateDisplay();
}

//clear numbers
const handleClearClick = (event) => {
    console.log(event)
    number1="";
    number2="";
    operator="";
    updateDisplay();
}

//turn number into percentage
const handlePercentageClick = (event) => {
    console.log(event)
    if (operator!=="") {
        number2=number2*0.01;
    } else {
        number1=number1*0.01;
    } updateDisplay();
}
 
//delete last digit of number
const handleDelClick = (event) => {
    console.log(event)
    if (operator!=="") {
        //convert to string to slice off last digit, then join and parse into number
        number2=parseInt(number2.toString().split("").slice(0, -1).join(""))
    } else {
        number1=parseInt(number1.toString().split("").slice(0, -1).join(""))
    } updateDisplay();  
}

//number changes between positive and negative value each click
const handleSignClick = (event) => {
    console.log(event)
    if (operator!=="") {
        number2=number2*-1;
    } else {
        number1=number1*-1;
    } updateDisplay();
}

//calculation function/switch case for operators
const handleCalculation=(event)=> { 
    console.log(event)
    let output
    switch (operator) {
        case "+":
            output=number1+number2;
            break;
        case "-":
            output=number1-number2;
            break;
        case "x":
            output=number1*number2;
            break;
        case "/":
            output=number1/number2;
            break;
    }
    //rounds to 5 decimal places
    output=Math.round(output*100000)/100000;
    inputField.innerText=output;
    //can handle a chain of operations
    number1=output;
    number2="";
}

//numbers event listener
buttonNumber.forEach((button)=> {
    button.addEventListener("click", handleNumberClick)
})

//operator event listener
buttonOperator.forEach((button)=> {
    button.addEventListener("click", handleOperatorClick)
})

//event listeners for AC, %, +/-, =
buttonClear.addEventListener("click", handleClearClick)
buttonPercentage.addEventListener("click", handlePercentageClick)
buttonDelete.addEventListener("click", handleDelClick)
buttonSign.addEventListener("click", handleSignClick)
buttonEquals.addEventListener("click", handleCalculation)

