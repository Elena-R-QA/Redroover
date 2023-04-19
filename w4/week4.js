
// let i = 0
// while (i < 3) {
//     console.log(i);
//     i++
// }

// let i = 7
// while (i != 0){
//     console.log(i);
//     i--
// }


// const fruits = ['apple', 'pears', 'plums', 'grape']
// let i = 0
// while (i < fruits.length){
//     console.log(fruits[i])
//     i++
// }


// let str = "Hello world it's me!"
// //         01234567890123456789  index
// let result = []
// let arr = ['a', 'Anna', 'Stan','Peter, 'Robert', 'b', ['o', 'dom', 'hello', 'world', 4, 8, 'true']]
// // index           1              3                                 6
// // j             0123           012345                   0       1         2
//     for (let i = 0; I < arr.length; i++) {
//        for (let j = 0; j< arr[i].length; j++){
//     if (arr[i][j] === 'o'){
//         // console.log(arr[i])
//         result.push(arr[i])

//     }
//     }
//     // if (arr[i] === "o") {
//     //     console.log(str[i]);
//     // }
//     // console.log(str[i])
// }
// console.log(result)
// //  console.log(arr[3][2])
// // console.log (arr[6][3]).length)


// let str = "Hello world it's me!"
// //         01234567890123456789  index
// let result = []
// let arr = ['a', 'Anna', 'Johno','Peter, 'Robert', 'b', 12, ['o', 'dom', 'hello', 'world', 4, 8, 'true']]
// // index    0       1       2       3                                 6
// // j             0123           012345                       0       1         2
//     for (let i=0; i< arr.length; i++){

//         if(typeoff arr[i] === 'number'){
//             result.push(arr[i])
//         // }  else {
//             for (let j=0; j< arr[i].length; j++){
//                 if (typeof arr [i][j] === 'number'){
//                     result.push(arr[i][j])
//                 }
//             }
//         }
//     }
//     console.log(result)




// let result = []
// let arr = ['a', 'Anna', 'Johno','Peter', 'Robert', 'b', 12, ['o', 'dom', 'hello', 'world', 4, 8, 'true']]

// for (let i = 0; i=arr.length-1; i++){
// console.log(arr[i])
// }




// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)


// function findNeedle(array){
//     return "found the needle at position"
// }
// function findNeedle(haystack){
//     for (let i in haystack){
//         if (haystack[i] == 'needle'){
//             return "found the needle at position" +1}
//     }
// }


// function isDivideBy(number, a, b)
// {
//     if (number % a==0 && ((number % b )==0)){
//         return true
//     }
//     return false
// }




// let arr = [];
// arr [0] = 10;
// arr [10000000] = 1;
// console.log(arr)

// 


// let name;
// name = name ?? "Guest"
// if (name) {
//     console.log(name);
// }

// let name;
// name = name || 0
// console.log(name)
// if (name) {
//     console.log(name);
// }


// let num = -10;
// console.log(Math.abs(num));


// let num = -16
// console.log(Math.sign(num))

// let num = 0
// // math.round(), floor(), ceil(), .trunc()
// console.log(Math.sign(num))

// if (num < 0){
//     console.log(-1)
// }
// console.log(num < 0 ? -1 :0)


// let num = 6.77904
// console.log(Math.ceil(num))
// console.log(Math.floor(num))
// console.log(Math.trunc(num))

// let num = 6.98
// // num.toFixed(param)
// console.log(num.toFixed(2) * 1 + 10)

// let newNum = num.toFixed(2)
// console.log(typeof newNum)
// console.log(0.1 + 0.2)
// console.log(newNum * 1 + 0.1)



// for(let i = 0; i <=1; i+=0.1){
//     console.log(i);
// }

// let tr = "561563.687-som"
// console.log(parseFloat(tr))


// let a = 'a', b = 'b'
// console.log(b + a)

// let a = 'a', b = 'b'
// console.log(b + a + b/a + a )

// let a = 0, b = 7
// console.log(b + a + b/a +a)


// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }


// let name = "Stan";
// console.log(name)


// let name = "Stan";
// console.error(name)

// for (let i = 0; i<= 10; i++){
//     if (i == 5){
//         console.error(i)
//  } else {
//     console.log(i)
//  }
// }
// console.log(`%c${className}`, 'color: blue; font-size: 48px')


let className = 'JavaScript'
let result = 0

// console.time()
// for(let i= 0; i< 1000000000; i++){
//     result++
// }
// console.timeEnd()

// console.time()
// for(let i= 0; i< 1000000000; i++){
//     result++
// }
// console.timeEnd()

// console.time('timer2')
// for(let i= 0; i< 1000000000; i++){
//     result++
// }
// console.timeEnd(timer2)


// let name = ['JavaScript', 'Java'];
// console.table(name)

// let name = ['JavaScript', 'Java', [1,2,3], false];
// console.table(name)

// let name = [[1, 2, 3],[2,4,6], [3,6,9]];
// console.table(name)



// const arr = [12, 46, 2, 39, 4298, 645];
// console.log(arr)

// for (let i = 0; i < arr.length -1; i++){
//   for (let j = i + 1; j < arr.length; j++){
//     if(arr[i] > arr[j]){
//  let temp = arr[i];
//   arr [i] = arr [j]
//   arr[j] = temp
//      }
//   }
// }
// console.log(arr)