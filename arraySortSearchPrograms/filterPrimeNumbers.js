const prime = [2, 3, 4, 5, 6, 7, 8, 9, 10]  

function primeNum(prime){
    
    for ( let i = 2; i <= Math.sqrt(prime) ; i++){
        if ( i < 2) return false;
        if ( prime % i === 0){
            return false;
        }
        return true;
    }
    
}
const filterPrime = prime.filter(primeNum);

console.log(filterPrime)