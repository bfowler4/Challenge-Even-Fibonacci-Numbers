/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  let nums = getFibonacciNumbers(maxFibValue);

  nums.forEach((curr) => {
    if (curr % 2 === 0) {
      sum += curr;
    }
  });
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  return getFibonacciNumbers(maxFibValue).pop();
}

function getFibonacciNumbers(maxValue) {
  let result = [1, 2];
  while (true) {
    let numToAdd = result[result.length - 1] + result[result.length - 2];
    if (numToAdd <= maxValue) {
      result.push(numToAdd);
    } else {
      break;
    }
  }
  return result;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};