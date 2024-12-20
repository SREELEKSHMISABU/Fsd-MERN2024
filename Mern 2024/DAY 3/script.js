// let a=30;
// if((a==12) || (a==20))
// {
//     console.log("the value are equal");
// }
// else if(a==30)
// {
//     console.log("value is 30");
// }
// else{
//     console.log("not equal")
// }

// Switch Case
// let day=8;
// let dayname;
// switch (day) {
//     case 1:
//         dayname="Sunday";
//         break;

//         case 2:
//         dayname="Monday";
//         break;
//         case 3:
//         dayname="Tuesday";
//         break;
//         case 4:
//         dayname="Wednesday";
//         break;
//         case 5:
//         dayname="Thursady";
//         break;
//         case 6:
//         dayname="Friday";
//         break;
//         case 7:
//         dayname="Saturday";
//         break;
//     default:
//         dayname="Invalid";
//         break;
// }
// console.log(dayname);


// LOOPING statements
// entry controlled loop
//1 for loop

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
    
// }
// 2 for/in loop
const num=[23,90,45,89,90]
const person={
    name:"Jhon",age:25, place:"TVPM"
}
let txt="";
// for (let x in person) {
//     txt+=person[x] + " ";
        
//     }
// console.log(txt);


// for (let x in num) {
//     txt+=num[x] + "\n";
        
//     }
// console.log(txt);

// var person1={
//     firstname:'John',
//     lastname:'doe'
// };


/// 3 for/of
// const cars=["BMW","VOLVO", "MINI"];

// let text="";
// for (let x of cars) {
//     text+=x + "\n"
// }
// console.log(text);

// let language="Javascript";
// for (let x of language) {
//     text+=x + "\n"
// }
// console.log(text);

// 4 while

// let count=1;
// while (count<10) {
//     console.log(count);
//     count+=2;
// }



// let fruits=["Apple","Banana","Cherry"];

// let a=0;

// while(a<fruits.length){

//     console.log(`${a+1}.${fruits[a]}`);

//     a++;

// }

//5 d0/while

let text="";
let i=0;
do{
    text+=i+'\n';
}
while(i<10);
console.log(text);
