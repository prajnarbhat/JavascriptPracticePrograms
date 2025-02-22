// To get an index of an object
const object1 = 
    {
        prop1:'val1',
        prop2:'val2',
        prop3:'val3',
    }
console.log(Object.values(object1).indexOf('val2'));

// when there are multiple objects in an array

// scenerio1 :index of val5
const obj2 = [
    {
        prop1:'val1',
        prop2:'val2',
        prop3:'val3',
    },
    {
        prop1:'val4',
        prop2:'val5',
        prop3:'val6',
    }
]

// // Using map:Map will iterate through every object of an array and return the array of values and by using the indexOf(val) we can find the index of particular value

// const arrayOfobjectValues = obj2.map((item) =>{
//     return item.prop2;
// })

// // indexOfanObjectValue return an array of values of obj2 which satisify the condition

// const indexOfanObjectValue = arrayOfobjectValues.indexOf('val5')

//console.log("index of object value:",indexOfanObjectValue);

function getindexOfanObjectValue(){
    const arrayOfobjectValues = obj2.map((item) =>{
        return item.prop2;
    })
    // indexOfanObjectValue return an array of values of obj2 which satisify the condition   
    console.log("index of object value:",arrayOfobjectValues.indexOf('val5'));
}
getindexOfanObjectValue();