const removeFromArray = function(arr, ...args) {


    for (x of args){
        if (arr.includes(x)){
            idx = arr.indexOf(x);
            arr.splice(idx,1)
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
