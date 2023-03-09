// IMPORT THE MODULE
import * as Utils from "./modules/calculator.js";
//alert(Utils.add());
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let numA = parseInt(prompt("Enter the first Number"));

let numB = parseInt(prompt("Enter the second Number"));

let operation = prompt("add, subtract, multiply, divide.");
// CHECK TO SEE WHAT OPERATION THEY'RE USING
let result;
function calculate() {
  switch (operation) {
    case "add":
      result = Utils.add(numA, numB);
      alert(`${numA} + ${numB} = ${result}`);
      break;
    case "subtract":
      result = Utils.subtract(numA, numB);
      alert(`${numA} - ${numB} = ${result}`);
      break;
    case "multiply":
      result = Utils.multiply(numA, numB);
      alert(`${numA} * ${numB} = ${result}`);
      break;

    case "divide":
      result = Utils.divide(numA, numB);
      alert(`${numA} / ${numB} = ${result}`);

      break;

    default:
      alert("Invalid entries.");
  }
  return;
}

// CALL THE APPROPRIATE FUNCTION
calculate();