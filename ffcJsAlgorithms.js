//ZADATAK 1
///////////////////////////////////////////////////////////////
function palindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    console.log(str);
    let newStr = str.split("").reverse().join("");
  
    if(str === newStr) return true;
    return false;
  }
  
  palindrome("_2A3*3a2");

//ZADATAK 2 KAUBOJSKI
////////////////////////////////////////////////////////////////
function numOfMs(num) {
  let str = "";
  let numOfMs = Math.floor(num / 1000);
  for(let i = 0; i < numOfMs;i++){
      str += "M";
  }
   return str;
}

function numOfCs(num) {
  let str = "";
  let numOfCs = Math.floor(num / 100);
  for(let i = 0; i < numOfCs; i++){
      str += "C";
  }
  return str;
}

function numOfXs(num) {
  let str = "";
  let numOfCs = Math.floor(num / 10);
  for(let i = 0; i < numOfCs; i++){
      str += "X";
  }
  return str;
}

function convertToRoman(num) {
  let str = "";
  if(num >= 1000) {
      str = numOfMs(num);
      num = num % 1000;
  }
  if(num >= 500 && num < 1000) {
      if(num >= 900 && num < 1000){
          str += "CM";
          num = num % 100;
      } else {
          str += "D";
          num = num % 500;
      }
  }
  if( num >= 100 && num < 500) {
      if( num >= 400){
          str += "CD";
          num = num % 10;
      }
      else {
          str += numOfCs(num);
          num = num % 100;
      }
  }
  if(num >= 50 && num < 100) {
      if(num >= 90 ) {
          str += "XC";
          num = num % 10;
      }
      else {
          str += "L";
          num = num % 50;
      }
  }
  if(num >= 10 && num < 50) {
      if(num >= 40){
          str += "XL";
          num = num % 10;
      }
      else {
          str += numOfXs(num);
          num = num % 10;
      }
  }
  if(num >= 5 && num < 10) {
      if(num === 9) {
          str += "IX";
      }
      else {
          str += "V";
          num = num % 5;
      }
  }
  if(num >= 1 && num < 5){
      if(num === 4) str += "IV"
      else {
          for(let i = 0; i < num; i++) {str+= "I";}
      }
  }
  console.log(str);
  return str;
}

convertToRoman(3999);

//ZADATAK 2 DOBRO
////////////////////////////////////////////////////////////////////////////
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// test here
convertToRoman(36);

//ZADATAK 3
///////////////////////////////////////////////////////////////////////////////
function rot13(str) {

    str = str.replace(/[A-Z]/g, function(letter){
      
  
      if(letter.charCodeAt() <= 77){
        return String.fromCharCode((letter.charCodeAt() + 13));
      }
      else {
        return String.fromCharCode((letter.charCodeAt()+ 13) % 90 + 64);
      }
    })
    return str;
  }
  
  rot13("SERR PBQR PNZC");

  //ZADATAK 4
  ////////////////////////////////////////////////////////////////////////////
  function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  telephoneCheck("555-555-5555");