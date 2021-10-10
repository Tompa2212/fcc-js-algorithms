// function reverseString(str) {
//     let novistr = '';
//     for(let i = str.length - 1; i >= 0;i--){
//       novistr += str[i];
//     }
//     console.log(novistr);
//     return novistr;
//   }

//----------------------------------------------------------------------------------------
  
//   reverseString("hello");


//   function reverseString(str) {
//     str = str.split("").reverse().join("");

//     console.log(str);
//     return str;
//   }
  
//   reverseString("hello");

//----------------------------------------------------------------------------------------

// function findLongestWordLength(str) {
//     str = str.split(" ");
//     console.log(str);

//     let len = str[0].length;
//     str.forEach(function(element){
//         if(element.length > len){
//             len = element.length;
//         }
//     });

//     console.log(len);
//     return len;
//   }
  
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");

//---------------------------------------------------------------------------------------

// function largestOfFour(arr) {
//     let polje = [];

//     for(let i = 0; i < arr.length;i++){
//         let maxi = arr[i][0];
//         for(let j = 0; j < arr[i].length;j++){
//             if(arr[i][j] > maxi) maxi = arr[i][j];
//         }
//         polje.push(maxi);
//     }
//     console.log(polje);
//     return polje;
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//-------------------------------------------------------------------------------------------

// function truncateString(str, num) {
    
//     if(str.length > num){
//         return str.substring(0, num) + "...";
//     }
//     else return str;

//   }
  
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);

//-----------------------------------------------------------------------------------------

// function findElement(arr, func) {
//     let num = 0;

//     for(let i = 0; i < arr.length; i++){
//         if(func(arr[i])){
//             num = arr[i];
//             return num;
//         }
//     }
//     return undefined;
//   }
  
//   findElement([1, 2, 3, 4], num => num % 2 === 0);

//-------------------------------------------------------------------------------------------

function titleCase(str) {
    let arr = str.toLowerCase();
    arr = arr.split(" ");
    
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }

    arr = arr.join(" ");
    console.log(arr);

    return arr;
  }
  
  titleCase("I'm a little tea pot");

