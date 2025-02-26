// Find the name starts with letter 'A'

const names = ["Alice", "Bob", "Andrew", "Emma", "Alex"];

const nameStartWithA = names.filter(item => {
    return item.startsWith("A");
})

console.log("Find name start With A:",nameStartWithA);

