
array = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 }
  ]

const filteByAge = array.filter((item) => {
    return  item.age >= 18;
})
console.log("Filter by age:",filteByAge);