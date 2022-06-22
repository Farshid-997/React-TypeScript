let name:string|number;

name=55;
// tuple declaration

let role:[number,string];

role=[5,"ahsan"]

// object declaration
// we can use type here also
interface Person{
name:string,
age:number,
address?:number|string,
hobbies?:string[]

}

let person:Person={
name:"farshid",
age:50,

}

let lostofPeople:Person[];
console.log(person)

//difference between type and interface

//type has two things alias and interface
type X={
a:string
b:number
}

//we can use X properties in Y
type Y=X &{
c:string
d:number
}

// but if dont use X properties we will face error we can solve it by interface.
let y:Y={
c:'anajn',
d:45,
a:"dd",
b:5

};

//we can also have using interface in type and vice versa

interface Persons extends Guy{
name:string
a:false
}

type Guy={
a:boolean
}
// type Guys=Person &{
// name:"Aa",
// age:4
// }

//function declaration

//in the first bracket it takes name and it should be string and after that we will have an return. we can
// have many return types and if dont want to return anything it will call void. but void return undefined but if we use never it will return anything.

let printName:(name:string)=>never;

//if we dont know what type it would be we can call it unknown

let persons:unknown;
