$(document).ready(function(){

    var result = '0';
    var operation = null;
    var prevEntry = '0';
    var sign = '0';
    updateScreen(result);

    $(".btn").click(function(){
        var buttonPressed = $(this).html();
        console.log("buttonpassed");

        if (buttonPressed === "ac") {
            $(".calc-screen p").html("0");
            sign = "0";

        }
        else if (buttonPressed === "+/-") {
            sign *= -1;
            console.log(sign);
        }
        else if(buttonPressed === ".") {
            sign += ".";
            console.log(sign);
        }
        else if(isNumber(buttonPressed)) {
            if(sign === "0") sign = buttonPressed;
            else sign = sign +buttonPressed;    
        }
        else if(isOperator(buttonPressed)) {
            prevEntry = parseFloat(sign);
            operation = buttonPressed;
            sign = " ";
        }
        else if(buttonPressed === "%") {
            sign = sign / 100;
        }
        else if(buttonPressed === "=") {
            sign = operate(prevEntry, sign, operation);
            operation = null;
        }


        updateScreen(sign);
    });
});

updateScreen = function(displayValue) {
    var displayValue = displayValue.toString();
    $(".calc-screen p").html(displayValue.substring(0, 10));
}

isNumber = function(value) {
    return !isNaN(value);
};
    
isOperator = function(value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
};

operate = function(a, b, operation){
    console.log(a, b, operation);
    if (operation === "+") return a + b;
    if (operation === "-") return a - b;
    if (operation === "X") return a * b;
    if (operation === "/") return a / b;
};