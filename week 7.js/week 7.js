//l objet = new Object();
// let user = {};

// let obj = {
//     name: 'Bob',
//     "age": 21
// }


// let user = new Object()
// let user1 = {
//     name: "John",
//     age: 30,
//     high_school: true,
// }
// console.log("original", user1);


// // value of age and name izmenenno
// user1.age = 20;
// user1.name = 'Bill';
// console.log("modified", user1);
// console.log(user1.high_school)


//dobavleno cvoictvo address:
// user1.address = {
//     city: 'SF',
//     state: 'CA',
//     country: 'USA',
// }
// user1.hello = "Hi"
// console.log("added new key - address and hello", user1);
// console.log(user1.address.state)

//================
//operator delete:
// delete user1.address.country // delete cvoictva coutry
// console.log("deleted ", user1);

// obrachenie k cvoistvam


//dobavlenie cvoictva
// cozdaem object
// const obj = {};
// console.log(obj)

// pricvaivaem znacheniya
// obj.name = 'Jess'; // cherz tochky arr[0] = "jess"
// console.log(obj);

// obj['likes read'] = true  //cherez ckobki []
// console.log(obj);

// obj['age'] = 28;
// console.log(obj)

// let carModel = 'mini'; // cherez peremennuyu
// let num = 2
// obj[carModel] = num;
// //obj['carModel'] = 3;
// console.log(obj)


//========= cozdanie oject c icpolzov peremennoi
// let name1 = "Anna";
// let age = 17
// const user = {
//     [name1]: name1,
//     age: age
// };
// console.log(user)


//==========
// obrachenie k cvoictvam objecta
// let arr = [1, 3, 5, 7]
// const customers = [
// {       // !!! array[0]
//     id: '01',
//     personalInfo { name: {first: 'John', last: 'Dow'},},},
// }
// ]

//cvoictva 1-go yrovnya - array elements
// console.log(customers.length);
// console.log(customers[0]);
// console.log(customers[1]);
// console.log(customers[2]);

// //cvoictva 2-go yrovnya - from array to object
// console.log(customers[0].id);
// console.log(customers[0]['id'])

// //cvoictva 3-go yrovnya
// console.log(customers[1].personalInfo.name);
// console.log(customers[1].personalInfo['dob']);
// console.log(customers[1]['personalInfo']['dob']);

//cvoictva 4-go urovnya
// console.log(customers[1].personalInfo.name.first);
// console.log(customers[1].personalInfo.contactInfo.email);



// let user = {
//     newKey: 'My Key',
// };
// console.log(user);
// console.log(user.age);
// console.log(user.newKey);
// console.log(user.name === underfined);// true oznachaet "cvoictva net"
// user.name = "Anna"


// // ===== cherez operator in check the Key
// let obj = {
//     firstName: 'Sofia',
//     lastName: 'I',
//     age: 35,
//     language: 'Java',
//     newKey: undefined,
//     9: false,
//     job: {name1 : "Olga", age1 : 23},
// }
// console.log('age1' in obj.job.newObj);  // can't check by value


// // =========Example
// // let userInfo = {
// //     name:
// // }


// // for... in
// for (let key in obj){
//     //key
//     console.log(key); // name, age, isAdmin

//     // znachenie key
//     console.log(obj[key]); // john, 30
// }



// // count salaries
// let salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// };

// let sum = 0;
// for(let key in salaries){

// }

// let obj = {
//    width: 200,
//    height: 300,
//    title: "My menu" 
// };

// function 

// // ======Metodi objects
// //object.keys, values, entries

// let user = {
//     name:"john",
//     age: 30,
//     isAdmin: true,
//     language: 'en',
//     home: 'apartment',
//     number: 6
// };

// // perebor znachenii - checking values
// for (let i of Object.keys(user3))




// =====review Svetlana
// let str = "Hello world, how are you"; //{1: 'H', 2: 'e', ....}
// for(let i=0; i < str.length; i++){
//     console.log(str[i])
// }

// for (let index in str )
// console.log(str[index])

// let arr = ["Sam", 56, true, false, 2, "Hello"];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
// for (let i in arr){
//     console.log(arr[i])
// }
// let person = {
//     name: 'Anna',
//     lastName: "Smith",
//     age: 20
// }
// for(let key in person){
//     console.log(person[key])
// }

// let newObject = {}
// for (let i = 0; i < str.length; i++) {
//  newObject[i+1] = str[i]
// }
// console.log(newObject)

// let newObject = {}
// for (let i = 1; i <= str.length; i++) {
//  newObject[i+1] = str[i]
// }
// console.log(newObject)

// let newObject = {}
// newObject["id"] = 2
// newObject["number"] = 3
// newObject["name"] = "John"
// newObject["key"] = "#3"
// delete newObject.name
// for (let i = 0; i <= str.length; i++) {
//  newObject[i+1] = str[i]
// }
// delete newObject[26]
// console.log(Object.keys(newObject))
// console.log(Object.values(newObject))
// console.log(newObject)
// console.log(newObject.name)


// function getCount(str) {
//     let vowels = "aeiou"
//     return str.split("").filter(el => vowels.includes(el))
//   }
//   console.log(getCount("abracadabra"))



// ======= Stan 04/08/2023====================================================
// default: a-z
// const arrNew = [
//     [1, 25],
//     [2, 2],
//     [1, 2],
//     [1, 205],
//     [3,4],
//     [1, 0],
// ];


// const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940];
// // etot method vozvrachaet new massiv
// let arrNew = arr.map(el => el ** 2)
// console.log(arrNew)


// const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940];
// let arrNew = arr.map(el => el % 3 == 0 ? el / 3: el)
// console.log(arrNew)


// const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940];
// let arrNew = arr.map((el, i) => i % 3 == 0 ? elsel % 3 == 0 ? el / 3 : el : el)
// console.log(arrNew)


// let arrNew = arr.map((el, i) => {
//     if (i % 3 ==  0 && el % 3 == 0){
//         return el / 3;
//     }
//     return el;
// })
// let arrNew2 = arr.map()

// console.log(arrNew);
// console.log(arrNew);



// const arr = [2, 6, 3, 5, 9];
// const result = arr.reduce((acc, el, i, arr ) =>)
// // acc = 0
// // el = 2, acc =  0 + 2 = 2
// // el = 6, acc = 2 + 6 = 8
// // el = 3, acc = 8 + 3 = 11
// console.log(result);


//======== Lidkin koncpekt:
// const arr = [2, 6, 3, 28, 9, [49, 57]];
// console.log(arr.reduce((sum, el, i) => sum + i % 2 ===1 ? el: -el, 0));
// console.log(arr[5].pop());

// const arr = [2, 6, 3, 28, 9];
// console.log(arr.every(el => el > 3));    // false
// console.log(arr.every((el, i) => i % 2 == 0 ? el > 0: el > 5))  //true
// console.log(arr.some((el => el > 27))) // true
// console.log(Array.of(2, 6, 3, 28, 9).every((el, i, arr) => (i % 2 == 0 ? el > 0: el > 9)));
// //console.log(
//     // Array.of(2, 6, 3, 28, 9).every((el, i, arr) => arr.reduce(sum, el) => sum + el, 0) - el);
// console.log(
//     Array.of(2, 6, 3, 28, 9).map((el, i, arr) => i % 2 == 0 ? arr.reduce((sum, el) => sum + el, 0) - el : ‘’));
//========================================
// const arr = [2, 6, 3, 28, 9];
// const newArr = [];
// console.log(arr.forEach(el => el > 3 ? newArr.push(el) : ' ');
// console.log(newArr);

//const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940, “:”, ‘>’, ‘;’]
//const arrStr = [‘a’, ‘bb’, ‘z’, ‘c’, ‘w’, ‘t’, ‘A’, ‘H’, ‘D’]
// const arrNew = [...arr, ...arrStr]
//arr.sort()
//sort() - DEFAULT A-Z  // v alphabet poryadke
//sort().reverse() - from Z-A
//arrStr.sort()
// ASCII table

//arrStr.sort().reverse();// sort menyaet massiv, chtobi sohranit” neobhodimo delat’ copy, sorvirovka v alfavitnom poryadke, rassmatrivaem kak stroki
//console.log(arr)
//console.log(arrStr)

// sortirovka po vesu==============
//const arrNew = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940];
//     [1, 2],
//     [2, 2],
//     [1, 2],
//     [1, 205],
//     [3, 4],
//     [1, 0],
// //];
//arr.sort((num1, num2) => num1 - num2);//diapazon m.b. (a,b), lyuboe
//arr.sort((num1, num2) => num2 - num1);// v obratnom poryadke
// arrNew.sort(([a,b], [c,d]) => a - c).sort();
// arr.sort((a, b) => a - b)
// console.log(arr)
// console.log(arrNew)

// const arrNew = [
//     [1, 2],
//     [2, 2],
//     [1, 2],
//     [3, 4],
//     [1, 0].
// ];
// arrNew.sort(([a, b], [c, d]) => a - c).sort(([a, b], [c, d] => b - d)
// console.assertlog(arrNew);


/// MAP - method =============
//const arr = [2, 6, 3, 27, 9, 56, 103, 1, 1001, 3940];
// const callback = (el, i) => {
//     if (i % 3 == 0 && el % 3 == 0){
//         return el / 3;
//     }
//     return el;
// }
//let arrNew = arr.map(el => el % 3 == 0 ? el / 3 : el) //(el**2); // esli delit’sya na 3, to vivevti, esli net, to vivodit’sya obichnii element
//let arrNew = arr.map((el, i)  => i % 3 == 0 ? el % 3 == 0 ? el / 3 : el: el);
//let arrNew2 = arr.map(callback);
// console.log(arrNew);
// console.log(arrNew2)


// const arr = [‘Stan’, ‘Java Script’, ‘06’];
// const arr1 = [2, 6, 3, 27, 9];
//const result = arr.reduce((acc, el, i, arr) => i == 0 ? acc + el: acc + ' ' + el, ‘’)
//const result = arr.reduce((acc, el, i, arr) => el.length + acc, 0)
//const result = arr1.reduce((acc, el, i, arr) => i % 2 == 0 ? acc + el : acc, 0)
// acc = 0,
// el = 2, acc = 0 + 2 = 2
// el = 6, acc = 2 + 6 = 8
// el = 3, acc = 8 + 3 = 11
//console.log(result)
//==================================
//const arr = Array.from(“JavaScript”, el  => ‘*’ + el + ‘*’); // same as line 54
//const arr = Array.from(“JavaScript”).map(el  => ‘*’ + el + ‘*’);

//const arr2 = Array.of(1, ‘str’, NaN, true, undefined);
// console.log(arr);
// console.log(arr2);

// Array.isArray()
// console.log(Array.isArray(arr2))

// const arr1 = [1, null, 3];
// const arr2 = [1, undefined, 3];
// console.log(arr1.toString(), arr2.toString());
// console.log (arr1.toString() == arr2.toString());
// console.log(JSON.stringify(arr1), JSON.stringify(arr2));
// console.log(JSON.stringify(arr1) == JSON.stringify(arr2));

// const compareArrays = (arr1, arr2) => {
//     return arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i])
// }
// console.log(compareArrays(arr1, arr2));
//==================================================
// const str = ‘Stan’;
// console.log(typeof str);
// const strNew = new String(‘Stan’)
// console.log(strNew)
// console.log(typeof strNew)
// console.log(str == strNew);
// console.log(str === strNew);

// const str = ‘Stan’;
// const str1 = ‘JS’;
// const str2 = ‘06’;
// console.log(str.concat(' ‘, str2, ’ ’, str1));
// const bb = new Boolean ('ff') //true
// const bb = new Boolean ('') // false
// //const bb = Number(‘44’); // klass obertki //wrap 
// //console.log(bb);

// padStart(length, otherStr)
// const str3 = str.padStart(9, '_')// cenniki v magazine
// const str3 = str.padStart(9, ‘***’); // dopolni 5 simvolov k slovu Stan chto bi bilo 9 simvolov
// const str4 = str1.padStar(20, " ")
// console.log(str3);
// console.log(str4);
// console.log(str3, '2.00')
// console.log(str3, '4.00')

// padEnd
// const str3 = str.padEnd(20, 'Stan')
// console.log(str3)

///================================ Stan 04.09.2023
// const str = 'potato';
// const str1= 'blueberies';
// const str2= '06';
// IndexOf('o')
// // console.log(str.indexOf('o', 2))
// const arr = [];
// let count = 0;
// let pos = str.indexOf('o')

// while (pos !== -1){
//     arr.push(pos);
//     count++
// pos = str.indexOf('o', pos + 1)
// }
// console.log(arr, count)

// const arr = [];
// let count = 0;
// let pos = str.lastIndexOf('o')

// while (pos !== -1){
//     arr.push(pos);
//     count++
// pos = str.lastIndexOf('o', pos - 1)
// }
// console.log(arr, count)

// metod start with========
// const str = 'Potato white'
// console.log(str.startsWith('white', 7));

// console.log(arr, count);

//ends with=================
// console.log(str.endsWith('white '));

//substring===========
// console.log(str.substring(0, 5));
// console.log(str.substring(7));
// console.log(str.substring(str.length - 3));
// console.log(str.substring(5, 3).split('').reverse().join(''))

//=============slice
// console.log(str.slice(-9))

//============replace
// console.log(str.replace('o', '0'))
// console.log(str.replace(/[a-z]/g, ''))

// const str4 = '(123) 123-4567'
// console.log(str4.replace(/[0-9]/g, '*'))

////=============replaceAll

///===================split
// console.log(str.split("", 4))
// console.log(str.split(""))

//====================charCode
// const arr = []
// let strRes = ''
// for (let i = 0; i < str.length; i++){
// // console.log(str.charCodeAt(i))
// arr.push(str.charCodeAt(i))
// }
// console.log(String.fromCharCode(80))
// // console.log(arr)


//=======================// Objects
// let obj = {};
// let str = 'JavaScript'

// obj['lastName'] = 'P.';
// obj['firstName'] = 'Stan';

// let objNew = new Object();
// console.log(obj, objNew)

// obj[1] = 'Java'
// obj['type'] = "JS"   // key always string
// console.log(obj);

// for (let letter of str){
//     obj[letter] = letter;
// }
// console.log(obj)
// console.log(obj['name'])
// for (let i = 0; i < str.length; i++){
    // obj[i] = str[i];
    // obj[`key_$(i)`] = str[i]
//      obj[`key_$(i)`] = str[i].repeat(i)
// }
// console.log(obj)

// const log = console.log
// let obj = {
// arr: [10, 20, 30],
// obj: {a: 'abc', b: 'cbd'},
// 100: 1000,
// func: (x, y) => x + y
// };
// let str = 'JavaScript'

// obj['lastName'] = 'P.';
// obj['firstName'] = 'Stan';
// obj['class'] = "JavaScript"
// log(obj.func(10, 20))
// log(obj)
// log(obj['firstName'])
// log(obj.firstName)
// log(obj['lastName'])


//======== delete - operator ydalyaet cvoictva
// delete obj.func
// log(obj.func)

// obj.func = x => x * x;
// log(obj)

// const str = "JavaScript"
// for (let i = 0; i <= 10; i ++){
//     log({i})
// }

// const str = "JavaScript"
// for (let i = 0; i <= 10; i ++){
//     log({i, str})
// }

// const log = console.log;
// let obj = {
// arr: [10, 20, 30],
// obj: {
//     a: 'abc', 
//     b: {11:'cbd', 12: 1, 13: [10, 30, 50], 40: 4}
//     c: 'bdc'
// },
// 100: {firstName: "stan", lastName: "P"},
// func: (x, y) => x + y,
// z: "string",
// };
// log(obj.obj_1.b['13'][2].slice(1, 2))
// log([10, 20, 30][1])

// log(obj.w === undefined ? 'key is not present' : 'key is present') //better don't used
// log('w' in obj) // proverka nalichie key v ob'ekte


//====================for itch // perbirayutcya only key 1st levela
// for (let key in obj){
    //log(key)
    // log(key, obj[key])
// }
// for (let key in obj){
//     if (key == 'func'){
//         log(obj[key](10, 50));
//     }
// }

// for (let key in obj){
//     if (key == 'obj_1'){
//    for (let key1 in obj[key]){
//     log(key1)
//    }
//     }
// }

// obj['key'] === obj.key
// obj[key] // its not a key
// let arrNew = [obj, {'newObj' : obj }]
// log(arrNew[1].newObj.obj_1.b['13'][2])
// log(arrNew[0]['100'].firstName)

//================
//Object.keys() / Object.values() / Object.entries()
// const log = console.log;
// let obj = {
//     name: 'Stan',
//     teacher: 'Yes',
//     language: "JavaScript"

// }
// log(Object.keys(obj));
// log(Object.values(obj));
// log(Object.entries(obj))
//}

// const log = console.log;
// let arr = [{4: 'cat'}, {7: 'She'}, {'-2': 'Serj'}, {5: 'for'}];

// log(arr.sort((a, b) => Object.keys(a) - Object.keys(b)))
// log(arr.sort((a, b) => Object.keys(a) - Object.keys(b)).map(obj => Object.values(obj)))
// log(arr.sort((a, b) => Object.keys(a) - Object.keys(b)).map(obj => Object.values(obj).join(' ')))


// const log = console.log;
// let str = "The charCodeAt() method returns an integer between ) abd 65535"
// const obj = {};

// for(letter of str){
// if (letter in obj){
//     obj[letter]++
// } else {
//     obj[letter] = 1;
// }
// }
// log(obj)
// for (key in obj){
//     log(key)
// }
// log(Object.entries(obj).sort((a, b) => b[1] - a[1]))
// log(Object.entries(obj).sort((a, b) => b[1] - a[1]).map(el => `${el[0]} - ${el[1]}`))

// log(Object.entries(obj).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(el => `${el[0]} - ${el[1]}`))


// const user = {
//     firstName: 'Stan',
//     lastName: 'P',
// }
// Object.defineProperty(user, 'SSN', {value: 'XXX-XX=XXXX', enumerable: true})
// user.firstName = 'Jane'
// delete user.SSN
// console.log(user);
// console.log(Object.keys(user));

// const user = {
//     firstName: 'Stan',
//     lastName: 'P',
// }
// Object.defineProperty(user, 'SSN', {
//     value: 'XXX-XX=XXXX', enumerable: true, configurable: false, writable: true})
// user.firstName = 'Jane'
// user.SSN = 'xxxxxxxxxxx'
// console.log(user);
// console.log(Object.keys(user));

//Nalya 04.11//==============================