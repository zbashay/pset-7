function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if (a.length < 1 || b.length < 1) {
      return false;
    }

    if (a[0] === b[0] || (a.pop() === b.pop())) {
      return true;

    } else {
      return false;

    }
}

function endsMeet(values, n) {
  let empty = [];
  let array = [];
  if (!values || values.length < n || n < 0) {
    return array;
  }
  for (i = 0; i < n; i++) {
    array.push(values[i]);
  }
  for (z = values.length - n; z < values.length; z++) {
    array.push(values[z])
  }
  if (n === 0) {
    return empty;
  }
  return array
}

function difference(numbers) {
  let diff = 0;
 let la = 0;
 let sm = 0;
 let count = 0;
 if (!numbers || numbers.length <= 0) {
   diff = undefined
   return diff;
 }
 if (numbers.some(isNaN)) {
   return undefined;
   count = 1
 }
 if (count != 1) {
   let y = Number.MIN_SAFE_INTEGER
   for (z = 0; z < numbers.length; z++) {
     if (numbers[z] > y) {
       y = numbers[z];
       la = numbers[z];
     }
   }
   if (count != 1) {
     let v = Number.MAX_SAFE_INTEGER
     for (x = 0; x < numbers.length; x++) {
       if (numbers[x] < v) {
         v = numbers[x];
         sm = numbers[x];
       }
     }
     diff = la - sm;
     return diff;
   }
 }
}

function max(number) {
  if (!number || number.length < 3 || number.length % 2 == 0) {
    return undefined;
  }
  if (number.some(isNaN)) {
    return undefined;
  }
  let fi = number[0]
  let la = number[number.length-1]
  let mi = number[((number.length/2)-1) + 0.5]
  if ((fi > la) && (fi > mi)) {
    return fi;
  }
  else if ((mi > la) && (mi > fi)) {
    return mi;
  }
  else if ((la > fi) && (la > mi)) {
    return la;
  }
  else {
    return fi;
  }
}



function middle(values) {
  let array = []
  if (!values || values.length < 3 || values.length % 2 == 0) {
    return [];
  }
  let index = (values.length/2)-1 + 0.5
  let two_mi = values[index]
  let one_mi = values[index - 1]
  let three_mi = values[index + 1]
  array.push(one_mi);
  array.push(two_mi);
  array.push(three_mi);
  return array
  }

function increasing(numbers) {
  let tmp = numbers;
    if (!tmp || tmp.length < 3) {
      return false;
    }
    if (tmp.some(isNaN)) {
      return false;
    }
    for (i = 0; i < tmp.length; i++) {
      if (tmp[i] % 1 != 0) {
        return false;
      }
    }
    let count = 0
    let one_la = -1
    for (x = 0; x < tmp.length; x++) {
      if (tmp[x] == one_last + 1) {
        one_la = tmp[x]
        if (tmp[x+1] == one_la + 1) {
          return true
          count = 1
          break;
        }
        else {
        one_last = -1
      }
        }
      else {
        one_last = tmp[x]
      }
    }
    if (count == 0) {
      return false;
    }
  }

function everywhere(values, x) {
  if (values == undefined || x === undefined) {
    return false;
  }
  else if (values.length < 1) {
    return false;
  }
  else if (!values.includes(x)) {
    return false;
  }
  else {
    for (let i = values.indexOf(x); i < values.length; i++) {
      if (values[i] === values[i + 1] && values[i + 1] !== undefined) {
        return true;
        break;
      }
      else if (x === 0) {
        return false;
        break;
      }
      else if (values[i] === values[i + 2] && values[i + 2] !== undefined && values[i + 1] !== values[i]) {
        return true;
        break;
      }
        else if (values[i] === values[i + 3] && values[i + 3] !== undefined && (values[i + 1] && values[i + 2]) !== values[i + 3]) {
        return true;
        break;
      }
      else {
        return false;
        break;
      }
    }
  }
}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3) {
    return false;
  }
  for (let i = 0; i < numbers.length - 2; i++ ) {
    let index = numbers[i];
    let index_2 = numbers[i + 1];
    let index_3 = numbers[i + 2];
    if (Number.isInteger(index) == false || Number.isInteger(index_2) == false || Number.isInteger(index_3) == false ) {
      return false;
    }
    if (index % 2 == 0 && index_2 % 2 == 0 && index_3 % 2 == 0) {
      return true;
    }
    else if (index % 2 == 1 && index_2 % 2 == 1 && index_3 % 2 == 1) {
      return true;
    }
  }
  return false;
}

function balance(numbers) {
  let size = 0
  let sum1 = 0
  let sum2 = 0
  let count = 0
  if (!numbers || numbers.length < 2) {
    return false;
  }
  for (i = 0; i < numbers.length; i++) {
    if (!(Number.isInteger(numbers[i]))) {
      return false;
    }
  }
  for (z = 0; z < numbers.length; z++) {
    if (numbers[z] == undefined) {
      return true;
    }
  }
  for (x = numbers.length; x > -1; x--) {
    sum1 = 0
    sum2 = 0
    for(y = numbers.length - x; y > -1; y--) {
      sum1 = sum1 + numbers[y]
    }
    for(a = numbers.length - 1; a > numbers.length - x; a--) {
      sum2 = sum2 + numbers[a]
    }
    if (sum2 == sum1) {
      count = 1
      return true;
    }
  }
  if (count == 0) {
    return false;
  }
}

function clumps(values) {
  if (!values) {
    return -1;
  }
  if (values.length < 2) {
    return 0;
  }
  let last = values[0];
  let current;
  let clump = 0
  let count = 0
  let count2 = 0
  for (x = 1; x < values.length; x++) {
    current = values[x]
    if (last === current) {
      clump = clump + 1
      for (y = x; y < values.length; y++) {
        last = current
        current = values[y]
        if (!(last === current)) {
          count = 1
          x = y
          break;
        }
        else {
          count = -1
        }
      }
    }
    if (count == -1) {
      break;
    }
    last = current
  }
  return clump;
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
