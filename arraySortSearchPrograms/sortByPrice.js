let products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 },
    { name: "Monitor", price: 300 }
  ];

const sortPrice = products.sort(function(a,b) {
    return a.price - b.price;
})

console.log("Sort price:",sortPrice);