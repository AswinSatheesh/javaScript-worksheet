// localStorage.setItem("name","Aswin");
// localStorage.setItem("sample","kk");


// console.log(localStorage.getItem("name"));

// document.write(localStorage.getItem("name"));

// console.log(localStorage.key(2));

// const item = {
//     id : 1,
//     name : "Aswin",
//     place : "Kochi"
// }

// localStorage.setItem("item", JSON.stringify(item));

// const sample = JSON.parse(localStorage.getItem("item"))
// console.log( sample );

// localStorage.clear();

//importing all fields from html screen
const input = document.querySelector("input");
const loginBtn = document.querySelector("#login");
const logoutBtn = document.querySelector("#logout");
const h1 = document.querySelector("h1");

loginBtn.onclick= () =>{
    if(input.value){
        localStorage.setItem("token",input.value);
        h1.innerText = "Successfully Loggined"
    }
}

logoutBtn.onclick = ()=>{
    localStorage.clear();
    location.reload();
}