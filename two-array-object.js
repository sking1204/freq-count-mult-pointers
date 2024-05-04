/* Write a function called twoArrayObject which accepts two arrays of varying lengths.
The first array consists of keys and the second one consists of values.
Your function shiould return an object created form the keys and values.
If there are not enough values, the rest of keys should have a value of null.
If there are not enough keys, just ignore the rest of the values.

Examples:

twoArrayObject(['a','b','c','d'],[1,2,3]) // {'a':1, 'b':2, 'c':3, 'd': null }
twoArrayObject(['a','b','c'],[1,2,3,4]); // {'a':1, 'b':2, 'c':3 }
twoArrayObject(['x','y','z'],[1,2]) // {'x':1, 'y':2, 'z':null } 

*/


// add whatever parameters you deem necessary
// function twoArrayObject([arrOfKeys, arrOfValues]) {
//     let result = {};
//     for(let i =0; i <arrOfKeys.length; i++){
//         result[arrOfKeys[i]] = i < arrOfValues.length ? values[i]: null;
//     }
//     return result;
// }




function twoArrayObject(arrOfKeys, arrOfValues) {
    let result = {};
    for(let i =0; i <arrOfKeys.length; i++){
        if(i < arrOfValues.length){
            result[arrOfKeys[i]] = arrOfValues[i]

        } else{
            result[arrOfKeys[i]] = null;
        }
    }
    return result;
}



//using arr.reduce

//accumulator: obj
//current Value: curValue
//Index of Current Value: idx

//keys array: ['a','b','c']
//values array : [1,2,3,4]

//so we take the keys array 
//using arr.reduce returns the accumulator, so we are using shorthand to declare the 
//accumulator is = {} 
// cur value = 'a'
//idx = 0

/* if idx < values.length then obj[curValue] = values[idx]
so here we are saying {'a': 1}
then we continue to add to our accumulator until we have looped through the keys array
when we have competed looping through the keys array, we return the object */

function twoArrayObject2(keys,values){
    return keys.reduce(function(obj, curValue, idx){
        obj[curValue] = idx < values.length ? values[idx] : null;
        return obj;


    }, {});

}

function twoArrayObject3(keys, values) {
    return keys.reduce(function(obj, curValue, idx) {
        console.log("Current key:", curValue);
        console.log("Current value:", idx < values.length ? values[idx] : null);
        obj[curValue] = idx < values.length ? values[idx] : null;
        console.log("Updated object:", obj);
        return obj;
    }, {});
}

