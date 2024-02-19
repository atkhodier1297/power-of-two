// Problem: Determine if the integer 'n' is a power of two.
// Repeatedly divide 'n' by 2 and if the remainder is always 0 then its a power of 2.

function powerOfTwo(n){
    if(n < 1){
        return false
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        n = n / 2
    }
    return true
}

console.log(powerOfTwo(8))
console.log(powerOfTwo(27))
