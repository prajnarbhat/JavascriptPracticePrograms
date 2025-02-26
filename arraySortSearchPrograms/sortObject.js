// sorting the numbers present in the object

let cars = [
    { type: "SUV", year: 2015 },
    { type: "sedan", year: 2020 },
    { type: "Truck", year: 2018 },
    { type: "convertible", year: 2012 }
  ];

const sortInteger = 
  cars.sort(function(a,b){
    return a.year - b.year;
  })
console.log("Sort object array by numbers:",sortInteger);

