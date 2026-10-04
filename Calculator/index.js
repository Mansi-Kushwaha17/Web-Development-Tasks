let contain = document.getElementsByClassName("container");
let buttons = document.querySelectorAll("button");
let input_no=document.querySelector("#input_number");

//  every function perform on button so...
let currentNumber = ""; // to store number like 234
let operator = "";
let secondNumber = "";
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(btn.textContent);
    //  console.log(event.target.textContent);
    let value = btn.textContent;
    if (!Number.isNaN(Number(value))||value===".") // it check "7"--> 7--> NaN Nahi h --> true
    {
      if (operator === "") {
        currentNumber += value;
        input_no.value=currentNumber;
         
        
      } else {
        secondNumber += value;
      input_no.value=secondNumber;//.value is a property of the HTML <input> element. to read the value of input 
        
      }
    }
     else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%"
    ) {
      
       operator=value;
    //    input_no.value=operator;
        let display = currentNumber + operator + secondNumber;
       input_no.value = display;

    }
    else if (value === "=") {
           if (operator === "+") {
        let answer = Number(currentNumber) + Number(secondNumber);
        input_no.value = answer;
        currentNumber = "";
        operator = "";
         secondNumber = "";  
         }
          else if(operator === "-"){
        let answer = Number(currentNumber) - Number(secondNumber);
        input_no.value = answer;

             currentNumber = "";
             operator = "";
             secondNumber = ""; 

              }
           else if(operator === "*"){
               let answer = Number(currentNumber) * Number(secondNumber);
               input_no.value = answer;
                 currentNumber = "";
                 operator = "";
                 secondNumber = "";
           }
           else if(operator === "/"){
               let answer = Number(currentNumber) / Number(secondNumber);
               input_no.value = answer;
               currentNumber = "";
                operator = "";
                secondNumber = "";
                 }
           else if(operator === "%"){
               let answer = Number(currentNumber) % Number(secondNumber);
               input_no.value = answer;
               currentNumber = "";
            operator = "";
            secondNumber = "";
                       }
    }
    else if(value==='AC'){

       currentNumber = "";
       operator = "";
       secondNumber = "";
       input_no.value = "";
    }

    else if(value==="DE"){
        if(operator===""){
            currentNumber=currentNumber.slice(0,currentNumber.length-1);
            input_no.value=currentNumber;
        }
        else{
            secondNumber=secondNumber.slice(0,secondNumber.length-1);
            input_no.value=secondNumber;
        }

    }
     else {
      console.log("not a operator");
    }
  });
});
