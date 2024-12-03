const funcOne = ()=>{
    let data = "Helllo";
    const funcTwo =()=>{
        console.log(data);
        
    }
    return funcTwo;
}


// funcOne()
const dataFunc = funcOne();
dataFunc();



let message; 

// Declare message in global scope
function info() {
  message = "Hello";
  console.log(message);
}
info();

// Now it's accessible globally
console.log(message); 