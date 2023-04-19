// let result
// function sum (a, b){
//     let result = a + b
//     return result
// }

// function print(arg){
//     console.log(arg)
// }
// let result = sum (1, 3) + 5
// console.log(result)
// console.log(a)
// function print(arg){
//     console.log(arg)
// }

// function sum(a, b){
//     let result = a + b
//     print(result)

//     return result
// }
// function print(arg){
//     console.log(arg)
// }


// let print = function(arg){
//     console.log(arg)
// }
// print("Hi")


// function login(email, pass){
//     typeEmail(email)
//     typePass(pass)
//     clickSubmit()

// }

// let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1]
// let arrNew = [];
// for(let i = 0; i<arr.length; i++){
//     if(typeof arr[i] == 'number'){
// arrNew.push(arr[i]);
//     }
// }
// console.log(arrNew)


// let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1]
// let fruits = ['apple', 'grape', 9, 7, 'pear']

// console.log(createArrayofNumbers(arr))
// let greeting = function showMessage(){
//     console.log('Hello')
// }
// function createArrayofNumbers(list){
//     let arrNew = [];
//     for(let i = 0; i< list.length; i++){
//         if(typeof list[i] == 'number'){
//             if (list[i] == 88){
//                 continue;
//             }
//     arrNew.push(list[i]);
// }
//     }
//     // showMessage()
//     // console.log(greeting())
//     return arrNew;
// }
// // console.log(createArrayofNumbers(arr))
// // console.log(createArrayofNumbers(fruits))


// let addNum = function sumNumber(a, b = 1, c = 0){
//     // let result = a + b + c
//  return a + b + c 
// }
// // console.log(sumNumber(3))
// console.log(addNum())


// let sumNum = (number1, number2, number3) => number1 + number2 + number3
// let result =sumNum(3, 10, 2)
// console.log(sumNum(3, 10, 2))
// console.log(result)


// let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 88, 'red', 1]
// function indexOfElement(arry, num){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === num){
//             return i;
//         }else{
//             return - 1;
//         }
//     }
// }
// // console.log(indexOfElement(arr, 44))
// console.log(arr.indexOf(88))


 
// let BMI = (weight, height) => weight / height**2
//     console.log (BMI(72, 167))



// C = (F – 32) x 5/9
// let celsium = f => ((f - 32) * 5/9).toFixed(2)
// console.log(celsium(100))




// let str = 'Hello'
// console.log(str)


// let str = 'Hello'
// function printName(){
// return 'JavaScript'
// }
// let result = printName();
// console.log(printName() + printName());


// function nameOfTheFunction(){

// }


// let str = 'Hello'
// function printName(){
//     str = 'Hey'
//     return name() + 'Java' + ' ' + str;
//     function name(){
//         return "Hi";
//     }
// }
// console.log(printName());
// console.log(str);


// console.log(10 + '' + 20)



// let str = 'Hello'
// function printName(a, b){
//     str = 'Hey'
//     return  a + b + name();
//     function name(){
//         return "Hi";
//     }
// }
// function sum(num1, num2){
//     return num1 + num2;
// }
// console.log(printName(10, sum (20, 50)));


// let str = "Hello"

// function printInfo(){

// console.log('*****');
// console.log("2");
// console.log('3');
// console.log('4');
// console.log('______');
// }
// printInfo();
// printInfo();
// printInfo();


// **// function exprettion - doljno bit' ob'yavleno DO cvoego icpol'zovaniya

// const printName = function (name){
//     return `Hello ${name}`;
// }
// console.log(printName('Stan'))


// const printName = function (name){
//     console.log (`Hello ${name}`);
// }
// let printNew = printName;

// console.log(printNew)
// console.log(printName)



// ** ctrelochnaya function
// const printName = (name) => {
//   console.log ('Hello ${name}');
// }
// printName ('Stan')


// const printName = (name) => {
// let greeting = 'Hello ${name}';
// return 'Good morning' + greeting;
// }
// console.log(printName ("Stan"))
  

// const sum = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`
// console.log(sum(10, 20))



//** / callback function - function kotoraya peredaetcya kak argument drygoi function
// function addition (num1, num2){
//     return num1 + num2;
// }
// function substraction(num1, num2){
//     return num1 - num2
// }
//     function product(num1, num2){
//         return num1 * num2
//     }

// function result(num1, num2, callback){
//     return callback(num1, num2);
// }
// console.log(result(10, 20, product));
// console.log(product(30,50))

// const addition = (num1, num2) => {
//     return num1 + num2;
// }
// const substraction = (num1, num2) =>{
//     return num1 - num2
// }
// const  product = function (num1, num2) {
//         return num1 * num2
//     }

// function result(
//     num1, 
//     num2, 
//     product = function (num1, num2){
//     return product (num1, num2);
// }
// ){
// return product(num1, num2)
// }
// console.log(result(10, 20, product));



// const product = (num1, num2) => num1 * num2;

// function  result (num1, num2, product){
//     return product(num1, num2);
// }
// console.log(result(10, 20, (num1, num2) => num1 * num2))



// function  result (num1, num2, callback){
//     return callback(num1, num2);
// }
// console.log(result(10,20), (num1, num2) => num1 + num2);



// function result(callback, num1 = 5, num2 = 8, num3){
//     return callback(num1, num2, num3)
// }
// console.log(result((num1, num2, num3) => (num1 + num2) * num3, 10, 20, 30))



// function result(num1, num2, callback){
//     return callback(num1, num2);
// }
// console.log(result(10, 20, (a, b) => a + b))


// const newFunction = (a, b) => a + b + b / a + b;
// console.log(result('b', 'a', newFunction));
// console.log(result("c", "a", newFunction))



// function sum(){
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++){
// result += arguments[i]
//     }
// return  result;
// }
// console.log(sum(10, 40, 50, 30, 50))



