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
let number1 = ""
let number2= ""

//inputting numbers
const handleNumberClick = (event) => {
    //numbers can have multiple digits
    number = parseInt(number+event.target.innerText)
    //display current number
    inputField.innerText=number;
}

//using operators
const handleOperatorClick = (event) => {
    operator = event.target.innerText
    inputField.innerText=operator;
    //after operator is used, number1 is finalized
    number1=number;
    //number variable can be used again to store next number
    number=0;
}

//clear numbers
const handleClearClick = (event) => {
    console.log(event)
    number = 0;
    number1=0;
    number2=0;
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



//calculation function/switch case for operators
const handleCalculation=(event)=> { 
    console.log(event)
    //latest input (after operator) becomes number2
    number2=number;
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
    //handle a chain of calculations
    number2=0;
    number=output;
}

//numbers event listener
buttonNumber.forEach((button)=> {
    button.addEventListener("click", handleNumberClick)
})

//operator event listener
buttonOperator.forEach((button)=> {
    button.addEventListener("click", handleOperatorClick)
})

//event listeners for AC, %, +/-, =, decimal
buttonClear.addEventListener("click", handleClearClick)

buttonPercentage.addEventListener("click", handlePercentageClick)

buttonDelete.addEventListener("click", handleDelClick)

buttonSign.addEventListener("click", handleSignClick)

buttonEquals.addEventListener("click", handleCalculation)



//handle multiple inputs 
//decimal
//clear operator





