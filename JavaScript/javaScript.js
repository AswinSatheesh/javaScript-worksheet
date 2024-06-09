// function taskCompleteMessage(){
//     console.log("Task Completed");
// }

// // taskCompleteMessage();

// function Checking(){
//     let a =10;
//     let b=20;
//     let result = a+b;
//     taskCompleteMessage();
//     return result;
// }

// // console.log(Checking());

// let add = (num1,num2) => num1 + num2;

// console.log(add(5,6));



// let user = {
//     name : "Aswin",
//     age : 22,
//     place : "Kerala"
// }

// console.log(user);

let ArrayName = ['A','B','C'];

// ArrayName.push('E');
// // ArrayName.unshift('E')
// console.log(ArrayName);

// // ArrayName.shift();
// ArrayName.splice(0,2)
// console.log(ArrayName);

// let names ={
//     name1 : "Aswin",
//     name2 : "Kannan",
//     name3 : "Ram"
// };

// for(let x in names){
//     document.write(names[x] + "<br>");
// }

// console.log(names);

// delete names.name3;

// var size = Object.keys(names).length;
// console.log(size);

// for (let x  of ArrayName){
//     document.write(x + "<br>");
// } 

// function myClick(){
//     alert("Thanks for clicking button, you are hacked!!");
// }

// const copy = {...names}; //spread Operator
// const copy = Object.assign({},names) //Object 

// copy.name3 = "Edited";

// console.log(names);
// console.log(copy);

// const arra1 = ["Ram","Sam","Mohan"];
// const arra2 = ["arr2","new"];

// // const newArray = arra1.concat(arra2);

// const newArray = [...arra1,...arra2];

// console.log(newArray);

// const box = ['z','g','b','a'];
// const numbox = [1,5,2,30,10];

// const result = numbox.sort((a,b) => a-b);

// console.log(result);
// console.log(box.sort());

// const numbox = [1,5,[2,30],10,[10,[20,30.50],[100]]];

// console.log(numbox.flat(Infinity));


// const globalPlayer ={
//     id : 1,
//     name : "Aswin",
//     native : "Kerala",
//     company :{
//         comp_name : "Intellect",
//         exp : 1
//     }
// }

// if(globalPlayer?.company?.comp_name){
//     console.log(globalPlayer.company.comp_name);
// }

const numbox = [1,5,2,30,10];

const newArray = numbox.map((value)=>value*2).filter((data)=> data).reduce((sum,value) => sum + value,0);


console.log(newArray);
// console.log(numbox);