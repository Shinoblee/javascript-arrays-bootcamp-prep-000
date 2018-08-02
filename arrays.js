var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  function addElementToBeginningOfArray(array, element) {
    return [element, ...array];
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
    array.unshift(element);
    return array
=======
    return array.unshift(element);
>>>>>>> 9caa8b293d5aacb5f62b9278c2cff013f0369122
  }
  
  function addElementToEndOfArray (array, element) {
    return [...array, element];
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
<<<<<<< HEAD
    return array;
=======
>>>>>>> 9caa8b293d5aacb5f62b9278c2cff013f0369122
  }
  
  function accessElementInArray(array, index) {
    return array[index];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array) {
<<<<<<< HEAD
    array.shift();
    return array;
  }
  
  function removeElementFromBeginningOfArray(array) {
      return array.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
=======
    return array.shift();
  }
  
  function removeElementFromBeginningOfArray(array) {
    return array.slice();
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    return array.pop();
>>>>>>> 9caa8b293d5aacb5f62b9278c2cff013f0369122
  }
  
  function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length -1);
  }
  