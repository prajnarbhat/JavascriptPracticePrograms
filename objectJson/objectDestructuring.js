// object distructuring
// All the property name is declared by variable and  take all the variable in the user object

const user = {
    name : 'prajna',
    age : 30,
    favBook : {
        bookName : "Silent Patient",
        author : "Alex",
    }
};

console.log("User name:",user.name);
console.log("FavBookName of the user:",user.favBook.bookName);
console.log("FavBookAuthor of the user:",user.favBook.author);

// Object destruction
// pass all the properties as variables and take it out of the  user object;
// Now while calling the particular object there is no need to use iser object while accessing the data of the user object
// Just c.log(name,age) is enof 
const {name,age,favBook} = user;

console.log(name);

console.log("FavBook is:",favBook.bookName);
console.log("FavBook is:",favBook.author);

const {bookName,author} = favBook;

console.log("Name and author of book without using the object name that is user and the property name:",bookName,author);

