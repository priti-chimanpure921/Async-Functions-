
//Implementing async functions which always returns a promise
console.log("Implementing async function which always returns a promise");
async function sayHello()
{
    // throw "404 page not found";
    // console.log(abc);
    return "Hello";
}
let hello = sayHello();

hello.then((result)=>{
    console.log("Promise is fulfilled...");
    console.log(result);
})
.catch((err)=>{
    console.log("Promise is rejected...");
    console.log(err);
})
console.log(hello);

//Implementing arrow function as async function
let sum = async (a,b)=>{
    return a+b ;
} ;
console.log(sum(2,4));



