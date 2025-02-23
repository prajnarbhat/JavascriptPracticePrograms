// Convert the 2D array elements into comma seperated values

const array = [1,2];

const commaSperatedArray = array.join()
console.log("Convert array into comma seperated values:",commaSperatedArray);

// output : 1,2

// Now convert 2D array into comma seperated values

const array2D = [[1,2],[3,4]];

for ( x of array2D){
    const commaSepArrayValues = x.join(' , ');
    console.log("Comma seperted twoD array:",commaSepArrayValues);
}