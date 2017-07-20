let display = document.querySelector(".display");
let btnParent = document.querySelector(".calculator")
let equals = document.querySelector(".equals")
let clear = document.querySelector(".clear")


  btnParent.addEventListener('click', function(e){
        var magicalBox = []
        let buttonValue = e.target.value;

          display.value += buttonValue;
          magicalBox.push(display.value);
          console.log(magicalBox);
          let magicalString = magicalBox.toString();
          console.log(magicalString);

          function getSolution(){
          let magicalSolution = eval(magicalString);
          console.log(magicalSolution);
          display.value = magicalSolution;
          }
          function clearScreen(){
              display.value = "";
          }

          equals.addEventListener("click", getSolution);
          clear.addEventListener("click", clearScreen);
  });
