// a1 and a2 are two array find the unique values both array and create a new array which contains a unique value

let a1 = [1,2,3,4,5];
let a2 = [1,3,4,7];
let res = [];

for ( i of a1 ){
    console.log(i);
    let sameElements = a2.includes(i);
    console.log(sameElements);
    if (sameElements){
        res.push(i);
    }
}
console.log("same elements:",res);

// using forEach
const res1 =[];
a1.forEach((element) => 
 {
    if (a2.includes(element)){
         res1.push(element)
    }
 }
)
console.log("repeated elements:",res1);

