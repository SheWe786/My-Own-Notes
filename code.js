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

// Example 3:-(DOUBT)********************
// function spaceShip(funct, num1, num2){
//         console.log(num1, num2);
//         funct()
// }
// spaceShip(mars, "10", "20");


// function mars(){
//         console.log("spaceShip");
// }
// function jupiter(){

// }
// function earth(){

// }

//-------------------------Call By Value----------------(DOUBT)********************
// Example:- taken from google.

// function changeValue(num) {
//         num = 10; // Modifying the parameter
//         console.log(num); // Output: 10
//       }
//       let x = 5;
//       changeValue(x); // Passing the value of x
//       console.log(x); // Output: 5 (the original value of x is unchanged)
     
// //-------------------------Call By Refrence----------------(DOUBT)********************
      
// function changeArray(arr) {
//         arr.push(4); // Modifying the parameter
//         console.log(arr); // Output: [1, 2, 3, 4]
//       }
      
//       let myArray = [1, 2, 3];
//       changeArray(myArray); // Passing the reference to myArray
//       console.log(myArray); // Output: [1, 2, 3, 4] (the original array is modified)


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

// //------------------------Arrow Function-(we do not use "function" keyword)--------------
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
//Example 1--> Using console, it will return the array(value) itself. 
// arr1.push(7)
// console.log(arr1) // output -> [1, 2, 3, 4, 5, 6, 7]

//Example 2--> Without Using console, it will return length of the array. 
// let arrr = 123;
// arrr.push(5); // Output => 5

//Example 3-->  
// let arrr1 = 123;
// arrr1.push(5); // Output => Error -> arrr1.push is not a function. (becz Push only work for "Array" not for int, string.) 



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

//----------------=--------------------ARRAY'S Continue...--(Class no. 35)---------------------------

//-----------------------------Find Value--------- //It gives number itself if i find that no. inside the array Otherwise it gives undefined. NOTE:- (In case of multiple repeated no's. it will return first element)

//example:- 1
// let arr1 = [1,2,5,33,44,25,36]
// let resfind1 = arr1.find((value)=>{
//         if(value == '44') //when the value not find inside the array.
//         return true;
// });
// console.log(resfind1); //Output :> 44

//example:- 2
// let arr2 = [1,2,5,33,44,25,36]
// let resfind2 = arr2.find((value)=>{
//         if(value == '50') //when the value not find inside the array.
//         return true;
// });
// console.log(resfind2); //Output :> undefined

//-----------------------------Find Index-(T.C => O(n))-------- //It gives number itself if i find that no. inside the array Otherwise it gives -1.

// let arr3 = [1,2,5,33,44,25,36]
// let resfind3 = arr3.findIndex((value)=>{
//         if(value == '44') //when the value of index find inside the array.
//         return true;
// });
// console.log(resfind3); //Output :> 4


// let arr4 = [1,2,5,33,44,25,36]
// let resfind4 = arr4.findIndex((value)=>{
//         if(value == '45') //when the value of index not find inside the array.
//         return true;
// });
// console.log(resfind4); //Output :> -1

//-----------------------------Find Last-------- //It will start from the last. It gives number itself if i find that no. inside the array Otherwise it gives Undefined.
// let arr5 = [1,2,5,33,44,25,5,36]
// let resfind5 = arr5.findLast((value)=>{
//         if(value == '5') //when the value of index not find inside the array.
//         return true;
// });
// console.log(resfind5); //OutPut -> 5

//-----------------------------Find LastIndex-------- //It will start from the last. It gives number itself if i find that no. inside the array Otherwise it gives -1.
// let arr6 = [1,2,5,33,44,25,5,36]
// let resfind6 = arr6.findLastIndex((value)=>{
//         if(value == '5') //when the value of index not find inside the array.
//         return true;
// });
// console.log(resfind6); //OutPut -> 6


//-----------------------------REDUCE------------------
//Step Of Reduce Funtn:-
//1:- Iterate the Element.
//2:- Call the CallBack Funtn.
//3:- Store The Reurn Value.

// NOTE :- 1=> It different from Others, It takes two things, it takes callback Functn and it takes Initial Value.
// 2=> Reduce funtn takes two value, first is "Accumulator" and second is "Value".
//3=> AT first time "Accumulator" would be Initial value., after that accumulator will be whatever the reduce has stored.
//4 => Type of Initial value could be anything.(int, strng, booln,..)
//5 => The Default value of accum. inintial value is "First Value of an array".

// let arr7 = [1,2,5,33,44,25,5,36]
// let resfind7 = arr7.reduce((accumulator ,value)=>{ //here in first iteration accu. would be "0" (0+1), after that itereation, accu will be "1"(becaz reduce has stored "1"(0+1=1) and so on.......)
//         return accumulator + value;
// }, 0); //Here 0 is the Initial Value, and it could be anything.
// console.log(resfind7);

//Example-> Initial value is boolen. It takes True=1, and False=0.
// let arr7 = [1,2,5]
// let resfind7 = arr7.reduce((accumulator ,value)=>{ 
//         return accumulator + value;
// }, true); //(It takes by default true is 1)
// console.log(resfind7); //OutPut => 9 
        

//----------------=--------------------ARRAY'S Continue...--(Class no. 36)---------------------------
//-----------------------------Reduce------------------
//Example:- Sum of All Odd numb.-------------
// let arr8 = [1,2,3,4]
// let resfind8 = arr8.reduce((accumulator ,value)=>{ 
//         if(value % 2 !== 0){
//         return accumulator + value;
//         }else{
//                 return accumulator;
//         }
// }, 0);
// console.log(resfind8);
        

//Example:- Double the numb. of array.------
//way1:- ---------Using map.------------
// let arr9 = [1,2,3]
// let resfind9 = arr9.map((value)=>{ 
//        return value *2;
// },);
// console.log(resfind9);
       
//way2:- --------Using Reduce.------------
// let arr10 = [1,2,3]
// let resfind10 = arr10.reduce((accu , value)=>{ 
//        return accu value *2;
// }, []); // Here the initial value of accu is Blank Array[].
// console.log(resfind10);

//-----------------------------Copy Of Array------------------
//------------Way-1 (For loop)---------------
// let arr = [1,2,3,4]
// let copyArr = [];
// for(let item of arr){
//         copyArr.push(item);
// }
// copyArr.push(100);
// console.log(arr); //OutPut => [1, 2, 3, 4]
// console.log(copyArr); //OutPut => [1, 2, 3, 4,100]

//------------Way-2(Map)---------------
// let arr = [1,2,3,4]
// let copyArr = arr.map((value) => {  //map has its own blank array. 
//         return value; //It storing the return value in its own arr.
// })
// copyArr.push(200);
// console.log(arr); //OutPut => [1, 2, 3, 4]
// console.log(copyArr)  //OutPut => [1, 2, 3, 4, 200]

//------------Way-3(...Spread operator)---------------
let arr = [1,2,3,4]
let copyArr = [...arr]; //...arr = 1,2,3,4 it copy the arr without boundry walls.
copyArr.push(201);
console.log(arr); //OutPut => [1, 2, 3, 4]
console.log(copyArr)  //OutPut => [1, 2, 3, 4, 200]


        


//---------------------------Synchronous-------(Perform Operations from top to bottom)
