function locate(array, target) {
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
}

module.exports = locate;
