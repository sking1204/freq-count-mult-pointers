/* Write a function called isSubsequence which takes in two strings and checks whether the
characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string 
appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello','hello world); //true 
isSubsequence('sing', 'sting'); //true 
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); //false



*/

// add whatever parameters you deem necessary
function isSubsequence(str1,str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    //if str1 is empty, we can return true
    if(!str1) return true; 
    //next we want to loop over string2
    //we continue the loop as long as the index of string2 is less than the length of string2     
        while(str2Idx < str2.length){
            if (str2[str2Idx] === str1[str1Idx]){
                str1Idx ++;
            }
            //if we reach this point and haven't returned false that means we have traversed the
            //entire string1 and can return true
        if(str1Idx === str1.length) return true;
        str2Idx ++;

    }
    return false;
}


