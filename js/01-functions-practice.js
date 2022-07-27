//STEP 1
function halfNumber(num) {
  newNum = num / 2;
  console.log(`Half of ${num} is ${newNum}`);
  return;
}
halfNumber(5);

//STEP 2
function squareNumber(num) {
  newNum = num ** 2;
  console.log(`The result of squaring the number ${num} is ${newNum}.`);
  return;
}
squareNumber(3);
//STEP 3
function percentOf(num, numof) {
  newNum = (num / numof) * 100;
  console.log(`${num} is ${newNum.toFixed(2)}% of ${numof}.`);
  return;
}
percentOf(5, 6);

//STEP 4

function findModulus(num, numof) {
  newNum = num % numof;
  console.log(`${newNum} is the modulus of ${num} and ${numof}`);
  return;
}
findModulus(4, 10);

//STEP 5
