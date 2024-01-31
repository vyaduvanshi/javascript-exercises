const repeatString = function(str, repCount) {
    if (repCount < 0){
        return 'ERROR'
    }
    main_str = ''
    while (repCount != 0){
        main_str += str
        repCount--;
    }
    // console.log(main_str)
    return main_str
};

// Do not edit below this line
module.exports = repeatString;



