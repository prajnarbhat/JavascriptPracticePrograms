
let employees = [
    { name: "Alice", department: "IT", salary: 70000 },
    { name: "John", department: "HR", salary: 50000 },
    { name: "Bob", department: "IT", salary: 60000 },
    { name: "Charlie", department: "HR", salary: 55000 }
  ];



const sortByDep = employees.sort(function(a,b){
    let x = a.department.toLowerCase();
    let y = b.department.toLowerCase();
    console.log(x,y);
    if ( x < y) return -1;
    if ( x > y) return 1;
    return 0;
})

const sortBySalary = sortByDep.sort(function(a,b) {
    return a.salary - b.salary;
})

console.log("Sort by department:",sortBySalary);