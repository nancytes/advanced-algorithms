// Question 1
// Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

//1: done

//2: done

// 3:
//   - Create a function that takes a single argument which is array
//   - Check if the input is an array. If not say "enter an array only"
//   - Create an empty array called 'evenArr' to store the even numbers that meet the criteria
//   - Iterate the array using a loop
//     - Check if the current index is even and if the element at that index is even
//     - If both conditions are true add the element to the 'evenArr' array
//   - Check if the array elements are number or not
//   - Return the 'evenArr' array.

//4
// function getOnlyEvens(arr) {
//   if (Array.isArray(arr)) {
//     let evenArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === "number") {
//         if (i % 2 === 0 && arr[i] % 2 === 0) {
//           evenArr.push(arr[i]);
//         }
//       } else {
//         return "please just enter only a number.";
//       }
//     }
//     return evenArr;
//   } else {
//     return "It's not an array please provide with an arry.";
//   }
// }
// console.log(getOnlyEvens([1, 2, 3, 6, 4, 8]));
// console.log(getOnlyEvens([0, 1, 2, 3, 4]));

//Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32
// 1. done
// 2. done
// 3. - create a function which takes an argument
//    - check if the passed argument is Number
//    - reversed the passed number
//    - check if the passed argument (number) is greater than that of the the reversed number
//    - return

// 4.
// function reverseCompare(num) {
//   if (typeof num === "number") {
//     let numToString = num.toString();
//     if (numToString.length == 2) {
//       let result = parseInt(numToString.split("").reverse("").join(""));

//       if (num > result) {
//         return "ok";
//       } else return "not ok";
//     }
//   } else {
//     return "please enter only a number";
//   }
// }
// console.log(reverseCompare(23));
// console.log(reverseCompare(72));

//or
// function reverseCompare(number) {
//     var tensDigit = Math.floor(number / 10);
//     var onesDigit = number % 10;
//     var reversedNumber = onesDigit * 10 + tensDigit;

//     if (number > reversedNumber) {
//       console.log("Ok");
//     } else {
//       console.log("Not ok");
//     }
//   }

//   reverseCompare(72);
//   reverseCompare(23);

//Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

//1. done
//2. done
//3.

// function  returnFactorial(num) {
//   if (num < 0) return "please enter a positive number";
//   if (num < 2) return 1;
//   return n *  returnFactorial(num - 1);
// }
// console.log( returnFactorial(-1));

//   Question 4 (Meera array)
//   ● A Meera array is defined to be an array containing only numbers as its elements and for
//   all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
//   because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
//   2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
//   array of numbered elements and prints “I am a Meera array” in the console if its array
//   does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
//   Meera array”
//   ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
//   2 is 10 [20, 8, 0, 10]
//   ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
//   ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
//   *2 is -6
// step 1: done
//step 2: done
//step 3: -check if the given numbers are array
//- check if the given data inside the array is number
//- multiple each element of the array by 2
// - check if we get the same number result = the previous array element 
// - print "I am NOT a Meera array"
// - if not "I am a Meera array"

// step 4: create a function that takes an array as an argument
// -check if the passed argument is array. if it is array:
// -create a for loop
      // -initialization (i=0)
      // -condition (array.length)
      // -modification (i++)
// -create some variable to hold the product(2) of each element in the array
// - create another for loop (for checking)
      // -initialization (j=0)
      // -condition (array.length)
      // -modification (j++)
// create a conditional statment to check if the result and the each element in the array is same
// so if the matching element is found return “I am NOT a Meera array”
// else return “I am a Meera array”
// if it is not array then return "please enter array only"

// step 4
// function checkMeera(arr) {
//   if (Array.isArray(arr)) {
//     for (let i = 0; i < arr.length; i++) {
//       let product = 2 * arr[i];
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[j]===product) {
//           return "I am NOT a Meera array";
//         }        
//       }
//       return "I am a Meera array";
 
//     }
//   }else{
//     return "please enter array only";
//   }
// }
// // step 5
// console.log(checkMeera([10, 4, 0, 5]));
// console.log(checkMeera([7, 4, 9]));
// console.log(checkMeera([1, -6, 4, -3]));

//Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 1, 2, 2, 3, 3} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.
// step 1: done
// step 2: done
// step 3: - check if the given elements are array
// - check if every element has redendency (2)
// - if it is dual array dual array
// - if not 
// step 4- create a function that takes an array argument 
// -check if the passed argument is array or not. if it is array
// -create a variable to hold the sorted array
// -create a for loop
      // -initialization (i=0)
      // -condition (array.length)
      // -modification (i+=2)
//  create conditional statment to check if arr[i] !== arr[i+1]
// return 0; 
// return 1
// if it is not array then return "array only"



function isDual(arr) {
  if(Array.isArray(arr)){
    let sortedArray = arr.sort((a,b)=> a-b);
    for (let i = 0; i < sortedArray.length; i+=2) {
      if (sortedArray[i] !== sortedArray[i+1] || sortedArray[i]===sortedArray[i+2]) {
        return 0; 
      }
      
    }return 1;
  }else{
    return "please enter array only";
  }
}

console.log(isDual([1, 2, 1, 3, 3, 2]));
console.log(isDual([3, 1, 1, 2, 2]));
console.log(isDual([2, 5, 2, 5, 5]));

//Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.




function digitalClock(num) {
    if (typeof num === "number" && num > 0) {
        let totalSeconds = num % 86400;
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        let formattedHours = fun2(hours);
        let formattedMinutes = fun2(minutes);
        let formattedSeconds = fun2(seconds);

        return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
    }
}

function fun2(value) {
    if (value < 10) {
        return "0" + value;
    }
    return String(value);
}

console.log(digitalClock(5025));  
console.log(digitalClock(61201)); 
console.log(digitalClock(97000)); 