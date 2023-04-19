// ================= Stan 04.15   OOP
// let str = 'Some string';
// console.log(str);

// let strNew = new String('Something new');
// console.log(strNew)

// let str = 'Some string';
// console.log(str.length);

// ob'ekt nabor cvoictv
let log = console.log;
// let obj = {};
// obj.name = 'Anna';
// obj.occupation = 'student';
// obj.introduce = function(){
//     log(`Hello, I'm ${this.name}`);
//     log(`I'm a ${this.occupation}`)

// }
// log(obj.introduce())

// let objNew = {
// name: 'Anna',
// occupation:'student',
// introduce: function(){
//         log(`Hello, I'm ${this.name}`);
//         log(`I'm a ${this.occupation}`);  
// },
// },
// log(objNew)


let obj1 = {
    name: 'Serj',
    age: 32,
    show: function(){    //show - name of key
        return(`Name: ${this.name}, age: ${this.age}`)
    },
    occupation: 'Teacher'
};


// let obj2 = {
// __proto__: obj1,
//     occupation: 'Teacher',
//     show(){
//         return(`Name: ${this.name}, age: ${this.age}`, occupation)
       
//     }
// };

// let obj3 = {
//     rewards: [2022],
//     __proto__: obj2
// }
// log(obj2);
// log(obj1)
// log(obj1.name);
// log(obj1.age);
// log(obj2.rewards);
// log(obj3.show());
// log(obj2.valueOf())


//function costructor =====================
// function Person(name, occupation){        //body function
// this.name = name;
// this.occupation = occupation;   // nabor cvoictv
// this.introduce = function(){
// log(`Hello, I'm ${this.name}`);
// log(`I'm  a ${this.ocuppation}`);
// } 
// }
// let person3 = {name: 'Serj', occupation: 32};
// let person1 = new Person('Anna', 24);
// let person2 = new Person('Serj, 32');
// log(person1); 
// log(person2);
// log(person3);
// log(person3 instanceof Person);

// function Person(name, occupation){        //body function
//     this.name = name ?? 'Unknown'
//     this.occupation = occupation ?? 'unemployed';  
//     this.introduce = function(age){
//     log(`Hello, I'm ${this.name}`);
//     log(`I'm  a ${this.ocuppation} and I'm ${age}`)
//     } 
//     }
// let person1 = new Person('John');
// log(person1);
// log(person1.name);
// log(person1.occupation);
// person1.introduce(69)


// function Person(name, age){        
//     this.name = name ?? 'Unknown'
//     this.age = age; 
//     this.introduce = function(){
//     log(`Hello, I'm ${this.name}`);
//     log(`I'm ${this.age}`);
//     } 
//     }
//     function Worker(name, age, occupation){        //polimorfizm - pereznachit' znachenie metoda
//  Person.call(this, name, age);         //this 
//  this.occupation = occupation;
//     this.officialGreeting = function(){
//     log(`let me introduce myself, I'm ${this.name}`);
//     log(`I'm working as a ${this.occupation}`);
//     }; 
// }

// // let p1 = new Person('Anna', 17);
// // let w1 = new Worker('John', 45, 'teacher');

// // log(w1)
// // w1.officialGreeting()
// // w1.introduce()


// function Manager(name, age, occupation, role){
//     Worker.call(this, name, age, occupation);
//     this.role = role;
// }
// let p1 = new Person('Anna', 17);
// let w1 = new Worker('John', 45, 'teacher');
// let m1 = new Manager('Maria', 32, 'teacher', 'principal')

// log(w1)
// w1.officialGreeting()
// // w1.introduce()
// m1.introduce()


//=======================
// class Person_1 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// introduce(){
//     log(`Hello I'm ${this.name}`);
//     log(`I'm  ${this.age}`);
//     }
// }
// let p2 = new Person_1('Olga', 23);
// p2.introduce();

// function Person(name, age){
//     this.name = name ?? 'Unknown';
//     this.age = age;''
//     //this.occupation = occupation ?? ‘unemployed’;
//     this.introduce = function(age){
//     log(`Hello, I’m ${this.name}`);
//     log(`I’m a ${this.age}`);
// }
// }
// class Worker_1 extends Person_1 {
//     constructor(name, age, occupation){
//         super(name, age);
//         this.occupation = occupation;
// }
// introduce (){  //method
//     super.introduce()
//         log(`Hello, I'm ${this.name}`);
//         log(`I'm working as a ${this.occupation}`);
// }
// }
// let w2 = new Worker_1('Serj', 65, 'Teacher');
// w2.introduce();
// class Manager_1 extends Worker_1 {
//     constructor (name, age, occupation, role) {
//         super (name, age, occupation);
//         this.role = role;
//     }
//     introduce() {
//         super.introduce()
//         log(`Hello, I'm ${this.name}`);
//         log(`I'm working as a ${this.occupation}`);
//         log(`I'm working as a ${this.role}`);
// }
// }
// let m2 = new Manager_1('Anton', 43, 'teacher', 'principal');
// m2.introduce();









