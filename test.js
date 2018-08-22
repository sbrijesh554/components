// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// function Employee(name, age, company, salary){
//     //inherit Person
//     Person.call(this, name, age);
//     this.company = company;
//     this.salary = salary;
// }

// Employee.prototype.printDetails = function(){
//     document.getElementById("app").innerHTML = this.name + this.age + this.company + this.salary;
// }

// var str1 = new String("test");
// var str2 = "test";

// var ram = new Employee('ram', 30, 'Sapient', 125000);
// ram.printDetails();

// var series = () => {
//     let arr = [];

//     for(let i = 0; i < 7; i++){
//         if(arr.length > 1){
//             arr.push(arr[i-1] + arr [i - 2]);
//         }
//         else {
//             arr.push(1);
//         }
//     }
//     console.log(arr)
// }

// series();

// var text;
//  function observer ()  {
//     this.handler = []
// }
//  observer.prototype.subscribe = function(fn) {
//         this.handler.push(fn)
//     },
//     observer.prototype.unsubscribe = function(fn){
//         this.handler = this.handler.filter((f) => {
//             return f !== fn;
//         })
//     },
//     observer.prototype.fire = function (fn) {
//         this.handler.forEach(function(handler){
//             if(handler == fn){
//                 handler.call(null);
//             }
//         })
//     }
// addtext = () => {
//  text = document.getElementById('text').value;
// } 

// printtext = () => {
//  alert(text);
//  document.getElementById('text').value = '';
//  text = '';
// }

// var clickHandler = new observer();
// clickHandler.subscribe(addtext);
// clickHandler.subscribe(printtext);
// // document.getElementById('add').addEventListener('click', clickHandler.fire(addtext), true);
// // document.getElementById('remove').addEventListener('click', clickHandler.fire(printtext), true);
// // document.getElementById('unset').addEventListener('click', clickHandler.unsubscribe(addtext), true);


// var singleton = (function(){
//     var instance = null;
//     createInstance = function(){
//         if(!instance){
//             var instance = new Object('i m the instance');
//             return instance;
//         }
//         else {
//             return instance 
//         }
//     }
//     return {
//         createSingletonObj : createInstance
//     }
    
// })();

// var obj1 = singleton.createSingletonObj();
// var obj2 = singleton.createSingletonObj();

// console.log(obj1 , obj2);

// class test {
//     printDetails(){
//         alert(obj.name,obj.age);
//     }
//     constructor(){
//         this.obj = { name : "brijesh",
//         age : 30};
//     }
// }

// var testobj = new test();
// testobj.printDetails();

import axios from 'axios';

class learn{
    constructor(){

    }
    sendRequest = () => {
        axios.get('http://localhost:8081/sample').then((resp) => {
            console.log(resp);
        });
    }
}

export const test = new learn();
//test.sendRequest();

function sendRequest() {
    axios.get('http://localhost:8081/sample').then((resp) => {
        console.log(resp);
    });
}