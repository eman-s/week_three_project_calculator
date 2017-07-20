
let display = document.querySelector(".display");

let btnParent = document.querySelector(".calculator")





  btnParent.addEventListener('click', function(e){


    if(e.target.value !== "="){
      var magicalBox = []
      let buttonValue = e.target.value;

      display.value += buttonValue;
      magicalBox.push(display.value);
      console.log(magicalBox);
      let magicalString = magicalBox.toString();
      console.log(magicalString);
      let magicalSolution = eval(magicalString);
      console.log(magicalSolution);
    }
    









  });
