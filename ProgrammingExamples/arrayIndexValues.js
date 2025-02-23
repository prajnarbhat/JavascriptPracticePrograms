// We have an array = ["prajna","pruthvi","arya"];
// convert this array into index,element
// ouptpu should be [[0,'prajna'],[1,'pruthvi'],[2,'arya']]

const array = ["prajna","pruthvi","arya"];

const keyValuePairedArray = [];

for ( x in array ){
    console.log(x)
    const keyValuepair = [x,array[x]];
    keyValuePairedArray.push(keyValuepair)
}
console.log("New array:",keyValuePairedArray);

// Using map
const keyValPairedArray = array.map(function(item){
    return item;
})
console.log(keyValPairedArray)