function toWord(n) {
    //Convert a number to a word
        var ones = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    var word = "";
    if (n == 0) {
        return "zero";
    }
    if (n < 20) {
        return ones[n];
    }
    if (n < 100) {
        word = tens[Math.floor(n/10)];
        if (n%10 > 0) {
            word += ones[n%10];
        }
        return word;
    }
    if (n < 1000) {
        word = ones[Math.floor(n/100)] + "hundred";
        if (n%100 > 0) {
            word += "and" + toWord(n%100);
        }
        return word;
    }
    if (n < 1000000) {
        word = toWord(Math.floor(n/1000)) + "thousand";
        if (n%1000 > 0) {
            word += toWord(n%1000);
        }
        return word;
    }
    if (n < 1000000000) {
        word = toWord(Math.floor(n/1000000)) + "million";
        if (n%1000000 > 0) {
            word += toWord(n%1000000);
        }
        return word;
    }
    if (n < 1000000000000) {
        word = toWord(Math.floor(n/1000000000)) + "billion";
        if (n%1000000000 > 0) {
            word += toWord(n%1000000000);
        }
        return word;
    }
    if (n < 1000000000000000) {
        word = toWord(Math.floor(n/1000000000000)) + "trillion";
        if (n%1000000000000 > 0) {
            word
    return result;
        }
    }
}
const { PerformanceObserver, performance } = require('perf_hooks');

start = performance.now();
numbersLetters = 0 ;

for (var i = 1; i < 1001; i++) {
    numbersLetters += toWord(i).length;
}

console.log(numbersLetters);
console.log(performance.now() - start, "ms");

