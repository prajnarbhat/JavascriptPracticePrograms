//  Find the First Duplicate Element
const numbers = [ 3, 1, 4, 5, 2, 3, 6, 4 ];

const firstDuplicateElement = numbers.find(duplicateElement);

// function to find the duplicate elements

function duplicateElement(element,index,numbers){
    console.log(element,numbers)
    for( let i = 0; i < numbers.length; i++){
        if ( element == numbers[i]){
            return element;
        }
    }
}

console.log("Find first duplicate element:",firstDuplicateElement);

