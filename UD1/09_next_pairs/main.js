const assert = require('assert').strict;

function nextPairs(value) {
    
    if (value % 2 == 0){
        console.log(`el par anterior es ${value -2}`);
        console.log(`el siguente número par es ${value +2}`);
    }else {
        console.log(`el par anterior es ${value -1}`);
        console.log(`el siguiente número par es ${value +1}`)
    }
}

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])