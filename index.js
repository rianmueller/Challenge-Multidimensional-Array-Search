function locate(array, target) {
  // basic some method
  // function checkValue(element) {
  //   return element === target;
  // }
  // console.log(
  //   array.some(function(element) {
  //     return element === target;
  //   })
  // );

  // function iterator(element, target) {
  //   if (element === target) {
  //     return true;
  //   }
  //   if (Array.isArray(element) === true) {
  //     for (let i = 0; i < element.length; i++) {
  //       return locate(array[i], target);
  //     }
  //   }
  // }
  // array.some(iterator(element, target));

  // flatten the array
  // array = [ "a", "b", [ "c", [ "d" ], [ "e" ]]];
  let flattenedArray = [];

  function iterator(arrayElement) {
    if (Array.isArray(arrayElement) === false) {
      flattenedArray.push(arrayElement);
    }
    if (Array.isArray(arrayElement) === true) {
      for (let i = 0; i < arrayElement.length; i++) {
        iterator(arrayElement[i]);
      }
    }
  }

  array.forEach(function(element) {
    iterator(element);
  });

  return flattenedArray.some(function(element) {
    return element === target;
  });

  // let solution = false;
  // for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  //   if (array[i] === target) {
  //     solution = true;
  //   }
  //   if (Array.isArray(array[i]) === true) {
  //     console.log(locate(array[i], target));
  //     locate(array[i], target);
  //   }
  // }
  // return solution;

  // function factorial(x) {
  //   // TERMINATION
  //   if (x < 0) return;
  //   // BASE
  //   if (x === 0) return 1;
  //   // RECURSION
  //   return x * factorial(x - 1);
  // }
  // factorial(3);
  // // 6

  // function revStr(str){
  //   if (str === '') return '';
  //   return revStr(str.substr(1)) + str[0];
  // }
  // revStr('cat');
  // tac
}

module.exports = locate;
