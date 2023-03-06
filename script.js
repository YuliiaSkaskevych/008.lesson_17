//task 1
const mixedArray = [2, 'a', 'qwe', null, 45, 0, -4.2, {'1': 2}, '2'];
let averageValueArray = (array) => {
    let newArray = array.filter(function(item){
        return typeof item === 'number';
    });
    const sumArray = newArray.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
    return `Average value: ${sumArray / newArray.length}`;
}
alert(averageValueArray(mixedArray));

//task 2
let x, znak, y;
x = +prompt('Please enter number 1:', '5');
znak = prompt("Choose one of these operations: +, -, *, /, %, ^", '+');
while(znak !== "+" &&
znak !=="-" &&
znak !=="*" &&
znak !=="/" &&
znak !=="%" &&
znak !=="^") {
    alert("You entered wrong operation! Please choose one of these operations: +, -, *, /, %, ^");
    znak = prompt("Choose one of these operations: +, -, *, /, %, ^", '+');
}
y = +prompt('Please enter number 2:', '10');
let doMath = (x, znak, y) =>{
    switch (znak) {
        case "+":
            return `${x}+${y}=${x+y}`;
        case "-":
            return `${x}-${y}=${x-y}`;
        case "*":
            return `${x}*${y}=${x*y}`;
        case "/":
            return `${x}/${y}=${x/y}`;
        case "%":
            return `${x}%${y}=${x%y}`;
        case "^":
            return `${x}^${y}=${x**y}`;
}}
alert(doMath(x, znak, y));

//task 3
let createDoubleArray = () => {
    let mainArray = [];
    let count1 = +prompt("Enter the count of values in first array: ");
    for(let i = 0; i < count1; i++) {
        mainArray.push([]);
        let count2 = prompt("Enter the count of elements: " + (i + 1));
        for(let j = 0; j < count2; j++) {
            let elem = prompt("Enter text: " + (j + 1));
            mainArray[i].push(elem);
        }
    }
    return mainArray
}
alert(createDoubleArray())

// task 4
let strUser = prompt('Enter your string:', 'hello world');
let symbolsUser = prompt('Enter deleted symbols:', 'l d');
const symbols = symbolsUser.split(' ');
let deleteFromString = (string = "", symbols) => {
    let newString = [];
    for (let symbol of string.split("")) {
        if (!symbols.includes(symbol)) {
            newString.push(symbol);
        }
    }
    return newString.join("");
}
let newText = deleteFromString(strUser, symbols);
alert(`New string: ${newText}`);