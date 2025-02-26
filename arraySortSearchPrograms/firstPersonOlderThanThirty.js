// Find first person older thsn 30

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
  ];

const filerAge = people.filter(item => {
    return item.age > 30;
})
console.log(filerAge);

const findFirstPerson = filerAge.find(item => {
    return item;
})
console.log("Find first person age is >30:",findFirstPerson.name);