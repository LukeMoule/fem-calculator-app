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

let screenNum = "";
let bufferNum = "";
let bufferOp = null;

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
            bufferOp = plus;
            break;
        
        case "-":
            commit();
            bufferOp = minus;
            break;
        
        case "×":
            commit();
            bufferOp = multiply;
            break;
        
        case "/":
            commit();
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
    if(screenNum || screenNum === 0){
        let str = screenNum.toString();
        let str2 = str.slice(0, -1);
        // Number("") evaluates to 0
        screenNum = Number(str2);
    }
}

function commit(){
    if(bufferOp && (screenNum || screenNum === 0) && (bufferNum || bufferNum === 0)){
        answer = bufferOp(bufferNum, screenNum);
        if(answer==Infinity){answer = NaN}
        reset();
        screenNum = answer;
    }
}
