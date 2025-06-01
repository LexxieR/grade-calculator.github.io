alert("This is an arlert");

console.log('Like a trace');
console.error('This is an error message')
console.warn('This is a warning meassage')

let canChangeValue = 0;
const cantChange = 0;

//List of types
const name1 = "String";
const name2 = "String, string, string";
const array = ['0', 1, 2, 3]
const number = 1 ;//no floats, just number. 1.5 is number
const bool = true;
const x = null;
const y = undefined; //can later be defined or..
let z;

//Concatenation
console.log('My name is ' + name1)
//Template String
console.log(`My name is ${name1}`)

//String Properties
console.log(name1.length); // length of string
console.log(name1.toUpperCase()); // Make all the letters upper case
console.log(name1.substring(0,2).toUpperCase()); // Will that a substring
console.log(name2.split(', ')); // Makes into an array, where ', ' seperates each call

//Arrays
const fruits = ['apples', 'pears', 'oranges', 10, true, 'oranges'];

fruits.push('mangos'); // Pushes mangoes to the end
fruits.unshift('strawberries'); // Pushes strawberries to the front
fruits.pop();// removes the last item in the array
console.log(Array.isArray('hello')) 
console.log(fruits.indexOf('oranges'))// Gives cell number of oranges

console.log(fruits);

//Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city:'Boston',
        state: 'MA'
    }
}

const todos = [
    {
        id: 1,
        text1: 'Take out the trash',
        isCompleted: false
    },
    { 
        id: 2,
        text1: 'Dentist',
        isComplete: true
    },
    { 
        id: 3,
        text1: 'Grocery Shopping',
        isComplete: false
    }
]

const todoJSON = JSON.stringify(todos);

console.log(todos[1].text1)

//For loops
for (let i = 0; i<=10; i++){
    console.log(i);
}

for (let todo of todos) {
    console.log(todo.id);
}

//ForEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text1);
})