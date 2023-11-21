let inputNumber = Number(prompt('Enter a number: '));
let n = 55;
let message;
if (inputNumber > n){
    message = 'Your number is greater than my dynamic number';
}
else if (inputNumber<n){
    message = 'Your number is less than my dynamic number';
}
else {
    message= "Your number is my dynamic number";
}
alert(message);