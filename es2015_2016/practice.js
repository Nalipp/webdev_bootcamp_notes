// var name = 'nate';

// if (name === 'nate') {
//   const comment = 'Hi there nate';
// }

// console.log(comment); 

// function hoist() {
//   return console.log(name);
//   let name = 'nate'
// }

// hoist() // undefined


// for (var i = 0; i < 5; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(j);
//     },0 )
//   })(i);
// }


// let greeting = {
//   name : 'nate',
//   greet : function() {
//     setTimeout(() => {
//       console.log(`Hi there ${this.name}`);
//     }, 1000);
//   }
// }

// console.log(greeting.name);
// greeting.greet();

// bind is used insead of call or apply because we do not want to immediatley invoke the function

// let talk = (word1, word2) => {
//   console.log(arguments);
// }

// talk('hi', 'bye');

// function talk(word1, word2) {
//   console.log(arguments);
// }

// talk('hi', 'bye');

// var arr = [1, 4, 5, 3, 4, 5];
// var str = 'hi there';

// for (let n of str) {
//   console.log(n);
// }

// function add(...a) {
//   console.log(a); 
// }

// add(1, 2, 3, 4, 5);

// function add() {
//   var argumentsArr = [].slice.call(arguments);
//   return argumentsArr.reduce(function(s, v) {
//     return s + v;
//   });
// }

// console.log(add(1, 3, 5, 6, 7));

// let add = (...a) => a.reduce((s, v) => s + v);
// console.log(add(1, 3, 5, 6, 7));


// obj = {
//   bla : 'hi',
//   find : function() {
//     console.log(this.bla);
//   }
// }

// obj.find();

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr3 = [7, 8, 9];

// // combined = arr1.concat(arr2).concat(arr3);
// combined = [...arr1, ...arr2, ...arr3];
// console.log(combined);

// var arr = [1, 3, 4, 5, 6, 3];
// var max = Math.max(arr)             // NaN
// console.log(max);

// var max = Math.max.apply(this, arr) // 6
// console.log(max);

// var max = Math.max(...arr)          // 6
// console.log(max);

// let add = (...arr) => arr.reduce((s, v) => v + s);
// console.log(add(1, 2, 3, 4)); // 10

// function joinArrays(...args){
//   return args.reduce((arr, v) => arr.concat(v), []);
// }

// console.log(joinArrays([1],[2],[3])); // [1,2,3]
// console.log(joinArrays([1],[2],[3],[1],[2],[3])); // [1,2,3,1,2,3]
// console.log(joinArrays([1,2,3],[4,5,6],[7,8,9])); // [1,2,3,4,5,6,7,8,9]
// console.log(joinArrays([1],[3],[0],[7])); // [1,3,0,7]

// function sumEvenArgs(...args){
//   return args.reduce((s, v) => {
//     if (v % 2 === 0) return s + v;
//     else return s + 0;
//   }, 0); 
// }

// function sumEvenArgs(...args){
//   return args.reduce((s, v) => v % 2 === 0 ? s + v : s + 0, 0); 
// }

// console.log(sumEvenArgs(1,2,3,4)); // 6
// console.log(sumEvenArgs(1,2,6)); // 8
// console.log(sumEvenArgs(1,2)); // 2

// let firstName = 'nate';
// let lastName = 'lipp';

// obj = {
//   firstName,
//   lastName,
// }

// console.log(obj.lastName);

// obj = {
//   name: 'Nate',
//   sayHi() {
//     return 'Hi there ' + this.name;
//   }
// }

// console.log(obj.name);
// console.log(obj.sayHi());


// var name = 'nate';
// var students = {};

// students[name] = 'A';

// console.log(students);

// var name = 'Nate';

// var students = {
//   [name]: 'A',
// }

// console.log(students);


// let instructor = {
//   firstName: 'Elie',
//   lastName: 'Shoppik'
// }

// let { firstName:first, lastName:last } = instructor;

// console.log(first); // 'Elie'
// console.log(last);  // 'Shoppik'

// function createInstructor({name = { 'first': 'Matt', 'last': 'Lane'}, isHilarious = false} = {}) {
//   return [name.first, name.last, isHilarious]
// }

// console.log(createInstructor());

// don't forget to pass in = {} the empty object to make clear that we are destructuring an empty object

// function destructure({firstName:first, lastName:last}) {
//   return [first, last];
// }

// obj = {
//   firstName: 'nate',
//   lastName: 'lipp'
// }

// console.log(destructure(obj));

// var arr = [1, 2, 3]

// var a = arr[0];
// var b = arr[1];
// var c = arr[2];

// console.log(a);
// console.log(b);
// console.log(c);

// var arr = [1, 2, 3]
// [a, b, c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function returnNumbers(a, b) {
//   return [a, b];
// }

// var first = returnNumbers(5, 10)[0];
// var second = returnNumbers(5, 10)[1];

// [first, second] = returnNumbers(5, 10);

// console.log(first);  // 5
// console.log(second); // 10


// function Student(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// let student1 = new Student('nate', 'lipp');

// console.log(student1); 

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
 
// let student1 = new Student('nate', 'lipp');
// console.log(student1); 
// function Student(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Student.prototype.sayHi = function() {
//   return `Hi ${this.firstName} ${this.lastName}`
// }

// let student1 = new Student('nate', 'lipp');
// console.log(student1);
// console.log(student1.sayHi());

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   sayHi() {
//     return `Hi ${this.firstName} ${this.lastName}`
//   }
// }

// // Student.prototype.sayHi = function() {
// //   return `Hi ${this.firstName} ${this.lastName}`
// // }

// let student1 = new Student('nate', 'lipp');
// console.log(student1);
// console.log(student1.sayHi());

// function Student(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Student.prototype.sayHi = function() {               // this is not a method being applied to the entire class (class method)
//   return 'Hi ' + this.firstName + this.lastName;
// }

// Student.isStudent = function(obj) {                  // this is a class method
//   return obj.constructor === Student;
// }

// student1 = new Student('nate', 'lipp');
// console.log(Student.isStudent(student1));

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName; 
//     this.lastName = lastName; 
//   }
//   static isStudent(obj) {
//     return obj.constructor === Student;
//   }
// }

// student1 = new Student('nate', 'lipp');
// console.log(Student.isStudent(student1));


// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// function Student() {
//   Person.apply(this, arguments);
// }

// Person.prototype.sayHi = function() {
//   return `Hi, ${this.firstName} ${this.lastName}`;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.greetInstructor = function() {
//   return `Hello Professor`;
// }

// let student1 = new Student('nate', 'lipp');
// console.log(student1.greetInstructor());     // Hello instructor
// console.log(Person.prototype);               // Person {...}
// console.log(Student.prototype);              // Studet {...}

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   sayHi() {
//     return `Hi, ${this.firstName} ${this.lastName}`;
//   }
// }

// class Student extends Person {
//   // constructor(firstName, lastName) {
//   //   super(firstName, lastName);
//   // }
//   greetFriend() {
//     return `You can call me ${this.firstName}`;
//   }
// }

// let student1 = new Student('nate', 'lipp');
// console.log(student1.greetFriend());     // You can call me nate


// let set = new Set([2, 5, 7, 8, 3])

// set.add(5);
// console.log(set); 

// console.log(set.size)          // 5


// function countPairs(arr, sum){
//   let count = 0;
//   let map = new Map();

//   arr.forEach((v) => {
//     let neededVal = sum - v;
//     if (map.has(neededVal)) count += 1;
//     if (!map.has(v)) map.set(v, neededVal)
//   });
//   return count;  
// }

// console.log(countPairs([8,2,6,4,10,0],10)); // 3
// console.log(countPairs([8,2],10)); // 1
// console.log(countPairs([1,2],10)); // 0
// console.log(countPairs([1,2,3,4,5],10)); // 0
// console.log(countPairs([],10)); // 0
// console.log(countPairs([5,4,-10,6,-20,16],-4)); // 2
// console.log(countPairs([0,-4],-4)); // 1


