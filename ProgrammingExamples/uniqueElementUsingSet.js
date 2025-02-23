// javascript set is a collection of unique values
// a1= [1,2,3,2] syntax: const set1 = new set(a1) result be [1,2,3]

const a1 = [10,20,30,40,20,30,70,80,90];
const a2 = [20,70,70];

const set1 = new Set(a1);
const set2 = new Set(a2);

console.log("Unique elements in a1 and a2:",set1,set2);

const filterUniqueElementsIna1 = a1.filter(element =>
     !set2.has(element)
)
const filterUniqueElementsIna2 = a2.filter(element =>
    !set1.has(element)
)
const unique = [...filterUniqueElementsIna1,...filterUniqueElementsIna2]
console.log(unique);