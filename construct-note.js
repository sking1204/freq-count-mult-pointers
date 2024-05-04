/* Write a function called constructNote, which accepts two strings, a message and some letters.
The funtion should return true if the message can be built with the letters you are given;
otherwise, it should return false

Assume that there are only lowercase letters and no space or special characters in both the 
message and the letters

Constraints:
Time Complexity: O( M + N) -> If M is the length of message and N is the length of letters.

Examples:
construct Note ('aa', 'abc') // false
construct Note ('abc', 'dcba') // true
construct Note ('aabbcc', 'bcabcaddff') //true*/

// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const str1Freq = makeFreqCounter(message);
    const str2Freq = makeFreqCounter(letters);
    
    if(!letters){
        return false;
    }
    //use for in because we are dealing with an object
    for(let char in str1Freq){
        if(!str2Freq[char] || str1Freq[char] > str2Freq[char]){
            return false;
        }
    }
    return true;
}


function makeFreqCounter(str){
    const freqCounter = {};
    for(let char of str){
        freqCounter[char]= freqCounter[char] + 1 || 1;
    }
    return freqCounter;
}

