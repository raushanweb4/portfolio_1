
// let h1Element = document.querySelector("h1");
// h1Element.innerHTML = h1Element.innerHTML.toUpperCase();

// import { hellop } from './sell.js';
// hellop()

// var myname = "tom"
// console.log(myname);
// let double = num => num * 2;
// console.log(double(2));

// import { rama() } from './sell.js';


// import { rama } from './sell.js';
// rama();


// import rama from './sell.js';
// rama();
// class customer {
//     constructor(n) {
//         this.name = n;
//     }
//     buy() {
//         console.log(this.name)
//     }
//     age=28; 

// }
// class GuestCustomer extends customer {
//     hello() {
//         console.log("hello")
//     }
// }
// let coustmer1 = new GuestCustomer("vishvjeet");
// console.log(coustmer1);
// coustmer1.buy()


// class Customer {
//     constructor(name) {
//         this.name = name;
//     }

//     buy() {
//         console.log(this.name);
//     }
// }

// class GuestCustomer extends Customer {
//     hello() {
//         console.log("hello");
//     }
// }

// let customer1 = new Customer("Vishvjeet");
// console.log(customer1);
// customer1.buy();


// spread and rest operator
// const list1 = ["honda", "audi", "bmw"];
// const newlist = ["ferrari",...list1];

// console.log(newlist);

// const person={
//     myName:"raushan",
//     age:25

// }

// const newperson={
//     ...person,
//     address:"simraha"
// }
// console.log(newperson)

// function hello(...all){
//     console.log(all)
// }
// hello(1,2,3,4,4)

// let list=["manish", "kailash", "shankar"]
// let [person1, person2, person3]= list;
// console.log(person2)    

// let person = {
//     name: "ajeet"
// }
// let person1={
//    ...person}   

// person1.name="raushan";

// console.log(person);
// console.log(person1);   
let array1 = [1, 2, 3, 4, 5]

let array2 = array1.filter(function (x) {
    if (x%2 == 0){
        return x;
    }
})

console.log(array2);