// sorting elements of array

let num = [1,10,2,6,3,3,4,5];
num.sort();
console.log("sorted array:",num);

// .sort convert the numbersto integers
// take a,b 1 and 10 ,1-10=-9 -ve so stay as a is sorted before b
// a=10 b=2 => a-b = 8 +ve bi sorted before a

num.sort(function(a,b){
    return a - b;
    // if (a < b) return -1  a is sorted before b
    // if ( a > b ) return 1 b is sorted before a
    //  if ( a == b) return 0
})
console.log("Sorted array:",num);

