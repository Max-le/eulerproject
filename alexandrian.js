function isAlexandrian(n) {
    // p,q and r are in the range -n ; n 
    // 1 is to excluded. For A > 1, 1/A cannot be equal to 1/p, q, or r 
    for (let p = -n; p <= n; p++) {
        if (p==0){
                //skip for loop
        break }
        for (let q = -n; q <= n; q++) {
            if (q==0){
                //skip for loop
        break }

            for (let r = -n; r <= n; r++) {
                if ((r==0) || (r < 0 && p>0 && q > 0)){
                    //skip for loop
            break }
                //   console.log(n,p,q,r); 
                //     console.log("multiply", p*q*r)
                //     console.log("fractions", 1/p + 1/q + 1/r); 
                    if ((n == (p*q*r)) && ((1/n).toFixed(4) == (1/p + 1/q + 1/r).toFixed(4))) {
                        return true
                    }                    
                }                
    
        }
        
    }
    return false

}

function isNotZeroNorOne(n){
return  ((n != 0) && (n != 1)) }

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

//Test function

// console.log(isAlexandrian(6));
// console.log(isAlexandrian(7));
// console.log(isAlexandrian(8));
// console.log(isAlexandrian(42));
// console.log(isAlexandrian(630));



let i = 0 ; 
let alexandrianNumbers = [] ;
let n = 0 ; 
const target = 10
while (i != target) {
    if (isAlexandrian(n)) {
            alexandrianNumbers.push(n);
            i += 1
            console.log(n);
            console.log(i, '/', target)
    }
    n += 1

    console.log("index:", i , "current number : ", n);
} 
 