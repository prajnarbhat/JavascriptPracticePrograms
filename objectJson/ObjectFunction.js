// Declaring method inside the object

const object = {
    name : 'kazi',
    age : 20,
    friends : ['a','b'],
    selectColor : null,
    calculateAge :function(){
        console.log(`I am prajna and my age is ${this.age}`);
    }
}

// getting function present inside the object
object.calculateAge();