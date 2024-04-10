function add(a,b){
    console.log(a + b);
    return +a + +b;
}

function subtract(a,b){
    return +a - +b;
}

function multiply(a,b){
    return +a * +b;
}

function divide(a, b){
    return +a / +b;
}

function operate(number, secondNumber, operator){
    switch(operator){
        case "+": return add(number, secondNumber);

        case "-": return subtract(number, secondNumber);

        case "*": return multiply(number, secondNumber);

        case "/": return divide(number, secondNumber);

        case 0: return number;
    }
}

let number = "";
let operator = 0;
let secondNumber = "0";

let count = 0;
let result = 0;
let display = document.querySelector("#display");
let buttons = document.querySelector("#buttons");
let dot = false; // used to follow the usage of dot notation in number and deny the usage
//   of more the one dot per string



let CE = () => {
    display.textContent = ""
    count = 0;
    number = "";
    secondNumber = "";
    dot = false;
}



buttons.addEventListener('click',(e) =>{
    let target = e.target.id;
    if(e.target != buttons){
        display.textContent += target;

        if(target < 10 || target == "."){


            if(count == 2){// setting values after enter and first number press  
                CE();//clear display
                display.textContent = target;
            }
            if(dot && target != "." || !dot ){

                if(count == 0){

                    number += target;

                }else if(count == 1) {
                    console.log(target);
                    secondNumber += target;
                }
            }

            if(target == "."){
                dot = true;
            }

        }else{
            if(target == "CE"){
                CE();//clear display

            }else if(target == "enter"){ // enter operation
                number = operate(number, secondNumber, operator);
                console.log("not inside operator num = " + number);
                display.textContent = "result = " + number;

                count = 2;
            }else if(count == 1){
                dot = false;
                operator = target;
                number = operate(number, secondNumber, operator);
                console.log("inside operator num = " + number);
            }else{
                dot = false;
                count = 1;
                operator = target;
            }
            
        }

        
    }
});
