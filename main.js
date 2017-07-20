let display = document.querySelector(".display");
let btnParent = document.querySelector(".calculator")
let equals = document.querySelector(".equals")
let clear = document.querySelector(".clear")
let button = document.querySelectorAll(".btn")

var magicalBox = []
var numbers =[]

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", getUserInput);
}

function getUserInput(event) {
  let buttonValue = event.target.value;
  display.value += buttonValue;
}

function getSolution() {
    magicalBox.push(display.value);
    // console.log(magicalBox);
    let magicalString = magicalBox.toString();
    // console.log(magicalString);
    let stringyArray = magicalString.split("");
    // console.log(stringyArray)
  for(i = 0; i < stringyArray.length; i++){
    if (stringyArray[i] !== "+" && stringyArray[i] !== "-" && stringyArray[i] !== "*" && stringyArray[i] !== "/" && stringyArray[i] !== "." ){
      stringyArray[i] = parseInt(stringyArray[i])
      if (stringyArray[i] === "*"]){
        
      }
    }
  }
console.log(stringyArray)
}

function clearScreen() {
  display.value = "";
  magicalBox =[]
  numbers =[]

}

equals.addEventListener("click", getSolution);
clear.addEventListener("click", clearScreen);
