/* Write a function called sameFrequency.
Given two positive integers, find out if the two numbers have the 
same frequency of digits

Examples:

sameFrequency(182,281) // true
sameFrequency(34,14) //false
sameFrequency(3589578, 5879385) // true
sameFrequency (22,222) // false 

*/



// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    let int1Freq = makeFreqCounter(int1.toString());
    let int2Freq = makeFreqCounter(int2.toString());

    if(int1Freq.length !== int2Freq.length) return false;
    
    for (let key in int1Freq){
        if(int1Freq[key] !== int2Freq[key]) return false;
    }
    return true
    
}

function makeFreqCounter(int){
    const freqCounter = {};
    for(let el of int){
        freqCounter[el] = freqCounter[el] + 1 || 1
    }
    return freqCounter;
}

