
let display = document.querySelector(".display");

let btnParent = document.querySelector(".calculator")


btnParent.addEventListener('click', function(e){
    let buttonValue = e.target.innerHTML;
    
    console.log(buttonValue);
    display.value += buttonValue;
    if(buttonValue === "C"){
      display.value = ""
    }


});


// btn.addEventListener("click", printToScreen);
// function printToScreen (){
//
//
//   console.log(btnValue);
//
//   }
