// Задача с интервью 
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
// console.log ("___________________________")
// console.log ("Task 5") 
// let str = [ '(', ')', '(', ')', ')'];
// let sum1 = 0;

// for (i = 0; i < str.length; i++){
//   if ( str[i] == '(' && str[++i] == ')' ) {
//     sum1 = sum1 + 1;
//     console.log(  sum1 + " скобки закрыты")}
//   else {console.log( (sum1+1) + " скобки не закрыты")}
//   }


//   function abbrevName(name){
//     name = name.charAt().toUpperCase();
//   let fullName = "" + name.charAt(0);
//      for (let i = 2; i < name.length; i++) {
//        if (name.charAt(i) ==" ") {
//          fullName += "." + name.charAt(++i); 
//          continue;
//         }
//       }   
//     return fullName;
//   }


//   console.log(isValidBrackets('{[(({}])]()}'))



//========================================
// Задача с интервью 
// let array = [1, 3, 78, 45, 61, 100, 1, 0];
// let result = 0;
// let sum = array.reduce((acc, currVal) => acc + currVal, 0);
// let sum = array.reduce((acc, currVal) => acc * currVal, 1);
// console.log(sum);

// let array = [1, 4, 4]
// let sum = array.reduce((acc, currVal, index, array) => acc + currVal / array.length, 0);
// console.log(sum);


// let array = [-1, -4, -5, -100, -564, -43, -98];
// let maximum = array.reduce((acc, currVal, index, array) => Math.max(acc, currVal), -Infinity);



// let max = array.reduce((acc, el) => acc < el ? acc = el : acc = acc)
// console.log(max);


// let array = ['spring', 'summer', 'autumn', 'winter']
// let max = array.reduce((acc, currVal, index, array) => acc + ' ' + currVal);
// console.log(max)

// let array = [[1,3]], [1, 2], [1, 2]];
// let max = array.reduce((acc, currVal, index, array) => acc.concat(currVal), []);
// console.log(max)


//=============================
const logss = [
    {action: 'A', userId: 1},
    {action: 'A', userId: 1},
    {action: 'A', userId: 2}, // if ABC return userId
    {action: 'A', userId: 3},
    {action: 'A', userId: 1},
    {action: 'B', userId: 1},
    {action: 'B', userId: 1},
    {action: 'B', userId: 2},
    {action: 'B', userId: 3},
    {action: 'A', userId: 3},
    {action: 'C', userId: 3},
    {action: 'C', userId: 2},
    {action: 'C', userId: 1},
    {action: 'B', userId: 1},
    {action: 'C', userId: 1}
  ]

//   const abc = {1:'ABC', 2:'CBA', 3:'BAC'}
let abc ={}
for (let i = 0; i < logss.length; i++){
    let key = logss[i].userId
    if (key in abc){
abc[key] += logss[i].action
    } else{
        abc[key] = logss[i].action   
    }
}
 for (let key in abc){
if (abc[key].includes('ABC')){
    console.log('User ID = ' + key)
}
 }
// console.log(abc)



