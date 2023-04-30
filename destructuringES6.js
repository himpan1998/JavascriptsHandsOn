const employee={
    id:1,
    Name:"Himanshu Pandey",
    age:26,
    department:"UX/UI",
    address:{
        city:"Kathmandu",
        country:"Nepal"
    }
}

// const name1=employee.name
// const age=employee.age

// console.log(fullName)
// console.log(age)

// acess object by destructing
var {Name,age}=employee;

// set default value
var {Name:fullName="Rahul Gandhi",age}=employee;


// acess nested object
const {address:{city}}=employee;
// console.log(city)

// destructing in functions

function displayEmployee(employee){
    console.log(`employe name is ${employee.Name} and he is ${employee.age} year old from ${employee.department}`);
}
// displayEmployee(employee);
// destructing in functions parammeter

function displayEmployee({Name,age,department}){
    console.log(`Employee name is ${Name} and he is ${age} year old from ${department}`);
}
displayEmployee(employee);


// Destructruing in arrays:

const fruits=["apple","mango","banana","pineapple" ];

// const apple=fruits[0];
// const mango=fruits[1];

// console.log(apple);
// console.log(mango);

// modern method
var [fruit1,,fruit2,...rest]=fruits;
// console.log(rest);


// destructuring array of object:

// conventional method:
const groceryList=[
    {item:"Apples",price:25,category:"fruits"},
    {item:"Mangoes",price:40,category:"fruits"},
    {item:"Banana",price:55,category:"fruits"},
    {item:"Tamato",price:60,category:"veg"},
    {item:"Orange",price:30,category:"fruits"},
];

console.log(groceryList[0].item)

// destructuring method:

var [{item},...rest]=groceryList
// console.log(rest)


// array inside object

const company={
    name:"Google",
    location:["Singopore","India","Germany"]
}


// console.log(company.location[0])

const {location:[,,loc]}=company

console.log(loc)

// nested Array:

const users=  
[
    {
        firstName:"Dipesh",
        lastName:"Pandey",
    },
    {
        firstName:"Dipesh",
        lastName:"Sharma",
    },
    {
        firstName:"Dipesh",
        lastName:"Tripathi",
    },
    {
        firstName:"Dipesh",
        lastName:"Tiwari",
    },
];


const userObject=users.map((firstName,lastName)=>{
    return {firstName,lastName}
})

console.log(userObject)
