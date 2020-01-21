function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  if (a[0] === b[0] || (a[a.length-1] === b[b.length-1])) {
    return true;
  }
  return false;
}

function endsMeet(values, n) {
  let newArray = [];

  if (!values || values.length < n || !Number.isInteger(n)) {
    return newArray;
  } else {
      if (n === 0) {
        return values;
  } else {
      for (let i = 0; i < n; i++) {
        if (!(values[i] === undefined)) {
          newArray.push(values[i]);
          }
        }
      for (let i = n; i > 0; i--) {
        if (!(values[values.length - i] === undefined)) {
          newArray.push(values[values.length-i]);
        }
      }
      return newArray;
    }
  }
}

function difference(numbers) {
  let largestValue = Number(Math.max.apply(null,numbers));
  let smallestValue = Number(Math.min.apply(null,numbers));

  if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {
      let difference = largestValue - smallestValue
        return difference;
  }
}

function max(number) {
  if (!number || number.length < 3 || number.length % 2 === 0 || number.some(isNaN)) {
    return undefined;
  } else {
      let newArray = [];

      let first = number[0];
      let middle = number[Math.floor(number.length/2)];
      let last = number[number.length - 1];
        newArray.push(first, middle, last);

      let largestValue = Number(Math.max.apply(null, newArray));
        return largestValue;
  }
}

function middle(values) {
  if (!values || values.length === 0 || values.length < 3 || values.length % 2 === 0) {
    return [];
  } else {
    let newArray = [];

    let middle = Math.floor(values.length/2);
        newArray.push(values[middle - 1], values[middle]);
          return newArray;
  }
}

function increasing(numbers) {
  if (!numbers || numbers.length < 3 || numbers.some(isNaN) || Number.isInteger(numbers)) {
    return undefined;
  } else{
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < numbers[i + 1] && numbers[i + 1] < numbers[i + 2]) {
        return true;
        break;
      }
    }
  }
  return false;
}

function everywhere(values, x) {
  let flag = 1

  if (!values || values.length < 1 || !x) {
    return false;
  } else {
      for (let i = 0; i < values.length; i++) {
        if (!(values[i] === x)) {
          if (values[i + 1] === x || values[i - 1] === x) {
            flag = false;
  } else {
      return false;
      }
    }
  }
}
    return true;
}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3 || numbers.some(isNaN) || Number.isInteger(numbers)) {
    return false;
  } else {
    for (let i = 1; i < numbers.length; i++) {
      if (numbers [i - 1] % 2 === 1 && numbers [i] % 2 === 1 && numbers[i + 1] % 2 === 1) {
        return true;
    } else if (numbers[i - 1] % 2 === 0 && numbers [i] % 2 === 0 && numbers[i + 1] % 2 === 0)
        return true;
      }
    }
    return false;
  }

function balance(numbers) {
  let flag;
  let sumOne = 0;
  let sumTwo;
  let sumThree = 0;
  if (!numbers || numbers.length < 2 || numbers.some(isNaN)) {
    flag = false;
    return false;
  } else {
      for (let i = 0; i < numbers.length - 1; i++) {
        if (Number.isInteger(numbers[i]) === false) {
          flag = false;
          return false;
        }
      }
      for (let j = 0; j < numbers.length; j++) {
        sumOne += numbers[j];
      }
      sumTwo = sumOne / 2;

      if (sumOne % 2 === 1) {
        flag = false;
        return false;
      }
      for (let k = 0; k < numbers.length - 1; k++) {
        sumThree += numbers[k];
        if (sumThree === sumTwo) {
          flag = true;
          return true;
        }
      }
      if (flag === true) {
        return true;
      } else {
        return false;
      }
  }

}

function clumps(values) {
  let clump = 0;
  let clumpLastIndex;
  let val;
  let same;
  if (!values) {
    return -1;
  } else {
    for (let i = 0; i < values.length - 1; i++) {
      let runOne = i;
      let runTwo = i + 1;

      val = values[runOne];
      same = values[runTwo];

      if (val === same) {
        while (val === same) {
          val = values[runOne++];
          same = values[runTwo++];
        }
        clump++;
        clumpLastIndex = runOne - 1;
        i = clumpLastIndex;
      }
    }
    return clump;
  }
}

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
