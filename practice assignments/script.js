/*let country = "usa";
let continent = "North America";
let population = 30000000;
console.log("I belong to  " + country + " which belongs to the continent " + continent + " and its population is " + population);
var job = 'programmer';
console.log(job);
var job = 'teacher';
console.log(job); */



/* Write a javascript program to display the current day an time in the following format:
Today is: Tudesday.
current time is: 10 PM: 30:38
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + daylist[day]);
var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
console.log("Current time is: " + hour + prepand + ":" + minute + ":" + seconds);
*/

/*Wrtie a javascript program to print the contents of the current window 
window.print();
*/

/*Write a javascript program to get current date in the format mm-dd-yyyy 
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
mm = (mm < 10) ? '0' + mm : mm;
dd = (dd < 10) ? '0' + dd : dd;
console.log(mm, dd);
today = mm + "-" + dd + '-' + yyyy;
console.log(today);
*/



/* Wrie a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5,6,7; 
function areaTriangle(a, b, c) {
    side1 = a;
    side2 = b;
    side3 = c;
    semiperimeter = (side1 + side2 + side3) / 2;
    console.log(semiperimeter);
    area = Math.sqrt([semiperimeter * ((semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3))]);
    console.log(area);
    return area;
}
finalArea = areaTriangle(5, 6, 7);
console.log(finalArea); */

//js methods object.keys, object.values, object.entries explanation;

/*const sales ={
    arun: 100,
    shova: 45,
    aarya:67,
}
console.log(Object.keys(sales)); // Returns  list left hand side keys
console.log(Object.values(sales));//returns list of rhs vales
console.log(Object.entries(sales));// returns array of key value pairs

//use of for of loop to find the sum of sales
function sumOfSales(obj){
    let sum =0;
    for(let value of Object.values(obj)){
           sum +=value;
    }
    return sum;
}
console.log(sumOfSales(sales));

//destructring object examples

function personSales(obj){
    for ( let [key, value] of Object.entries(obj)){
        console.log(`${key} has ${value}  sales`);
    }
}
personSales(sales);
console.log(sales.hasOwnProperty("arima"));
*/
//simple example of recursive function

/*function counttoOne(number){
    for ( let i =number ;i > 0; i--){
        console.log(i);
    }
}
counttoOne(5); */

//now using recursion:
/*function countdownUsingRecursiong(number){
    if(number <=0) {console.log("All done");
    return;
    }
    console.log(number);
    number --;
    countdownUsingRecursiong(number);
}
countdownUsingRecursiong(10);
*/


/* //find the sum of numbers given a range with recursion;
function findsum(n){
    if(n===1) return 1;
    return n + findsum(n-1);
}

console.log(findsum(4)); */

// //find the factorial of a number using recursion

// function factorial(n){
//     if(n ===1) return 1;
//    let fact =  n * factorial(n-1);
//      n--;
//      return fact;
//  }
//   console.log(factorial(10));
 
 

// function collectOdd(arr){
//    let arr1= [];
//     for( let i =0; i<arr.length ; i++){
       
//        if(arr[i]%2  !== 0){
//             arr1.push(arr[i]);
//             }
//     }
//     console.log(arr1);
//     }
//   arr=[5,6,7,8,9,3,1];
//  collectOdd(arr);
 
// //using recursion helper method;
// function collectOdd(arr){
//     let arr1 =[];
//     function helper(helperinput){
//         if(helperinput.length === 0) return;

//         if(helperinput[0] %2 !== 0){
//             arr1.push(helperinput[0]);
//         }
//         helper(helperinput.slice(1));
// }
// helper(arr);
// return arr1;
// }
// let arr= [5,6,7,8,9,3,1];
// console.log(collectOdd(arr));

// //using pure recursion 




// function collectOdd(arr){
//     let arr1 = [];
//     if(arr.length === 0){
//         return arr1;
//     }
//         if( arr[0]%2 === 0){
//             arr1.push(arr[0]);
//         }
//         arr1= arr1.concat(collectOdd(arr.slice(1)));
//         return arr1;
//     }

// let arr=[1,2,3,65,43,34,22,76,56,79];
// console.log(collectOdd(arr));


// //write a function for finding the power of a number without using Math.pow(); 
// function power(base, exponent){
//     if(exponent === 0){
//         return 1;
//     }
//     else{
//          let result = base * power(base, (exponent-1));
//         exponent --;
//         return result;
//     }
    
// }
// console.log(power(2,0));

// //Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// function recursiveRange(n){
//     let sum = 0;
//     let m = n;
 
//     function recur(m){
//         if (m===0){
//            return sum;
//         }
        
//       sum = m + recur(m-1);
//       return sum;
//     }
//     recur(m);
//     return sum;
    

// }
// console.log(recursiveRange(6));
//Linear Search

// function linearSearch(arr, val){

// for ( i = 0;  i < arr.length; i++){
//     if (arr[i] === val){
//         return i;
//     }
//  }
//     return  -1 ;
// }
// let arr = [10,15,20,25,45];
// let val = 9;
// let i;
// let x = linearSearch(arr, val);

// if( x !== -1){
// console.log( ` ${val} is at the position ${i}`);
// }
// else{
// console.log("the value is not there in the array");

// }

// function binarysearch(arr, val){
//       let left = 0
//       let right = arr.length-1; 
//       let mid = Math.floor(( left +right)/2);
//        while(arr[mid] !== val && left <= right){

//         (val < arr[mid])?(right = mid-1): (left = mid+1);

//         mid = Math.floor(( left +right)/2);
//         }
//     return (arr[mid] === val)? mid: -1;
// }
// let arr = [10,15,17,25,45];
// let val = 45;
// let x = binarysearch(arr, val);
// console.log( (x == -1)?"the value is not there in the array": ` ${val} is at the position ${x}`);

// //naivesearch
// function naivesearch(long,short){
//     let count = 0;
//     for (let i=0; i<long.length; i++){
//          for(let j=0; j< short.length; j++){
//            if(short[j]!== long[i+j]){
//             break;
//            }
//            if( j=== short.length -1){
//             count ++;
//            }
//          }
//     }
// return count;
// }
// x= naivesearch("lorie loled shorvaor aorushorva", "or");
// console.log(x);

//sets
const ordersSet = new Set(
    ['pasta', 'pizza', 'pizza', 'rissoto', 'pasta']);
    console.log(ordersSet);