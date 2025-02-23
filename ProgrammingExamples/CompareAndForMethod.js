// 1.compare the elements of array
// 2. If the elemet is less than 0 return true
// 3.create a new array where the element is less than 0
// 4.Here use forEach method that forEach of the array elements perform the comparative function

const array1 = [1,2,3,4,-4,-3,-2,-1];
const negativeArrayElements =[];
const compareArrayElements = (item) =>{
    if(item > 0){
        return false; 
    }
    else {
        return true;
    }
}
array1.forEach((element) =>{
    if (compareArrayElements(element) == true) {
        negativeArrayElements.push(element);
    }
});

console.log("New array of negative elements:",negativeArrayElements);