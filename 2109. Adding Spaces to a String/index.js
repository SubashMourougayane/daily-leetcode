/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(string, spaces) {
    let outputArray = []
    let startIndex = 0, endIndex = spaces[0] ;
    for(let i = 0; i <= spaces.length; i++){
        outputArray.push(string.slice(startIndex, endIndex))
        startIndex = endIndex;
        endIndex = spaces[i+1]
    }
    return outputArray.join("")
};

console.log(addSpaces("Kore.ai is a company", [7, 10, 11]))