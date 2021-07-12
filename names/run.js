let fs = require('fs');


//Get alphabetical value of a word
function getAlphabeticalValue(word) {
    var alphabeticalValue = 0;
    for (var i = 0; i < word.length; i++) {
        alphabeticalValue += word.charCodeAt(i);
    }
    return alphabeticalValue;
}


//read each line from input file
var lines = fs.readFileSync("p022_names.txt", 'utf8').split(',');

let sumAlphaValues = 0;

for (var i = 0; i < lines.length; i++) {
    line = lines[i].replace('"', '');
    let alphaValue = getAlphabeticalValue(line);
    sumAlphaValues += alphaValue;    
    console.log(lines[i] + ": " + alphaValue);
}
console.log(sumAlphaValues);



