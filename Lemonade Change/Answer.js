/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let change = {
    5: 0,
    10: 0,
    20: 0
  };
  let totalChange = 0;
  for (let i = 0; i < bills.length; i++) {
    change[bills[i]] += 1;
    totalChange += bills[i];
    let expectedChange = bills[i] - 5;

    if (provideChange(expectedChange, change, totalChange)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

function provideChange(num, change, totalChange) {
  if (totalChange < num) {
    return false;
  }
  if (totalChange === 0 && num > 0) {
    return false;
  }
  if (num === 0) {
    return true;
  }

  if (change[20] > 0 && num - 20 >= 0) {
    num -= 20;
    change[20] -= 1;
    totalChange -= 20;
  } else if (change[10] > 0 && num - 10 >= 0) {
    num -= 10;
    change[10] -= 1;
    totalChange -= 10;
  } else if (change[5] > 0) {
    num -= 5;
    change[5] -= 1;
    totalChange -= 5;
  } else {
    return false;
  }

  return provideChange(num, change, totalChange);
}
