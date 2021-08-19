function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin)
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
const number = event.target.innerText ;
const calcInput = document.getElementById('typed-numbers');
if(isNaN(number)){
  if(number == 'C'){
      calcInput.value = '';
  }
}
else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
}
});
// generate pin er value er sathe typed numbers er value  matching check
//  onclick= 'cerifyPin()' use kora hoyeche html e 
function verifyPin(){
   const pin =  document.getElementById('display-pin').value;
const typedNumbers = document.getElementById('typed-numbers').value;

const successMessage = document.getElementById('notify-success');
const failErr = document.getElementById('notify-fail');
if(pin == typedNumbers){
// style.css e .notify e display: none kora hoyeche
 successMessage.style.display = 'block';  
 failErr.style.display = 'none'; 
}
else{
    failErr.style.display = 'block';  
    successMessage.style.display = 'none'; 
}
}