/* -----------
Javascript Functions 
-------
*/
/* 1. Write a javascrpt program to reverse a number 
function reverseNumber(n){
    n = n + "";
    let n1= n.split("");
    let n2= n1.reverse();
    let n3= n2.join("");
    let finaln = Number(n3);
    console.log(finaln);
}
reverseNumber(1234567);

*/
/* 2.Write a javascript program to reverse a number using arrow function 
let reverseNumber = n => {
    n = n + "";
    console.log(n.split("").reverse().join(""))};
reverseNumber(1234567);
*/

/* 3.check whether a string is palindrome or not 
function checkPalindrome(str){
    let cstr= str.split("");
     ispalindrom =true;
     j= cstr.length-1;
 
 for(i=0 ; i<j ; i++){
 
     if(cstr[i] !== cstr[j]) {
         ispalindrom=false;
         break;
     }
     j--;
 }
 
     
     if(ispalindrom == true){
         console.log("palindrom");
     }
 if(ispalindrom == false){
     console.log("not palindrome");
 }
 }
     
 
 checkPalindrome("MADAM");
 checkPalindrome("shova");
 */

 /* 4.Write a js function to print all combinations of a string 
 function printscringcombination(str){
    
   let cstr = str.split('');
   j = cstr.length;
   for(x=0;x<=j; x++){

    for(i=x;i<j;i++){
        newstr= '';
        
        for(k=x;k<=i;k++){
        newstr = newstr.concat(cstr[k]);
        } 
        console.log(newstr);
    
       }
     
   }
 }
 printscringcombination("shovaniraula");
 */
/* Write a javascript function that returns sorted string a to z 

 function returnSorted(strn){
console.log(strn.split('').sort().join(''));
}
returnSorted("shovaniraula");
*/


/* function printscringcombination(str){
    
    let cstr = str.split('');
    j = cstr.length;
    for(x=0;x<=j; x++){
 
     for(i=x;i<j;i++){
         newstr= '';
         
         for(k=x;k<=i;k++){
         newstr = newstr.concat(cstr[k]);
         } 
         console.log(newstr);
     
        }
      
    }
  }
  printscringcombination("shovaniraula"); // O(n3) */

  
