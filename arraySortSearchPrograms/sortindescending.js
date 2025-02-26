// Sorting the numbers

const points = [40, 100, 1, 5, 25, 10];

// sorting in ascending order
const sortPoints = points.sort(
    function(a,b){
        return b - a;
    }
)

console.log("sort numbers:",sortPoints);