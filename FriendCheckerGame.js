let name = prompt('Enter a name: ');
let message;
switch (name){
    case 'Andres':
    case 'Juan Jose':
    case 'Juan David':
    case 'Juan Pablo':
    case 'Gabriel':
        message = 'He is my friend';
        break;
    case 'Valentina':
    case 'Sofia':
    case 'Ana':
        message = 'She is my friend';
        break;
    default:
        messsage = "I don't know that person";
}
console.log(message)