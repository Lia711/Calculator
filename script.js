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
let number = ""
let operator = ""

//inputting numbers
const handleNumberClick = (event) => {
    //numbers can have multiple digits
    number = number+event.target.innerText
    number = parseInt(number)
    console.log("operator", operator);
    //display current number
    inputField.innerText=number;
}

//using operators
const handleOperatorClick = (event) => {
    operator = event.target.innerText
    console.log("operator", operator);
    inputField.innerText=operator;
}

//clear number
const handleClearClick = (event) => {
    console.log(event)
    number = 0;
    inputField.innerText="";
}



//turn number into percentage
const handlePercentageClick = (event) => {
    console.log(event)
    number=number*0.01;
    inputField.innerText=number;
}

//delete last digit of number
const handleDelClick = (event) => {
    console.log(event)
    //convert to string to slice off last digit, then join and parse into number
    number=parseInt(number.toString().split("").slice(0, -1).join(""))
    inputField.innerText=number;
}

//number changes between positive and negative value each click
const handleSignClick = (event) => {
    console.log(event)
    number=number*-1
    inputField.innerText=number;
}

//calculation function
const handleCalculation=(event) => {
    console.log(event)
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

//functional operators
//equals
//decimal





