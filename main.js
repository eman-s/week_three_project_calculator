
let display = document.querySelector(".display");

let btnParent = document.querySelector(".calculator")

let displayValue= display.value;

btnParent.addEventListener('click', function(e){
    console.log(e.target.value);

});


// btn.addEventListener("click", printToScreen);
// function printToScreen (){
//
//
//   console.log(btnValue);
//
//   }
