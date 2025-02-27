const num = [1,2,3,4,5];

const reduceNum = num.reduce(function(sum,item){
    return sum + item;
},0);

console.log("Sum of numbers:",reduceNum);