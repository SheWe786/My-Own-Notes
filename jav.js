// // // // // function roughScale(x, base) {
// // // // //     const parsed = parseInt(x, base);
// // // // //     if (isNaN(parsed)) { 
// // // // //         return 0;
// // // // //     }
// // // // //        return parsed * 100;
// // // // // }
  
// // // // //   console.log(roughScale(' 0xF', 16));
// // // // //   // expected output: 1500
  
// // // // //   console.log(roughScale('321', 2));
// // // // //   // expected output: 0

// // // // //    1500  // output
// // // // //    0    // output

// // // // let x = myFunction(4, 3);  
// // // // function myFunction(a, b) {
// // // //   return a * b;             // Function returns the product of a and b
// // // // }
// // // //  // Function is called, return value will end up in x
// // // // console.log(x)

// // // // utkarsh

// // // console.log("hello")
// // // function sum(a,b){
// // //   try{
// // //     throw Error("refrence error")

// // //     let c = a+b
// // //     return c;
// // //   }
// // //   catch(error){
// // //     console.log("hey error")
// // //     console.log(error)

// // //     alert("somthing is here")
// // //   }
// // // }
// // // let result = sum(1,2)
// // // console.log(result);


// // // const para = document.createElement("p");
// // // const node = document.createTextNode("This is new.");
// // // para.appendChild(node);

// // // const element = document.getElementById("div1");
// // // element.appendChild(para);
// // // const elmnt = document.getElementById("p1"); elmnt.remove();

// // //*********FOR EACH*********/
// // // let arr = [1, 2, 3, 4,5]
// // // arr.forEach(()=>{
// // //   console.log('hello')
// // // })

// // // arr.forEach((value)=>{
// // //   console.log(value)
// // // })

// // // function sum (a,b){
// // //   return a+b;
// // // }
// // // let res = sum(1,2)

// // // let arr = [10, 22, 33, 41, 15, 6]
// // // arr.map((value, index, array)=>{
// // //   console.log(value + 'map at index', index)

// // //   let rank =''
// // //   if(value<20){
// // //     rank = "undergrad"
// // //   }else if(value>=20 && value<30){
// // //     rank = 'passed'
// // //   }else if(value>=30){
// // //     rank = 'exper'
// // //   }
// // //   let obj = {
// // //     age : value,
// // //     rank: rank,
// // //   }
// // //   return obj;
// // // })
// // // console.log(arr)

// // //**********First Class function***********/

// // function greet(name) {
// //   console.log(`Hello, ${name}!`);
// // }
// // const sayHello = greet;

// // function logGreeting(greetingFn) {
// //   greetingFn("Alice");
// // }
// // logGreeting(sayHello); // Output: "Hello, Alice!"



// // //***********Call BAck Function**********/
// // function multiply(num1, num2, callbackFn) {
// //   const result = num1 * num2;
// //   callbackFn(result);
// //   // console.log()
// // }

// // function displayResult(result) {

// // console.log('the result is' +' '+ result);
// // }

// // function copyResult(result) {

// //   console.log('the result is' +' '+ result);
// //   }

// // multiply(2, 3, copyResult); // Output: "The result is: 6"
// // multiply(5, 10, displayResult);
// // let arr = [1, 2, 3, 4, 5];
// // let sum = 0;

// // for (let index in arr) {
// //   sum += arr[index];
// // }

// // console.log(sum); // Output: 15

// //***********reduce********/

// // let arr = [1, 2, 3, 4,5];
// // let result = arr.reduce((accum, value) =>{
// //   let sum = accum + value;
// //   return sum;
// // })
// // console.log(result)

// // **********sum of odd*****///

// // let aray = [1,2,3,4,5,6,7,8,9];
// // let Odd = arr.reduce(function(accum, value) {
// //   if (value % 2 !== 0) {
// //     return accum + value;
// //   }
// //   return accum;
// // }, 0);

// // console.log(Odd); //output ;- 9

// // **********double the element using Map*****///
// // let array = [1, 2, 3, 4, 5];
// // let arr = array.map(function(num) {
// //   return num * 2;
// // });

// // console.log(arr);


// //**********double the element using Reduce*****///
// // let arr = [1, 2, 3, 4, 5];
// // let array = arr.reduce((accum, value)=>{
// //   accum.push(value * 2);
// //   return accum;
// // }, []);
// // console.log(array);

// // let arr = [1, 2, 3, 4, 5];
// // let result = arr.reduce((accumulator, Value) => {
// //   return (Value * 2);
// // }, 0);

// // console.log(result); 

// //*******copy the array using map******/

// // let arr = [1, 2, 3, 4, 5];
// // let copy = arr.map((x) => x);
// // console.log(copy);

// //*******copy the array using map******/
// //*****way1*****//
// // let arr = [1,2,3,4,5,6,7,8,9]; //abc@123
// // let newarr = []; //abc@345
// // for(const item of arr){
// //   newarr.push(item)
// // }
// // newarr.push(100);
// // console.log(arr, "org arr")
// // console.log(newarr, "copy arr")

// //*********way2 using map**********//
// // let arr = [1,2,3,4,5,6,7,8,9]; //abc@123
// // let newarr = arr.map((value)=>{ // here map create the new array, 
// //   return value; //and storing return value in his array....
// // })
// // newarr.push(100)
// // console.log(arr, "org arr")
// // console.log(newarr, "copy arr")

// //******way3 using spread operators****//
// // let arr = [1,2,3,4,5,6,7,8,9] //abc@123
// // let newarr = [...arr]; //abc@345
// // //...arr = 1,2,3... without boundry walls

// // newarr.push(200)
// // console.log(arr, "org arr")
// // console.log(newarr, "copy arr")

// // //******way using reduce operators****//
// // //this is home Work (23-april)//

// // var firstNames = []; //creating empty array

// // for (var i = 0; i <=firstNames.length; i++) {
// // console.log('JS')
// // }

// // var myArr = ['foo', 'bar', 'baz'];
// // myArr[2];
// // console.log('2' in myArr);

// // var numbers=[1,2,3,4];
// // const multiplyNums=numbers.mapping((number)=>{
// // return (number*5);
// // });
// // console.log(multiplyNums);

// // var values=[4,5,6,7,8] 
// // var ans=values.slice(1); 
// // console.log(ans);

// // var arr = [];
// // arr[0]  = 'a';
// // arr[1]  = 'b';
// // arr.foo = 'c';
// // alert(arr.length);

// // var a =[];
// // a.unshift(5); //5
// // a.unshift(22); //22, 5
// // a.shift(); // 5
// // a.unshift(3,[4,5]); //[[4,5], 3, 5]
// // a.shift(); //[3, 5]
// // a.shift(); // [5]
// // a.shift(); //[]
// // console.log(a)


// //*******doubt****** */
// // function oddsums(n)
// // {
// // let total = 0, result=[];
// // for(let x = 1; x <= n; x++)
// // {
// // let odd = 2*x-1; //2*0 = 0
// // total += odd; // 0+0 = 0
// // result.push(total);
// // }
// // return result;
// // }

// // const elem = document.getElementById("p1");
// //     elem.style.color = "red";

// // let elem1 = document.getElementsByClassName("cls")
// //     elem1.style.color = "red"; //no output, doubt****

// // const data = [].map(()=>{
// //     return{

// //     }
// // }).filter(()=>{
// //    return true;
// // }).reduce((acc, curr)=>{
// //     return acc+curr;
// // }, 0)
// // console.log(data);

// // function searchName(name) {
// //     let names = document.getElementById('name');
// //     let name2 = document.getElementsByTagName('li');
// //         for (let i = 0; i < name2.length; i++) {
// //         if (name2[i].innerhtml === names) {
// //         return true; 
// //       }
// //     }
    
// //     return false; 

// //   }
// //   let res = searchName('aksah1');
// // console.log(res);
// // const person = {name:"Alicia",age:25, city:'Paris'};

// // let text = "";
// // for (let x in person) {
// //   console.log(x)
// // }

// // Get all the box elements



// // const red = document.getElementById("red");
// // const green = document.getElementById("green");
// // const blue = document.getElementById("blue");

// // red.addEventListener("click",(event)=>{
// //   event.target.style.backgroundColor = "red";
// // });
// // green.addEventListener("click",(event)=>{
// //   event.target.style.backgroundColor = "green";
// // });
// // blue.addEventListener("click",(event)=>{
// //   event.target.style.backgroundColor = "blue";
// // });


// const input = document.getElementById("name");
// console.dir(input);
// let name ="";
// input.addEventListener("keydown", (event) =>{
//   console.log("button clicked")
//   console.log(event)
//   // let key = event.key;
//   // console.log(key)
// })

// 

// var LastName = "tiwari";

// function getFullName(){
//   return firstName + LastName;
// }

// function  printDeatils(){
//   var firstName = "Shivani";
//   return function(){
//     return firstName + LastName
//   };
// }
// const data  = printDeatils();

// console.log(data());

// function increasecounter(){
//   let counter = -1;
//   return () => {
//     console.log(counter++);
//   };
// }
//  const counter1 = increasecounter();
//  const counter2 = increasecounter();
//  const counter3 = increasecounter();

//  console.log(counter1());
//  console.log(counter2());
//  console.log(counter3());

//  const sum = (a1) =>{
//     return(a2)=>{
//       return(a3)=>{
//         return(a4)=>{
//           return a1+a2+a3+a4;
//         };
//       };
//     };
//   };
      
//  console.log(sum(10)(20)(30)(40));

//  data1 = () =>

// function multiply(a,b){
//   console.log(a*b);
// }
// multiply(2, 5);
// console.log(multiply.length);
//  multiply.length =0;
//  multiply(2, 5);


//  (
//   function immediateA(a){
//     return(function immediateB(b){
//       console.log(a);
//     })(1);
//   }
//  )(0);

//  let count = 0;
//  (
//   function immediate(){
//     if(count ===0){
//       let count =1;
//       console.log(count);
//     }
//     console.log(count);
//   })();


//--------- 22-05-23------

// const promiseOfQuote = fetch('https://api.kanye.rest/').then(responseObj =>{
//   console.log(responseObj.status, "this is the status")
//   return responseObj.json()
// })
// .then(data =>{
//   console.log(data, "real data")
// })

// console.log(promiseOfQuote)
// console.log("bye")

// const timer1 = setTimeout(() => {

//   console.log("timer1");
  
//   const promise1 = Promise.resolve().then(() => {
  
//   console.log("promise1");
  
//   });
  
//   }, 0);
  
//   const timer2 = setTimeout(() => {
  
//   console.log("timer2");
  
//   }, 0);
  
//   console.log("start");
  
//   const promise1 = Promise.resolve().then(() => {
  
//   console.log("promise1");
  
//   const timer2 = setTimeout(() => {
  
//   console.log("timer2");
  
//   }, 0);
  
//   });
  
//   console.log("end");



//-----------------------------------------Revision by own(Class no. 31)......---------------...

//------------------------------Hoisted---------........
// console.log(a,  "hey there");
// var a = 12;
// //Note;- Output -; Undefined hey there. (becz var has GEC(global execution context))

// console.log(b,  "hey there");
// let b = 12;
// //Note;- Output -; b is not defined.

// console.log(c, "hey there");
// const c = 12;
//Note;- Output -; c is not defined.


//------------------First Class Funtn.-------(In this, funtn treat like as variable.)-----
// 1:- We can declare variables.
// 2:- We can paas variables in function as their argumnets.
// 3:- We can return variables from function.

// Example 1:-
// let num1 = 12;
// let num2 = 13;
// function sum(a, b){ //here a and b are the arguments.
//     let c = a+b;
//     return c;
// }
// let res = sum(num1, num2);
// console.log(res) ///Output:- 25

// Example 2:-

// 4:- We can paas a funtn as an Arguments inside the Funtn. ex:->
// let num1 = 10;
// let num2 = 11;
// function calc(fn, val){
//     console.log(fn);
//     console.log(val);
// }
// calc(sum(), 2);
// function sum(a, b){
//     let c = a+b;
//     return c;
// }
// sum(num1, num2); //Output --> NaN 2 (DOUBT)********************

// Example 3:-
function spaceShip(funct, num1, num2){
        funct()
}
spaceShip(mars, 10, 20);
console.log(spaceShip)

function mars(){
    
}
function jupiter(){

}
function earth(){

}







//------------------Call BackFun.(Class no. 32)........

// function firstfunc(callbackFn){
//   console.log('firstfunc')
//   callbackFn(1, 2)
// }

// function add(a , b){
//   console.log(a+b);
// }

// firstfunc(add);

//-----------------------------function declaration-----------
// function sum(){

// }

//-----------------------------function expression------(variable name)
// var abc = function(a, b){    //here var, let and const can take any value like "string, booln, int, funtn and obj as well"
//   console.log(a+b);
// }
// abc(1, 2);
 
//-------
// var abc = function(){
//   console.log("hey there")
// }
// abc //--> It will give the output value itself. output--> f(){ console.log("hey there")}
// abc()  //--> it will give the output "hey there"

// abc = null //--> output will be "null"
// abc() //--> here output will be "abc is not a function" --becz once we give null, the value will be deleted from heap,  if after that we try to call again the address will not found in heap. 

//-----------------------Named Function----------------------
// function asd(){

// }

// //--------------------Anoynomus Funcction------(funct without any name)
// let azs = function(){

// }

// //------------------------Arrow Funcction-(we do not use "function" keyword)--------------
// var sumArrow = (a, b)=>{
//   console.log(a+b);
// }
// sumArrow(1,2);

//-------------------------------------Array---------------
// let arr1 = [1,2,3,4,5,6];
// const arr2 = [1,2,3,4,5,6];
// let isEqual = arr1==arr2 //both are not equal becz array stored in heap, here the address of arr1 and arr2 are different.
// console.log(isEqual) //output will be false.

// //----------------------------Push----- //added the value in last
// arr1.push(7)
// console.log(arr1) // output -> [1, 2, 3, 4, 5, 6, 7]

// //---------------------------Pop----- //remove the last element from an array and returns it.
// arr1.pop()
// console.log(arr1) // output -> [1, 2, 3, 4, 5, 6]

//----------------------------Slice----- //In this Start index will be included and End will NOT included.(It returns the Shallow Copy of the Array)
// let arrSlice = [1,2,3,4,5,6,7,8];
//  let ans = arrSlice.slice(2,5);
// console.log(ans + " slice") //output -> 3,4,5 slice (start with index 2 and End with 5.but end will not included)

//------------------------------Splice----- //It will remove the array from the start index and delete from the given element included starting index.
// let arrSplice = [1,2,3,4,5,6,7,8];
//  let ansSplice = arrSplice.splice(2,4); // here 2 is the index value and 4th is the element.
// console.log(ansSplice + " splice") //Output -> 3,4,5,6 splice.

//---------------------------------Sort------------ //Sorts an array in place. This method mutates(in the original array) the array and returns a reference to the same array.
//example - 1.
// let arrOrgSort = [1,2,5,4,3,6,8,7];
// let ansSortArr = arrOrgSort.sort();
// console.log(ansSortArr); //Output ->[1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arrOrgSort === ansSortArr); //Output -> true (becz both are in the same array, it doesnt create new array.)

//example - 2.(It will Sort in lexicography like in dictonary Order)
// let arrOrgSort1 = [1,2,5,14,113,26,18,27];
// let ansSortArr1 = arrOrgSort1.sort();
// console.log(ansSortArr1); //Output -> [1, 113, 14, 18, 2, 26, 27, 5]. 

//----------------------------------Shift----- //Removes the first element from an array and returns it.
// let arrShift = [1,2,5,4,3,6,8,7];
// arrShift.shift();
// console.log(arrShift); //Output -> [2, 5, 4, 3, 6, 8, 7]

//------------------------------------UnShift----- //Inserts new elements at the start of an array, and returns the new length of the array.
// let arrUnShift = [1,2,5,4,3,6,8,7];
// arrUnShift.unshift(0);
// console.log(arrUnShift); //Output ->  [0, 1, 2, 5, 4, 3, 6, 8, 7]

//----------------------------------------Looping---------------- 

//---------------- simple For------
// let arr1 = [1,2,3,4,5,6]
// for(let i=0; i<arr1.length; i++){
//     console.log(arr1); //[1,2,3,4,5,6]
// }
//-----------------For Of------ //Its printing the Value.
// let arr2 = [11,21,30,45,56,68]
// for(let i of arr2){
//     console.log(i); //Output -> 11 21 30 45 56 68
// }
//--------------------For In------ //Its printing the Key(index).
// let arr3 = [11,21,30,45,56,68]
// for(let i in arr3){
//     console.log(i); //Output -> 0 1 2 3 4 5
// }

//----------------=-----------------------ARRAY'S--(Class no. 34)---------------------------


//-----------------------------ForEach--------- //A function that accepts up to three arguments ((value, index, array)). forEach calls the callbackfn function one time for each element in the array. in this, foreach traversing in each element in the array.
//Note;- Here-; PAarent - forEach.// callback funct - ()=>{}) this is user functn and execute by ForEach, It DoesNt accept Return Value.

//--------------------ForEach----(Using Arrow Functn)-------
// let arr1 = [10, 11,15,23,24,35,68,49]
// arr1.forEach((value, index, array)=>{
//     console.log(value, index, array)  
// })

//----------------------ForEach-----Using Normal Functn-------
// let arr2 = [10, 11,15,23,24,35,68,49]
// arr2.forEach(myFuntn) //Here it take refrence from 'my functn'.
// function myFuntn(value){
// console.log(value)
// }

//----------------------------------Map--------- //Similar as ForEach but it accepted return any value(like- Int, Boolean, String, Obj). It will Create new Array

// let arr3 = [2,4,6,8,12,15,18,24,26,29]
// let resArra = arr3.map((value)=>{
//     let rank = ''
//     if(value<10){
//         rank = 'Fail'
//     }else if(value>=10 && value<20){
//         rank = 'average'
//     }else if(value>=20 && value<30){
//         rank = 'Good'
//     }else if(value>=30){
//         rank = "Excellent"
//     }

//     let obj ={
//         age : value,
//         rank: rank,
//     }
//     return obj;
// })
// console.log(resArra)


//---------------------------------Filter--------- //It accepted return value but only TRUE and FALSE.
// let arrFilter = [10,20,,25,24,14,36,17]
// let resArrFilter = arrFilter.filter((value)=>{
//     if(value%2===0){
//         return true
//     }else{
//         return false;
//     }
// })
// console.log(resArrFilter) //Output -> [10, 20, 24, 14, 36]

//----------------=-----------------------ARRAY'S Continue...--(Class no. 35)---------------------------

// (function(){
//     var a=b=3;
// })();
// console.log(typeof a !== 'undefined')
// console.log(typeof b !== 'undefined')


//---------------------------Synchronous-------(Perform Operations from top to bottom)
