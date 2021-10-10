//ZADATAK 1
//////////////////////////////////////////////////////
function sumAll(arr) {
    arr = arr.sort( (a,b) => a - b);
    
    let sumOf2Num = arr[0] + arr[1];
    let sumOfRange = 0;
  
    for(let i = arr[0] + 1; i < arr[1];i++) {
      sumOfRange += i;
    }
  
    return sumOf2Num + sumOfRange;
  }
  
  sumAll([9, 4]);

//ZADATAK 2
//////////////////////////////////////////////////////
function diffArray(arr1, arr2) {
    let newArr = [];
  
    function onlyInFirst(first, second) {
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//ZADATAK 3
//////////////////////////////////////////////////////
function destroyer(arr) {
    let polje = [...arr];
    
    let destroyArr = [];
  
    for(let i = 1; i < arguments.length;i++) {
      destroyArr.push(arguments[i]);
    }
    
    for(let item of polje) {
      for(let destroy of destroyArr) {
        if(polje.indexOf(destroy) !== -1) {
          polje.splice(polje.indexOf(destroy),1)
        }
      }
    }
    console.log(polje);
    return polje;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//ZADATAK 4
/////////////////////////////////////////////////////////
function whatIsInAName(collection, source) {
    
    let srcKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {
      for (let i = 0; i < srcKeys.length; i++) {
        if (
          !obj.hasOwnProperty(srcKeys[i]) ||
          obj[srcKeys[i]] !== source[srcKeys[i]]
        ) {
          return false;
        }
      }
      return true;
    });
}
  
  // test here
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  );

//ZADATAK 5
/////////////////////////////////////////////////////////
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}
  
  // test here
  spinalCase("This Is Spinal Tap");

//ZADATAK 6
/////////////////////////////////////////////////////////
function translatePigLatin(str) {
  
    let index = str.indexOf(str.match(/[aeiou]/));
    
    if(index > 0) {
      let firstpart = str.slice(0,index);
      str =str.slice(index) + firstpart + "ay";
    } 
    else if(index === 0) {
      str = str + "way";
    }
    else {
      str = str + "ay";
    }
    console.log(str);
  
    return str;
}
  
  translatePigLatin("consonant");

  //ZADATAK 7
  ///////////////////////////////////////////////////////
  function myReplace(str, before, after) {
    let indexBefore = str.indexOf(before);
    let beforeLen = before.length;
  
    let indexAfter = str.indexOf(before) + beforeLen;
  
    let beforestr = str.slice(0, indexBefore);
    let afterstr = str.slice(indexAfter);
    console.log(beforestr);
    console.log(afterstr);
  
    if(before[0] === before[0].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1);
    } 
    else if(before[0] === before[0].toLowerCase()) {
      after = after[0].toLowerCase() + after.slice(1);
    }
    
    str = beforestr + after + afterstr;
    console.log(str);
  
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

  //ZADATAK 8
  /////////////////////////////////////////////////////////////////////////////
  function pairElement(str) {
    let basePairs = ["AT","CG"];
    let retArr = [];
  
    for(let i = 0; i < str.length; i++) {
      if(str[i] === "A") retArr.push(["A", "T"]);
      else if(str[i] === "T") retArr.push(["T","A"]);
      else if(str[i] === "C") retArr.push(["C","G"]);
      else retArr.push(["G","C"]);
    }
    console.log(retArr);
    return retArr;
  }
  
  pairElement("GCG");

  //ZADATAK 9
  /////////////////////////////////////////////////////////////////////////////
  function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let retstr;
    for(let i = 0; i < str.length - 1; i++){
      let nextletter = String.fromCharCode(str[i].charCodeAt()+ 1);
      if(str[i+1] !== nextletter) {
        return nextletter;
      }
    }
  
  }

  //ZADATAK 10
  /////////////////////////////////////////////////////////////////////////////
  function uniteUnique(arr) {
    let returnarr = arguments[0];
    
    for(let i = 1; i < arguments.length; i++) {
      for(let j = 0; j < arguments[i].length; j++) {
        if(returnarr.indexOf(arguments[i][j]) === -1) {
          returnarr.push(arguments[i][j]);
        }
      }
    }
  
    return returnarr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  //ZADATAK 11
  ////////////////////////////////////////////////////////////////////////////
  function convertHTML(str) {
    let encodedStr = str.replace(/[<>"'&]/g, function(i) {
     if(i === "&") return "&amp;";
     else if (i === '"') return "&quot;";
     else if (i === "'") return "&apos;";
     else if(i === ">") return "&gt;";
     else return "&lt;"
    }
     );
  
     return encodedStr;
  }
  
  convertHTML("Dolce & Gabbana");
  
  console.log(fearNotLetter("abce"));
  //ZADATAK 12
  ////////////////////////////////////////////////////////////////////////////
  function fibb(num) {
    let arr = [1,1];
    let i = 0;
  
    while(arr[++i] < num) {
      if(arr[i] + arr[i - 1] <= num) {
        arr.push(arr[i] + arr[i -1]);
      }
    }
    return arr;
  }
  
  
  function sumFibs(num) {
    let arr = fibb(num);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2) sum += arr[i];
    }
    return sum;
  }
  
  sumFibs(4);

  //ZADATAK 13
  ////////////////////////////////////////////////////////////////////////////
  function isPrime(num) {
    if(num < 2) return false;
    for(let i = 2; i <= num / 2; i++){
      if(num % i === 0) return false;
    }
    return true;
  }
  
  
  function sumPrimes(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
      if(isPrime(i)) {
        sum+= i;
      }
    }
    return sum;
  }
  
  console.log(sumPrimes(10));

  //ZADATAK 15
  ///////////////////////////////////////////////////////////////////////////
  function dropElements(arr, func) {
    let check = false;
    for(let i = 0; i < arr.length; i++) {
      if(func(arr[i])){
        if(i === 0){
          return arr;
        }
        arr = arr.slice(i);
        return arr;
      }
    }
    console.log(arr);
    return [];
   
  }

  //ZADATAK 16
  //////////////////////////////////////////////////////////////////////////
  function steamrollArray(arr) {
    function poravnaj(niz, rezultat) {
      for(let item of niz) {
        if(Array.isArray(item)) {
          poravnaj(item, rezultat);
        }
        else {
          rezultat.push(item);
        }
      }
      return rezultat;
    }
    return poravnaj(arr, []);
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

  //ZADATAK 17
  //////////////////////////////////////////////////////////////////////////
  function binaryAgent(str) {
    let arr = str.split(" ");
  
    arr = arr.map(item => String.fromCharCode(parseInt(item,2)));
    //console.log(arr);
    str = arr.join("");
    return str;
  }

  //ZADATAK 18
  /////////////////////////////////////////////////////////////////////////////
  function truthCheck(collection, pre) {
    for(let object of collection){
      if(!object.hasOwnProperty(pre)){
        return false;
      }
      if(!object[pre]){
          return false;
        }
    }
    return true;
  }
  
  console.log(truthCheck([{"single": "yes"}], "single"));

  //ZADATAK 19
  ////////////////////////////////////////////////////////////////////////////
  function addTogether(first, second) {
    if (typeof first !== "number") {
      return undefined;
    }
    const sum = second =>
      typeof second === "number" ? first + second : undefined;
    return typeof second === "undefined" ? second => sum(second) : sum(second);
  }
 
  addTogether(2, 3);

  //ZADATAK 20
  //////////////////////////////////////////////////////////////////////////////
  let Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
  
    this.getFirstName = function() {
      if(firstAndLast.indexOf(" ") === -1){
        return firstAndLast;
      } else {
        return firstAndLast.slice(0, firstAndLast.indexOf(" "));
      }
    }
  
    this.getLastName = function() {
      if(firstAndLast.indexOf(" ") === -1){
        return firstAndLast;
      } else {
        return firstAndLast.slice(firstAndLast.indexOf(" ") + 1);
      }
    }
  
    this.setFullName = function(newFull){
      firstAndLast = newFull;
    }
  
    this.setLastName = function(last){
      let str = this.getFirstName() + " " + last;
      firstAndLast = str;
    }
  
    this.setFirstName = function(first) {
      let str = first + " " + this.getLastName();
      firstAndLast = str;
    }
    
  };
  
  let bob = new Person('Bob Ross');

  
// ZADATAK 21
/////////////////////////////////////////////////////////////
function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;

  for(let item of arr ){
    let avgAlt = item.avgAlt;
    let oP = Math.round(2 * Math.PI * Math.sqrt(((earthRadius + avgAlt) ** 3) / GM));
    
    delete item.avgAlt;
    item.orbitalPeriod = oP;
  }

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);  
  