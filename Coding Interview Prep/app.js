//UNIJA NIZOVA
// function sym(args) {
//   let myarr = [];
//   let retArr = [];

//   for (let item of arguments) {
//     myarr.push(item);
//   }

//   //manual for first 2 arguments elements
//   retArr = checkForDuplicate(myarr[0], myarr[1]);

//   for (let i = 2; i < myarr.length; i++) {
//     retArr = checkForDuplicate(retArr, myarr[i]);
//   }

//   retArr = [...new Set(retArr)];
//   console.log(retArr);
//   return retArr;
// }

// function checkForDuplicate(arr1, arr2) {
//   let retArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) === -1) {
//       retArr.push(arr1[i]);
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) === -1) {
//       retArr.push(arr2[i]);
//     }
//   }
//   return retArr;
// }
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

//BUBBLE SORT
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let bilaZamjena = 0;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        bilaZamjena = 1;
      }
    }
    if (!bilaZamjena) return array;
  }

  return array;
}

//SELECTION SORT
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[index]) {
        index = j;
      }
    }
    let temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }

  return array;
}

//INSERTION SORT

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    let hole = i;

    while (hole > 0 && array[hole - 1] > value) {
      array[hole] = array[hole - 1];
      hole--;
    }
    array[hole] = value;
  }

  return array;
}

//MERGE SORT
const _mergeArrays = (a, b) => {
  const c = [];

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift());
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift());
  }
  while (b.length) {
    c.push(b.shift());
  }

  return c;
};

const mergeSort = (a) => {
  if (a.length < 2) return a;
  const middle = Math.floor(a.length / 2);
  const a_l = a.slice(0, middle);
  const a_r = a.slice(middle, a.length);
  const sorted_l = mergeSort(a_l);
  const sorted_r = mergeSort(a_r);
  return _mergeArrays(sorted_l, sorted_r);
};

//QUICK SORT

function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSort(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = partition(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}


//INVERTORY UPDATE

function updateInventory(arr1, arr2) {
    const existingItems = [];

    for(let items of arr1) {
      for(let newItems of arr2) {
        if(items[1] === newItems[1]) {
          existingItems.push(newItems);
        }
      }
    }
  
   const newItems = arr2.filter((o) => existingItems.indexOf(o) === -1);

   arr1 = [...arr1, ...newItems];

   arr1 = arr1.map(item => {
     for(let i = 0; i < existingItems.length; i++) {
       if(existingItems[i][1] === item[1]) {
         item[0] = item[0] + existingItems[i][0]
       }
     }
     return item;
   });

   arr1 = arr1.sort((a,b) => {
      return (a[1] < b[1] ? -1 : 1);
   })

   return arr1;
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], 
[[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

