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

// Anytime you reduce input size by half...Big O === O(logn)

function isPowerOfTwoBitWise(n){
    if(n < 1){
        return false
    }
    return (n & (n-1)) === 0
}

// bitwise solution checks the binary form of the integer to see of it ends in 0.
// if it does not then it is not a power of two.
// 4 in binary is 1000 so it is a power of two.
// 5 is not a power of two because its binary number is 101
