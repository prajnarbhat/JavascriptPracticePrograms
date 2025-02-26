// Sorting the numbers

// .sort conver the array numbers to string and compare values
// so applying sort to the numbers make the interger value to string 

const points = [40, 100, 1, 5, 25, 10];

// sorting in ascending order
const sortPoints = points.sort(
    function(a,b){
        return a - b;
    }
)

console.log("sort numbers:",sortPoints);

// Minimum value

const minValue = Math.min.apply(null,sortPoints);
console.log("Minimum value:",minValue);

const maxValue = Math.max.apply(null,sortPoints);
console.log("Minimum value:",maxValue);