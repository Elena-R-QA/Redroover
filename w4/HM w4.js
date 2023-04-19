// // // // Нарисуйте ромб
// // console.log("1)===========")
// // let newStr = ''
// // for (let i = 1; i<= 5; i++){
// //     for(let j =1; j<= i; j++){

// //     newStr += j
// // }
// // newStr += '\n'
// // }
// // console.log(newStr)


// // console.log("2)===========")
// // let newStr2 = ''
// // let x = 5
// let space = ' '
// // for (let i = 1; i<= x; i++){
// //    newStr2 += space.repeat(x - i)
// //    for(let j = 1; j<= i; j++){
// //     newStr2 += j
// //    }
// //    newStr2 += '\n'
// // }
// // console.log(newStr2)


// // console.log ("3)=============")
// // let row = ""
// // for (let i = 1; i <= 5; i++){
// //     row+= i
// // }
// // console.log(row)

// // console.log ("4)=============")
// // let newStr4 = ""
// // for (let i = 1; i<= x; i++){
// //     newStr4 +=space.repeat(i - 1)
// //     for (let j = 1; j <= x + 1 - i; j++){
// // newStr4 += j
// // }
// // newStr4 += '\n'
// // }
// // console.log(newStr4)


// // console.log("5)==========")
// // let newStr5 = ''
// // for (let i = 1; i <=x; i++){
// //     for (let j = x + 1 - i; j>= 1; j--){
// //         newStr5 +=j
// //     }
// //     newStr5 += '\n'
// // }
// // console.log(newStr5)

// // console.log("5-2)=============")
// // console.log('54321' + '\n'
// //             + '4321' + '\n' 
// //             + '321' + '\n'
// //             + '21' + '\n'
// //             + '1' + '\n') 

// //  console.log("7)==========") 
// //  let pyramid = ''
// //   for (let i = 1; i <= x; i++){
// //     pyramid += space.repeat(x - i)
// // for  (let j = 1; j <= i; j++){
// //     pyramid += j
// // }
// // for (let j = i - 1; j>= 1; j--){
// //     pyramid += j
// // }
// // pyramid += '\n'
// //   }   
// //   console.log(pyramid)


// //   console.log("8)===========")

// let romb  = ''
// x=10
// for (let i = 1; i <=x; i++){
//     romb += space.repeat(x - i)
//     for (let j = 1; j <= i; j++){
//         if (j==10){
//         romb += 0
//     } 
//     else romb +=j
//  romb += j
// }
// for (let j = i - 1; j >= 1; j--){
// romb += j
// }
// romb +='\n'
// }

// x = 9
// for (let i = 1; i <= x; i++){
//     romb += space.repeat(i)
//     for(let j = 1; j<= x + 1 -i; j++){
//         romb += j
//     }
//     for (let j = x -i; j>= 1; j--){
//         romb += j
//     }
//     romb += '\n'
// }
// console.log(romb)



// // // Нарисуйте елочку
// console.log("Number- 2)==========")
// let pyramid2 = ''
// x = 5
// space = ' '
// let sum = 1
// for (let i = 1; i <= x; i++) {
//     pyramid2 += space.repeat(x - i) + "*".repeat(sum) + '\n'
//     sum += 2
// }
// console.log(pyramid2)


// Нарисуйте треугольник
// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15

// console.log("Challenge- 3)==========")
// let str = ''                            
// x = 5
// let space = ' '
// for (let i = 1; i <= x; i++){          
//     let num = i
//     for(let j = 1; j <= i; j++){
//         str += num + space
//         num = num + (x - j)
//     }
//     str += '\n'
// }
// console.log(str)


// Продумайте код для создания сэндвичей с 3-мя начинками и выставите цену в зависимости от вида начинки. Используйте while and do.. while loops” - это задание с предыдущего потока, его разбор есть в видео, можете не делать, по желанию)

// let bread = "wholeWheat bread";
// gluten free
// let cheese = "American cheese";
// vegan cheese
// let turkey = "Smoked turkey";
// let salmon = "Wild salmon";
// tuna
//chicken
// fresh salad
// soys ranch
// let salami = "salami";
// let prompt
// let ask

// let turkeySandwich = "sandwich with turkey";
// let salamiSandwich = "sandwich with salami";
// let salmonSandwich = "sandwich with salmon"

//  prompt = 'Would you like to order?'
// while(ask != "yes"){
//     ask = prompt('Would you like to order?')
// }
// let askToppings = prompt('Choose from bellow topings: turkey - 1, salami - 2; salmon -3')

// if (askTopping == 1){
//     topping = turkey
//     sandwich = turkeySandwich
// }
// else if (askTopping == 3){
//     topping = salami
//     sandwich = salamiSandwich
// }
// else {
//     topping = salmon
//     sandwich = salmonSandwich
// }
// let step1 = `1. Take a pice of $(bread)`
// let step2 = `2. Take a slice of $(cheese)`
// let step3 = `3. Put cheese on bread`
// let step4 = `4. Take a slise of $(toppings)`
// let step5 = `5. Put $(topping) on $(cheese)`
// let result = `Your $(sandwich) is ready!`
 
// document.write(`Recipe for $(sandwich) <br> + "<br>" + step1 + "<br>" + step2 + "<br>" + step3 + "<br>", "<br>", result, "<br>`)

// let price = 15
// if (topping == salmon){
//   document.write("Order price is: $" + price * 2)}
// else {document.write("Order price is: $ + price")}



// Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 

// let dayDistance = 3;
// let nightDown = -2
// let distance = 0
// let days = 0
// let wall = 5

// while ((distance += dayDistance) <= wall){
//     days++
//     console.log(`Current distance at the end of the day ${days} is ${distance} meter(s)`)
// if (distance == wall) console.log('Finish')
// else console.log('Go forward')
// distance += nightDown
// }


// Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘(’, ‘(’, ‘), ‘}‘, ‘(’, ‘)’, ')'] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.

// let countOpen = 0
// let countClose = 0
// let result = 0
// let myArr = ['(',')', '(', '(', '(', ')', '}','(', ')', ')']
// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] == '(') countOpen += 1
//     else if (myArr[i] == ')') countClose += 1
//     result = countOpen - countClose
//     console.log(result)
//     if (result < 0){
//         console.log("Wrong sequence")
//         break
//     }
// }
// if (countOpen == countClose){
//     console.log('equal')
// }
// else if(countOpen > countClose)
// console.log('not equel')


// ================ VAR 2
// let countOpen = 0
// let countClose = 0
// let result = 0
// let myArr = [')', '(', '(', '(', ')', '(', ')', ')', '(', ')']

// for (let i in myArr){
// if (myArr[i] == '(') result++
// else if (myArr[i] == ')') result --

// if(result < 0){
//     console.log("Wrong sequence")
//     break
// }
// }


// Внедрите в свой код про кофе цикл, там, где это может понадобиться. 
// Добавьте комментарии в код с пояснениями изменений, зачем они нужны.
// Продумайте на будущее план развития своего кода с кофе, где в реальной 
// жизни он мог бы быть использован. Начните создавать мини-документацию к 
// своему проекту. Пропишите требования так, как вы хотели бы их видеть на 
// своем проекте и чтобы посторонний человек мог в них разобраться. 
// Скорее всего, что-то придется добавить или изменить позже.

let cupSize;
let smallCup = "small cup";
let mediumCup = "medium cup";
let largeCup = "large cup"
let water;
let hotWater = "hot water";
let coldWater = "cold water";
let price = 3;
let coffeeType;
let cappuchino = "Cappuchino";
let coffee = "Coffee";
let icedCoffee = "IcedCoffee";
let americano = "Americano";
let espresso = "Espresso"

console.log("Welcome to our cafe!")
console.log("We have different cup sizes. Please, choose one:\n")

let cupSizes = [smallCup, mediumCup, largeCup]
for (let i in cupSizes){
    if (cupSizes[i] == smallCup){
     console.log(cupSizes[i] + '-' + price + '$')   
    }
else if (cupSizes[i] == mediumCup){
    console.log(cupSizes[i] + ' ' + price * 2 + '$')
}
else if (cupSizes[i] == largeCup){
    console.log(cupSizes[i] + ' ' + price * 2.5 + '$')
}
if (i == cupSizes.length - 1){
    console.log('\n')
}
}
let cappuchino = `${cappuchino}:\n 1 spoon of ${coffee} \n $ {hotWater} \n milk`
let hotCoffeeIngridients = `${hotCoffee}: \ n 1 spoon of coffee \n {hotWarer} \n milk`

console.log('We have following coffe types: \n')

for (let i = 0; i < menu.length; i++){
    console.log(menu[i])
}

coffeeType = icedCoffee;
cupSize = smallCup;

if (coffeeType == icedCoffee){
    water = coldWater;
} else {
    water = hotWater
}
if(cupSizes == mediumCup){
    price *= 2
}
else if (cupSize == largeCup){
    price *= 2.5
}


let order = `You choosed a ${cupSize} of ${coffeeType} \n Follow the steps:`
let step1 = `1. Take a ${cupSize}`;
let step2 = "2. Put 1 spoon of coffee in it";
let step3 = `3. Pour ${water} in a cup with coffee`;
let step4 = "4. Pour milk in a cup of coffee";
let step5 = "5. Stir coffee in a cup with spoon";
let orderPrice = `The order price is ${price}$`;
let result = "Enjoy your coffee!!";


let recipe = [step1, step2, step3, step4, step5]
let clientRecipe = ' '
