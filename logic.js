let currentTheme = "theme1";
const themeButtons = document.querySelectorAll('input[name="theme-selector"]');
themeButtons.forEach((themeButton) => {
    themeButton.addEventListener("change", (event) =>{

        const body = document.querySelector('body');
        body.classList.remove(currentTheme);
        currentTheme = event.target.value;
        body.classList.add(currentTheme);
    })
})




const keys = document.querySelectorAll(".key");
const screen = document.querySelector(".screen");

let screenNum = "";
let bufferNum = "";
let bufferOp = null;
let waiting = false;

keys.forEach((key) => {
    key.addEventListener('click', keyPress)
})

function keyPress(event){
    const key = event.target.innerHTML;
    console.log(key);

    switch(key){
        case "DEL":
            del();
            break;
        
        case "RESET":
            reset();
            break;

        case "=":
            commit();
            break;

        case ".":
        decimalSeparator();
        break;
        
        case "+":
            commit();
            bufferNum = screenNum;
            waiting = true;
            bufferOp = plus;
            break;
        
        case "-":
            commit();
            bufferNum = screenNum;
            waiting = true;
            bufferOp = minus;
            break;
        
        case "×":
            commit();
            bufferNum = screenNum;
            waiting = true;
            bufferOp = multiply;
            break;
        
        case "/":
            commit();
            bufferNum = screenNum;
            waiting = true;
            bufferOp = divide;
            break;

        default:
            digit(key);
    }
    updateScreen();
}

/* operations*/
function plus(a,b){return Number(a) + Number(b);}
function minus(a,b){return Number(a) - Number(b);}
function multiply(a,b){return Number(a) * Number(b);}
function divide(a,b){return Number(a) / Number(b);}


function reset(){
    screenNum = "";
    bufferNum = "";
    bufferOp = null;
}

function del(){
    if(screenNum){
        screenNum = screenNum.slice(0, -1);;
    }
}

function commit(){
    if(bufferOp && screenNum && bufferNum){
        answer = bufferOp(bufferNum, screenNum);
        if(answer===Infinity){answer = "Don't do that!"}
        reset();
        screenNum = answer.toString();
    }
}



function digit(key){
    if (screenNum.length < 20){
        screenNum += key;
    }
}

function updateScreen(){
    if(waiting){
        screenNum = "";
        screen.innerHTML = bufferNum;
        waiting = false;
    } else {
        screen.innerHTML = screenNum;
    }
}
