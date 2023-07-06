/* 1 -> Function creates inside the Heap
2-> We create all objects in Heap.
3-> Varialbe store in Stack(let a = 30). 
4--> In Arrow function we do not use "function" keyword
5--> Arrays created in Heap becz array is also an object and obj created in heap.
6--> Arrays is NON-PRIMITIVE
7--> Primitive created in Stack and Non-Primitive created in Heap.
8-> The slice() method returns a "Shallow copy" of a portion of an array into a "new array" object selected from start to end (end not included) where start and end represent the index of items in that array. "The original array will not be modified".
9--> InPlace -> Change The or sort the element in orriginal Array, it doesnt create New Array.
10--> //-------Push----- //added the value in last
11--> //-------Pop----- //remove the last element from an array and returns it.
12--> //-------Slice----- //In this Start index will be included and End will NOT included.(It returns the Shallow Copy of the Array).
13--> //-------Splice----- //It will remove the array from the start index and delete from the given element included starting index.
14--> //-------Sort------- //Sorts an array inplace. This method mutates(in the original array) the array and returns a reference to the same array.
15--> //-------Shift----- //Removes the first element from an array and returns it.
16--> //-------UnShift----- //Inserts new elements at the start of an array, and returns the new length of the array.
17--> //------For Of------ //Its printing the Value.
18--> //------For In------ //Its printing the Key(index).
19--> --------ForEach---------- :>A function that accepts up to three arguments (value, index, array). forEach calls the callbackfn function one time for each element in the array. in this, foreach traversing in each element in the array. -> Note;- Here-; PAarent - forEach.// callback funct - ()=>{}) this is user functn and execute by ForEach, It DoesNt accept Return Value.
21--> ------------Map--------- :> Similar as ForEach but it accepted return any value(like- Int, Boolean, String, Obj). It will Create new Array
22--> -------First Class Funtn.--(In this, funtn treat like as variable.)-----
 1:- We can declare variables.
 2:- We can paas variables in function as their argumnets.
 3:- We can return variables from function.
23--> -----------------------------Reduce------------------
NOTE :- 1=> It different from Others, It takes two things, it takes callback Functn and it takes Initial Value.
 2=> Reduce funtn takes two value, first is "Accumulator" and second is "Value".
 3=> AT first time "Accumulator" would be Initial value., after that accumulator will be whatever the reduce has stored.
 4 => Type of Initial value could be anything.(int, strng, booln,..)
24--> ---------Anoynomus Function------(funct without any name)

*/