// sort the strings present in the object array

let cars = [
    { type: "SUV", year: 2015 },
    { type: "sedan", year: 2020 },
    { type: "Truck", year: 2018 },
    { type: "convertible", year: 2012 }
  ];

//sort the type value in object

const sortStringValues = cars.sort(function(a,b) {
    x = a.type.toLowerCase();
    y = b.type.toLowerCase();
    //convert both the type to lowercase
    // if x<y return -1 means x comes before y
    // if x>y return 1 means y comes before x
    // if x=y return 0 where elements will be present as it is
    if ( x < y ) return -1;
    if ( x > y ) return 1;
    return 0;
})

console.log("Sort string values in object:",sortStringValues);