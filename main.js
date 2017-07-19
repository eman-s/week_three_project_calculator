
let display = document.querySelector(".display");

let btnParent = document.querySelector(".calculator")





  btnParent.addEventListener('click', function(e){
    var magicalBox = []
    let buttonValue = e.target.value;
    
    display.value += buttonValue;
    magicalBox.push(buttonValue);
    console.log(magicalBox);






  });
