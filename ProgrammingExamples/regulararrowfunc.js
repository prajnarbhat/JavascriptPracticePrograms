// Regular func 

// 1st prg
function greet(name){
    console.log("Hello" +name);
}

greet("Prajna")

// 2nd prg : Regular function can access all passed arguments
function allArgs(){
    console.log("Displaying all arguments:",arguments);
}
allArgs(1,2,3,4)

// 3rd program : Duplicate named parameters are not allowed in the function call
function duplicateArgs(a, b, a){
    console.log(a,b)
}
//here parameters are duplicated that is a is called two time.Second time when a is called it will overide the 1st parameter
duplicateArgs("Duplicate arguments:",1,2,3);

// object that calls a function and also a variable is declared inside the object and that object called inside the function

const object = {
    name : "Prajna",
    greet : function(){
        console.log("calling the name inside the object:",this.name);
    }
}
object.greet()

// Arrow function 
const arrawFunction = (name) =>{
    console.log(`Hello ${name}`)
}
arrawFunction('Prajna');
