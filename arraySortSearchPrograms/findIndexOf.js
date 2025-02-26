// array.findIndex return the index of the first matching element

const array = [12,12,24,5,6,7,24];

const indexOfMatchingElement = array.findIndex(item =>{
    return item == 24;
});
console.log("Find the first index of the matching element:",indexOfMatchingElement);