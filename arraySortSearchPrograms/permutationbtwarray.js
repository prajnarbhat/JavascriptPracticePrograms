// Given two arrays, check if one is a permutation of the other (contains the same elements in any order)

const arr1 = [1, 2, 3, 4];
const arr2 = [4,6, 2, 1];

const arr1Sort = arr1.sort()
const arr2Sort = arr2.sort()

console.log(arr1Sort,arr2Sort)

function sortedElements(element,index,arr2Sort){
    while ( index < 5){
        
        if ( element === arr2Sort[index]){
            console.log(element,index);

            return true;
        }
        return false;
        
    }
    
}

const permutaionBtwArray = arr1Sort.every(sortedElements);

console.log(permutaionBtwArray)