const reverseString = function(str) {

    rev = ''
    for (let i=str.length-1; i>=0; i--){
        rev += str.charAt(i);
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
