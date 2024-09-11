const display = document.getElementById("displaynumber1");



function calculatei(){
 display.value = eval(display.value);
}

function appendToDisplay(input){
    display.value += input;
}

function cleareverything(){
    display.value = "";
}
