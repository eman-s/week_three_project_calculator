
let display = document.querySelector(".display");
let btn = document.querySelector(".btn");



btn.addEventListener("click", printToScreen);
function printToScreen (){
  let btnValue  = btn.value;
  let displayValue= display.value;

  btnValue.forEach(function(number){
    console.log("the value is: ", number)
  })
}
