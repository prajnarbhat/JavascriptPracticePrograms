// To sort the dates

let dates = ["2024-02-01", "2023-12-15", "2025-06-10", "2021-08-30"];

const sortDate = dates.sort((a,b) => new Date(a) - new Date(b));

console.log("Sort dates:",sortDate);