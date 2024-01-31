console.log("working...")
let n1 = 0;
let n2 = "";

let actualOperator = "+";
let zeroAtStart = true;
let secondNumber = false;
let posibleOperators = ["+", "-", "x", "/"]
let posibleOperatorsForDelete = ["+", "-", "x", "÷"]
let error = false;
let dotPressed = false;


const numbersBTNS = document.querySelectorAll("#number");
const dotBTN = document.querySelector("#dot");

const mainText = document.querySelector("#mainText");

const littleText = document.querySelector("#littleText");

const clearBtn = document.querySelector("#clear");

const plusBtn = document.querySelector("#plus");
const multiplicationBtn = document.querySelector("#multiplication");
const minusBtn = document.querySelector("#minus");
const divitionBtn = document.querySelector("#divition");
const deleteBtn = document.querySelector("#delete");
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

//dot
dotBTN.addEventListener("click",() => {
    if(dotPressed == false){
        if(!error){
            console.log("n1: " + n1 +"   n2: " + n2 );
            console.log(".");
            if(zeroAtStart){
                mainText.textContent += ".";
                zeroAtStart = false;
            }
            else{
                if(secondNumber){
                    console.log("textContent " + ".");
                    n2 += ".";
                }
                console.log("n2 = " + n2);
                mainText.textContent += ".";
                }
        }
        dotPressed = true;
    }

});


function calculeTotal(n1,n2){
    n1 = Number(n1);
    n2 = Number(n2);
    console.log("TO OPERATE, N1: " + n1 + " N2: " + n2);    
    switch(actualOperator){
        case "+":
            console.log("SUMANDO")
            console.log("actual operator = PLUS");
            total = +n1 + +n2;
            console.log("total:" + total);

            break;
        case "-":
            console.log("actual operator = MINUS");
            total = n1 - n2;
            break;
        case "*":

            console.log("actual operator = MULTIPLICATION");
            total = n1 * n2;
            break;
        case "/":
            console.log("actual operator = DIVITION");
            total = n1 / n2;
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
    if(total.toString().includes(".") && total.toString().length > 8){
        return parseFloat(total.toFixed(8));
    }
    else if(total.toString().length > 10){
        console.log("yeah, the number is big");
        return total.toExponential();
    }
    
    else{
        return total;
    }
    
}
//clear
clearBtn.addEventListener("click",() => {
    dotPressed = false;
    error = false;
    console.log("clear");
    mainText.textContent = "0";
    littleText.textContent = "=";
    n1 = 0;
    n2 = "";
    actualOperator = "";
    zeroAtStart = true;
    secondNumber = false;

});

//delete
deleteBtn.addEventListener("click",() =>{
    console.log("simbolo al final: " +mainText.textContent[mainText.textContent.length - 1]);
    if(!posibleOperatorsForDelete.includes(mainText.textContent[mainText.textContent.length - 1])){
        if (secondNumber){
            n2 = n2.slice(0, -1);
            mainText.textContent = mainText.textContent.slice(0, -1);
            if (!n2.includes(".")){
                dotPressed = false;
            }
        }
        else{
            mainText.textContent = mainText.textContent.slice(0, -1);
            if (!mainText.textContent.includes(".")){
                dotPressed = false;
            }
        }
        
    }
    
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
            dotPressed = false;
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
        dotPressed = false;
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
            dotPressed = false;
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
        dotPressed = false;
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
            dotPressed = false;
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
        dotPressed = false;
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
            dotPressed = false;
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
        dotPressed = false;
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
    dotPressed = false;
        
    

});