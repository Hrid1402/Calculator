console.log("working...")
let n1 = 0;
let n2 = "";

let actualOperator = "+";
let zeroAtStart = true;
let secondNumber = false;
let posibleOperators = ["+", "-", "x", "/"]
let error = false;

const numbersBTNS = document.querySelectorAll("#number");

const mainText = document.querySelector("#mainText");

const littleText = document.querySelector("#littleText");

const clearBtn = document.querySelector("#clear");

const plusBtn = document.querySelector("#plus");
const multiplicationBtn = document.querySelector("#multiplication");
const minusBtn = document.querySelector("#minus");
const divitionBtn = document.querySelector("#divition");

const equalBtn = document.querySelector("#equal");

console.log(numbersBTNS);
//numbers
numbersBTNS.forEach(button => {
    button.addEventListener("click",() => {
        if(!error){
            console.log("n1: " + n1 +"   n2: " + n2 );
            console.log(+button.textContent);
            if(zeroAtStart){
                mainText.textContent = button.textContent;
                zeroAtStart = false;
            }
            else{
                if(secondNumber){
                    console.log("textContent " + button.textContent);
                    n2 += button.textContent;
                }
                console.log("n2 = " + n2);
                mainText.textContent += button.textContent;
        }
        }
        
        
        

    });
    
});


function calculeTotal(n1,n2){
    switch(actualOperator){
        case "+":
            console.log("actual operator = PLUS");
            total = +n1 + +n2;
            break;
        case "-":
            console.log("actual operator = MINUS");
            total = +n1 - +n2;
            break;
        case "*":

            console.log("actual operator = MULTIPLICATION");
            total = +n1 * +n2;
            break;
        case "/":
            console.log("actual operator = DIVITION");
            total = +n1 / +n2;
            console.log(total);
            break;
        default:
            console.error("No se ha dado tipo de operador numero xd");
            return n1;
        
    }
    if(isNaN(total)){
        total = "really? ";
        error = true;
        return total;
    }
    return Math.round(total*1000)/100000;
}
//clear
clearBtn.addEventListener("click",() => {
    error = false;
    console.log("clear");
    mainText.textContent = "0";
    littleText.textContent = "=";
    n1 = 0;
    n2 = 0;
    actualOperator = "";
    zeroAtStart = true;
    secondNumber = false;

});

//plus
plusBtn.addEventListener("click",() => {
    if(secondNumber){
        if(posibleOperators.includes(mainText.textContent)){
            mainText.textContent = "+";
        }
        else{
            zeroAtStart = false;
            let total = calculeTotal(n1,n2);
            littleText.textContent = "=" + total;
            mainText.textContent = "";
            n1 = total;
            n2 = "";
            secondNumber = true;
            actualOperator = "+";
            mainText.textContent += "+";
        }
        
    }
    else{
        zeroAtStart = false;
        console.log("plus");
        actualOperator = "+";
        n1 = +mainText.textContent;
        mainText.textContent += "+";
        console.log("n1 value = " + n1);
        secondNumber = true;
    }
    
});

//minus
minusBtn.addEventListener("click",() => {
    if(secondNumber){
        if(posibleOperators.includes(mainText.textContent)){
            mainText.textContent = "-";
        }
        else{
            zeroAtStart = false;
            let total = calculeTotal(n1,n2);
            littleText.textContent = "=" + total;
            mainText.textContent = "";
            n1 = total;
            n2 = "";
            secondNumber = true;
            actualOperator = "-";
            mainText.textContent += "-";
        }
        
    }
    else{
        zeroAtStart = false;
        console.log("plus");
        actualOperator = "-";
        n1 = +mainText.textContent;
        mainText.textContent += "-";
        console.log("n1 value = " + n1);
        secondNumber = true;
    }
    
});

//multiplication
multiplicationBtn.addEventListener("click",() => {
    if(secondNumber){
        if(posibleOperators.includes(mainText.textContent)){
            mainText.textContent = "x";
        }
        else{
            zeroAtStart = false;
            let total = calculeTotal(n1,n2);
            littleText.textContent = "=" + total;
            mainText.textContent = "";
            n1 = total;
            n2 = "";
            secondNumber = true;
            actualOperator = "*";
            mainText.textContent += "x";
        }
        
    }
    else{
        zeroAtStart = false;
        console.log("multiplication");
        actualOperator = "*";
        n1 = +mainText.textContent;
        mainText.textContent += "x";
        console.log("n1 value = " + n1);
        secondNumber = true;
    }
    
});
//divition
divitionBtn.addEventListener("click",() => {
    if(secondNumber){
        if(posibleOperators.includes(mainText.textContent)){
            mainText.textContent = "÷";
        }
        else{
            zeroAtStart = false;
            let total = calculeTotal(n1,n2);
            littleText.textContent = "=" + total;
            mainText.textContent = "";
            n1 = total;
            n2 = "";
            secondNumber = true;
            actualOperator = "/";
            mainText.textContent += "÷";
        }
        
    }
    else{
        zeroAtStart = false;
        console.log("multiplication");
        actualOperator = "/";
        n1 = +mainText.textContent;
        mainText.textContent += "÷";
        console.log("n1 value = " + n1);
        secondNumber = true;
    }
    
});

//equal
equalBtn.addEventListener("click",() => {
    console.log("equal");
    littleText.textContent = "=";
    mainText.textContent = calculeTotal(n1,n2);

    
    n1 = 0;
    n2 = "";
    secondNumber = false;
    zeroAtStart = true;
        
    

});