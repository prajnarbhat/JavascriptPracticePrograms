// Array.from is used to convert a number to array ofnumber
// Array.from return an array
// Array.from(convert array to string,Function which typecase each string to number)
// Array.from(Stringnumber,function)
// Typecasting function:  let func =(accept numbers) => return number
//                        let func = (num) => Number(num)

let num = 1234

let StringNum = String(num);
let IntegerNum = Number(num);

let Func = num => Number(num);

console.log(StringNum,Func)

const arr = Array.from(StringNum,Func)
console.log(arr);