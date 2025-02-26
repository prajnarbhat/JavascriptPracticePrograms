
// sort by price

let students = [
    { name: "Alice", grades: { math: 85, english: 78 } },
    { name: "Bob", grades: { math: 92, english: 88 } },
    { name: "Charlie", grades: { math: 79, english: 95 } }
  ];

const sortGrades = students.sort((a,b) =>{
    if ( a.grades.math !== b.grades.math){
        return a.grades.math - b.grades.math;
    }
    return a.grades.english - b.grades.english;
})
console.log("Sort by math grade:",sortGrades);