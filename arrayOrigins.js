const week3Array = [2, 5, 7, 4, 8, 9, 6, 12, 45, 9];

//1. write a js function to get the first element of an array. like shift()

// function getFirstElement(arr) {
//   //console.log(0); // gives back index of array. duh
//   console.log(arr[0]); // gives back first element
// }

// // getFirstElement(week3Array);

// //2. write js function to get last element of array

// function getLastElement(arr) {
//   console.log(arr[arr.length - 1]); // gives back last element
// }

// getLastElement(week3Array);

//3. write a js function to get a given element of an array with the index passed as a parameter

// function getAnyElement(arr, index) {
//   console.log(arr[index]); // gives back specified element by index
// }

// getAnyElement(week3Array, 4);

//4. write a js function to get the index of an element in an array where it's element
// matches a value passed as a a paramter

function getIndexOfElement(arr, arrValue) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arrValue) {
      // looping through array indeces
      console.log(i);
    }
  }
}

//Todds method...

function toddIndexOfElement(arr, Element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Element) {
      //looping through array values.
      return i;
    }
  }
}

console.log(toddIndexOfElement(week3Array, 45));
