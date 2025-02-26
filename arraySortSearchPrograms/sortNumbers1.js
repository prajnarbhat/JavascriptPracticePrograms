const myArr = [
    {name:"X00",price:100 },
    {name:"X04",price:110 },
    {name:"X14",price:130 },
    {name:"X19",price:140 },
    {name:"X08",price:120 },
  ];

const sortPrice = myArr.sort(function(a,b){
    return a.price - b.price;
})

console.log("Sort integer values:",sortPrice);