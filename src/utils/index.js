/**
 * @prop {string} input: the input of the user.
 * @return {number} The sum of input in a single digit.
 */
export function createSum(input) {
    let sumOfInput = calculate(input);
    while (parseInt(sumOfInput) > 9) sumOfInput = calculate(sumOfInput);
    
    return sumOfInput;
  }
  
function calculate(input) {
    return input.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
}