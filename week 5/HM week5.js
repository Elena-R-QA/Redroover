let cupSize;
let smallCup = "small cup";
let mediumCup = "medium cup";
let largeCup = "large cup"
let water;
let hotWater = "hot water";
let coldWater = "cold water";
let price = 3;
let coffeeType;
let cappuchino = "cappuchino";
let coffee = "Coffee";
let icedCoffee = "IcedCoffee";
let sugar = "1 spoon of sugar"
let milk = "milk"

function showWelcomeMessage(){
console.log("Welcome to our cafe!")
console.log("We have different cup sizes. Please, choose one:\n")
}

function showCupsSizes(){
    let smallCup = "small cup";
    let mediumCup = "medium cup";
    let largeCup = "large cup"  
        let price = 3; 
    }

    let cupsSizes = [[smallCup, price], [mediumCup, (price * 1.5)], [largeCup, price * 2]]
for (let i = 0; i < cupsSizes.length; i ++){
console.log (cupSizes[i][0] + '-' + cupSizes[i][1] + '$')
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
}

function showCoffeeTypesAndIngredients(){
    let hotWater = "hot water";
    let coldWater = "cold water";
    let cappuchino = "cappuchino";
    let hotCoffee = "hotCoffee";
    let coffee = "Coffee";
    let icedCoffee = "IcedCoffee";


let cappuchinoIngridients = `${cappuchino}:\n 1 spoon of ${coffee} \n ${hotWater} \n milk`
let hotCoffeeIngridients = '${hotCoffee}: \n 1 spoon of ${coffee} \n {hotWarer} \n milk \n'

console.log('We have following coffe types. Please, choose one: \n');
let menu = [cappuchinoIngridients, hotCoffeeIngridients]

for (let i = 0; i < menu.length; i++){
    console.log(menu[i])
}
}
function setWaterForCoffee(coffeType){

if (coffeType.toLowerCase() == 'icedCoffee'){
   return water = 'coldWater';
} else {
    return water = 'hotWater';
}
}


function getCupPrice(cupSize){
    let price = 3
    if (cupSize == "small"){
        return price
    }
else if(cupSize == "medium"){
    return price * 1.5

} else if (cupSize == "large"){
    return price *= 2.5
}
}


function showRecipeToClient(cupSize, coffeeType, milk = 'almond' ){
let water = setWaterForCoffee(coffeeType)
price = getCupPrice(cupSize)


let order = `You choosed a ${cupSize} of ${coffeeType} \n Follow the steps:`
let step1 = ` Take a ${cupSize}`;
let step2 = " Put 1 spoon of coffee in it";
let step3 = `Pour ${water} in a cup with coffee`;
let step4 = `Pour ${milk} in a cup of coffee`;
let step5 =  "Stir coffee in a cup with spoon";
let orderPrice = `The order price is ${price}$`;
let result = "Enjoy your coffee!!";


let recipe = [step1, step2, step3, step4, step5]
let stepNum = 1
let clientReciepe = ' '
for (let i = 0; i < recipe.length; i++){
    if(isLactoseFree == true && recipe[i] == step4) continue
    clientRecipe = clientRecipe + (stepNum ++) + recipe[i] + '\n'
}
console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result)
}


function showMessage(message, name){
    message = "Welcome to our coffee!"
    name = "Elena\n"
    return message + name
}
console.log (showMessage())


function greetCustomer(name){
    let greetings = `Hi, ${name}! \n Welcome to our coffee!\n`
    console.log(greetings)
}
greetCustomer("Elena")


// ======================
showWelcomeMessage()
showCupsSizes()
showCoffeeTypesAndIngredients()

showRecipeToClient('small', 'cappuchino', true)



// let arr = [1, 2];
// let arr1 = ["a", "b"]

// console.log(arr == arr1)
// console.log(arr > arr1)
// console.log(arr < arr1)

// const a = [1, 2, 3]
// const b = [1, 2, 3]

// const a1 = [1, 2, 7]
// const b1 = [1, 2, 7]

// console.log(JSON.stringify(a1) == JSON.stringify(b1)) // compare string
// console.log(JSON.stringify(a1))
// console.log(b.toString() === a.toString())
// let z = JSON.stringify(a1)
// console.log(z)


let arr = [0, 2, 3]
let emptyArr = []
emptyArr.push (1, 5, 7)
emptyArr.push (1, 3, 5, "f")
emptyArr[0] = "A"
console.log(emptyArr)
console.log(String(arr, "/", String(emptyArr)))
console.log(Number(arr), Number(emptyArr));
console.log(Boolean(arr), Boolean(emptyArr));