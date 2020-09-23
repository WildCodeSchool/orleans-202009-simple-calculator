const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function(event){
    let firstValue = document.getElementById('firstValue').value;
    const operator = document.getElementById('operand').value;
    let secondValue = document.getElementById('secondValue').value;

    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    
    let result = document.getElementById('result');

    switch (operator) {
        case "+":
            operationResult = firstValue + secondValue;
            break;
        case "-":
            operationResult = firstValue - secondValue;
            break;
        case "*":
            operationResult = firstValue * secondValue;
            break;
        case "/":
            if(secondValue === 0) {
                operationResult = 'Division by zero impossible'
            } else {
                operationResult = firstValue / secondValue;
            }
            break;
        default:
            operationResult = "Invalid Operator";
            break;
    }   
    
    result.innerHTML = '=' + operationResult;

});


