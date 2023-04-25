// let isNothingHappened = false; //true || false

// let willPassExam = new Promise(function(resolve, reject){
// if(isNothingHappend){
//     let message = 'I got a diploma';
//     resolve(message);
// } else {
// let reason = new Errror ('Oops, something happened');
// reject(reason);
// }
// });


// let getNewJob = function(diploma){
//     return new Promise(function(resolve){
//         let message = `I got a new job because ${diploma}`;
//         resolve(message);
//     });
// };
// let checkEvents = function(){
//     willPassExam
//     .then(getNewJob)
//     .then(function(noEvents) {
//     console.log(noEvents);
// })
// .catch(function(error){
//     console.log(error.message);
// });
// };

// checkEvents()

//========================================
const url = 
// 'https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02

// async function getCallToUrl(){
// let promise = await fetch(url) 
// console.log(promise);

// if(promise.ok){
//     let result = await promise.json()
//     console.log(result)
// } else {
//     console.log('Network error')
// }
// }
// getCallToUrl();


function getCallToUrl(){
    let promise = fetch(url) 
.then(res => {
    console.log(1, res);
     
    if (res.status == 200){
        let result = res.json().then(r => console.log(2, r));
        console.log(3, result);
} else {
    console.log('Network error');
}
   })
   .catch(() => console.log ('Error'))
    }
    getCallToUrl();
    