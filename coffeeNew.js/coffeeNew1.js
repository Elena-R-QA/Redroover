const cappuchino = 'Cappuchino';
const americano = 'Americano';
const hotWater = 'Hot water'

class coffee {
    constructor(coffeeName, ...){
this.coffeeName = coffeeName,
this.water = 'hot water',
this.milk = 'whole milk'
     }
}

getCoffeeName(coffeeName) {
    this.coffeeName = coffeeName
    return coffeeName
}

setCoffeeRecipe(){

}

setCoffeePrice(){
if (this.cupSize == 'medium') {
    this.price *= 1.5
}
else if (this.cupSize == 'big'){
    this.price *= 2
}
return this.price
}

