let display = document.querySelector(".display");
let btnParent = document.querySelector(".calculator")
let equals = document.querySelector(".equals")
let clear = document.querySelector(".clear")
let button = document.querySelectorAll(".btn")

var magicalBox = []
var answerBox = []



for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", getUserInput);

}

function getUserInput(event) {
  let buttonValue = event.target.value;
  display.value += buttonValue
  if(buttonValue !== ""){
  magicalBox.push(buttonValue)
  console.log(magicalBox)
  }
}

function doMath(){

  if (magicalBox.includes('+')){
    let startingIndex = magicalBox.indexOf('+');
    var thisSolution = (magicalBox[startingIndex -1] + magicalBox[startingIndex +1]);
    display.value = thisSolution;
    magicalBox.splice(0,3, thisSolution);
    console.log(thisSolution);
    console.log(magicalBox);
  }else if (magicalBox.includes('-')){
    let startingIndex = magicalBox.indexOf('-');
    var thisSolution = (magicalBox[startingIndex -1] - magicalBox[startingIndex +1]);
    display.value = thisSolution;
    magicalBox.splice(0,3, thisSolution)
    console.log(thisSolution);
  }else if (magicalBox.includes('*')){
    let startingIndex = magicalBox.indexOf('*');
    var thisSolution = (magicalBox[startingIndex -1] * magicalBox[startingIndex +1]);
    display.value = thisSolution;
    magicalBox.splice(0,3, thisSolution)
    console.log(thisSolution);
  }else if (magicalBox.includes('/')){
    let startingIndex = magicalBox.indexOf('/');
    var thisSolution = (magicalBox[startingIndex -1] / magicalBox[startingIndex +1]);
    display.value = thisSolution;
    magicalBox.splice(0,3, thisSolution)
    console.log(thisSolution);
  }
}

function getSolution() {
  for(i = 0; i<magicalBox.length; i++){
    if (magicalBox[i] !== "+" && magicalBox[i] !== "-" && magicalBox[i] !== "*" && magicalBox[i] !== "/" && magicalBox[i] !== "." ){
      magicalBox[i] = parseInt(magicalBox[i])

    }

  }
  // for(i = 0; i<magicalBox.length; i++){
    console.log(magicalBox)
    doMath();
  // }


}



function clearScreen() {
  display.value = "";
  magicalBox =[]

}


equals.addEventListener("click", getSolution);
clear.addEventListener("click", clearScreen);
