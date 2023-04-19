// let arr = [")", "(", "(", "[", "{", "}", "]", ")", ")", "[", "]", "("];
// // let arr = ["(", "(", "(", "[", "]", "{", "}", ")", ")", "[", "]", ")"];
// let length = arr.length;
// for (let i = 0; i < length; i++) {
//   for (let j = 0; j < arr.length; j++) {    
//     if (
//       (arr[j] == "(" && arr[j + 1] == ")") ||
//       (arr[j] == "{" && arr[j + 1] == "}") ||
//       (arr[j] == "[" && arr[j + 1] == "]")
//     ) {
//       arr.splice(j, 2);
//     }
//   }
// }
// if (arr.length == 0) {
//   console.log("All parentheses are having a pair");
// } else {
//   console.log("These parentheses don't have a pair - " + arr);
// }




// let arr = ["a", "b", "c", "d"]
// let arr = [")", "(", "), "[" ]
// let arr1 = arr
// let arr1 = arr.slice()

// arr.splice(0, 2)
// console.log(arr)
// console.log(arr1)



//  let arr = [80, 117, 115, 104, 45, 85, 112, 115];
// let arr = ['t', 'e', 's', 't'];
//  function check(a,x){
// return a.indexOf(x) >= 0;           // let b = a.indexOf(x)
// };                                  // console.log(b)
// console.log(check(arr, 85))           // return b >= 0
// console.log(check(arr, 86))           // console.log(check(arr, 'y'))
// console.log(check(arr, 's'))


// let arr = ['t', 'e', 's', 't'];
// function check (a,x){
//     return a.includes(x)
// }

//  console.log(check(arr, 'y')) 


// function check (a,x){
//     let arr1 = [...a];
//     return arr1.includes(x)
// }

//  console.log(check(arr, 'y')) 



// let arr = ['wolf']
// function warnTheSheep(queue){

//   if(queue[queue.length -1] == 'wolf' ){
//     return "Pls go away and stop eating my sheep"
// } else{
//     let a = queue.length - (queue.indexOf('wolf') + 1); // 8-6
//     return "Oi! Sheep number ${queue.length - r}! You are about to be eaten by a wolf!"
// }
// }
// console.log(warnTheSheep(arr))



// let arr = ["tail, "body", "head"]
// function fixTheMeerkat(arr) {
//     // let arrTemp = [];
//     for (let i = 0; i < arr.length; i++){
//        arr[i] = arr[i].split('').reverse().join('')
//     //    arrTemp.push(arr[i].split('').reverse().join(''))
//     }
//     return arr
// }
// console.log(fixMeerkat(arr1))




// // Stan 04.01
// let count = 0
// function recursion(){
// count ++;
// console.log(count);
// if (count > 50) {
// return
// }
// recursion()
// }
// recursion();

// 1! = 1 factorial
// 2! = 1 * 2
// 3! = 1 * 2 * 3
// n = 3-> 3 * factorial(2)-> 3 * 2-> 6
// n = 2-> 2 * factorial(1)-> 2 * 1-> 2
// n = 1-> 1

// function factorial_1(n){
//     let p = 1;
//     for(let i = 1; i <= n; i ++){
//         p *= i
//     }
//     console.log(p);
// }
// factorial_1(5);


// let result = 1;
// function factorial_2(n){
//     if (n == 0) return;
// result *= n;
// factorial_2(n -1);
// }
// factorial_2(5)
// console.log(result);


// function factorial_3(n){
//     return n == 1 ? 1: n * factorial_3(n-1)
// }
// console.log(factorial_3(64));


// stack:
// factorial(1)
// factorial(2)
// factorial(3)


// Fibanachi
// 0, 1, 1, 2, 3, 5, 8, 13, 21...
// 0  1  2  3  4  5  6   7   8

// function fib(n){
// if (n == 0) return 0;
// if (n == 1) return 1;
// return fib(n -1) + fib (n - 2);
// }
// console.log(fib(8));

// stack:
// fib(2)


// zamikanie - Closure
// let count = 0;
// function createCount(){
//     count++
//     console.log(count);
// }
// createCount()
// createCount()
// count = 10
// createCount()

// (function hello(){
//     console.log("Hello");
// })()

// counter()


// function counter() {
//     let count = 0;

//     return function creatCount() {
//         count++;
//         console.log(count);
//     };
// }
// let counter_1 = counter();
// let counter_2 = counter();
// counter_1();
// counter_1();
// counter_2();
// counter_1();
// counter_1();
// counter_2();
// counter_1();
// counter_2();
// counter_2();
// counter_2();
// console.log(count);



// function generate(seed){
//     var private = seed;
//     return function (param){
//         private += seed;
//         return private + param;
//     };
// }
// var a = generate(1);
// var b = generate(2)

// a(1) + a(2) + b(3) + b (4);

// a.10
// b.15
// c.17
// d.21
// console.log(a(1) + a(2) + a(1))


// function generate(seed){
//     var private = seed;
//     console.log(`generate ${private}`);
//     return function (param){
//         private += seed;
//         console.log(`unknown ${private}`);
//         return private + param;
//     };
// }
// let a = generate(1);
// console.log(a);
// console.log(a(1))
// console.log(a(3))


// Array.map((el, i => el))

// function a(){
//     console.log('function a');
// }
// 'use strict'
// if (true){
//     function a(){
//         console.log("function a");
// }
// } else {
//     function b(){
//         console.log("function b")
//     }
// }
// a();
// c();
// // console.log(a())
// // console.log(b())
// // console.log(c())

// function c(){
//     console.log("function c")
// }



//  //cozdali massiv v vide literalov
// const arr = [12, 4, 8,,,,,];
// const arrNew = [] // vizov cherez constructor
// const arr = new Array (10) // dlina massiva
// console.log(arr.length)// vizov dlini massiva
// console.log(arr.flat(-1))// obrachenie k last element


//pop/push   /shift/unshift
// const arr = []
// arr.push(678, "true")
// console.log(arr);

// arr.unshift(678, "true", tru)
// console.log(arr.unshift(678, "true", tru))
// console.log(arr);



// const arr = new Array(10, 5, 10, 'str', false)
// const arrNew = [2, 3, 4]
// const arrr = [true, false, NaN];
// const arr3 = arr.concat(arrr, arrNew, "Hello");
// console.log(arr3);

// console.log(arr.reverse());
// console.log(arr);


//split, join
// let str = "Hello JavaScript";
// console.log(str.split('a'))
// console.log(arr);
// let newStr = arr.join("a")
// console.log(newStr)
// console.log(typeof newStr);



// I
//  I
//   I
// function createSteps(n){
//     let arr = []
//     for (let i = 0; i <= n; i++){
//         str += ' '.repeat(i) + 'I' + '\n';
//  }
//  return str;
// }
// console.log(createSteps(5))


//slice
// const arr = ['t', 'e', 's', 't']
// const arrNew = arr.slice(1, 3);

// arr[0] = 'T';
// console.log(arr);
// console.log(arrNew);

// console.log(arr.slice());

// const arr = ['t', 'e', 's', 't']
// const arrNew = [1, 2, 3]
// console.log(arr + arrNew)


// const arr = ['t', 'e', 's', 't']
// const arrNew = [1, 2, 3]
// console.log(arr.slice(0, 2), arr.slice(2))


//splice
// const arr = ['t', 'e', 's', 't'];
// console.log(arr.splice(-2, 2, "T", "E", "S", "T"));
// console.log(arr);



// const arr = "Hello World!". split('');
// console.log(arr.indexOf('W'))
// console.log(arr.lastindexOf('a'))

// let idx = arr.indexOf('l');
// while (idx !=-1){
//     console.log(idx);
//     idx = arr.indexOf("l", idx + 1);
// }

// const arr = "Hello World!". split('');
// let idx = arr.indexOf('l');
// if(arr.indexOf('l') === arr.lastIndexOf('l')){
// console.log('Unique');
// }


// const arr = ['1', NaN, 2, false];
// let idx = arr.indexOf(NaN);
// console.log(idx)


// const arr = ['1', NaN, 2, false];
// let idx = arr.includes(NaN);
// console.log(idx)


// const arr = [2, 6, 2, 29, 39, 45];
// const isOdd = (element) =>{
//     return element % 2 === 1;
// }
// console.log(arr.find(isOdd))


// const arr = [2, 6, 2, 29, 39, 45];
// const isOdd = (element) => element % 2 === 1;



// const arr = [2, 6, 2, 29, 39, 45];
// function squire(n){
//     return n * n;
// }
// console.log(arr.map(squire));




// const arr = [2, 6, 2, 29, 39, 45];
// console.log(arr.map(el, i, arr) => i % 2 ===1 ? el * el : el)

// console.log(arr(el, i, arr) => i % 2 ===1 ? el * el : el)
