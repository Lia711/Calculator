const inputField=document.querySelector(".input__box")
const buttonNumber=document.querySelectorAll(".buttons__number")
const buttonOperator=document.querySelectorAll(".buttons__operator")
const buttonClear=document.querySelector(".buttons__clear")
const buttonPercentage=document.querySelector(".buttons__percentage")
const buttonDelete=document.querySelector(".buttons__delete")

console.log(buttonNumber);
console.log(inputField);
console.log(buttonOperator);
console.log(buttonClear);
console.log(buttonPercentage)
console.log(buttonDelete);

let number = ""
let operator = ""

const handleNumberClick = (event) => {
    number = parseInt(event.target.innerText)
    console.log("operator", operator);
    inputField.innerText=number;
}

const handleOperatorClick = (event) => {
    operator = event.target.innerText
    console.log("operator", operator);
    inputField.innerText=operator;
}

const handleClearClick = (event) => {
    console.log(event)
    inputField.innerText="";
}

buttonNumber.forEach((button)=> {
    button.addEventListener("click", handleNumberClick)
})

buttonOperator.forEach((button)=> {
    button.addEventListener("click", handleOperatorClick)
})

const handlePercentageClick = (event) => {
    console.log(event)
    number=number*0.01;
    inputField.innerText=number;
}

const handleDelClick = (event) => {
    console.log(event)
    number=parseInt(number.toString().split("").slice(0, -1).join(""))
    inputField.innerText=number;
}

buttonClear.addEventListener("click", handleClearClick)

buttonPercentage.addEventListener("click", handlePercentageClick)

buttonDelete.addEventListener("click", handleDelClick)

//stack numbers
//functional operators
//equals
//negative/positive value
//decimal



