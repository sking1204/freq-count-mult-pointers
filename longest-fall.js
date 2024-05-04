 /* Write a function called longest Fall, which accepts an array of integers, and returns the length 
 of the longest consecutive decrease of integers. 

 Examples

 longestFall([5,3,1,3,0]); // 3 -> 5-3-1 is the longest consecutive sequence of decreasing integers
 longestFall([2,2,1]); // 2 -> 2-1 is the longest consecutive sequence of decreasing integers
 longestFall([2,2,2]); // 1 -> 2 is the longest consecutive sequence of decreasing integers
 longestFall([5,4,4,4,3,2]); // 3 -> -4-3-2 is the longest consecutive sequence of decreasing integers
 longestFall([9,8,7,6,5,6,3,2,1]); // 5 -> 9-8-7-6-5 is the longest consecutive sequence of decreasing integers
 longestFall([]); // 0 -> 5-3-1 is the longest consecutive sequence of decreasing integers   
 */ 
// add whatever parameters you deem necessary
function longestFall(arr) {
    let tempCounter = 1;
    let  maxCounter = 0;

    //if there is nothing in our array, we will return zero

    if(arr.length === 0){
        return 0;
    } 
//[5,4,3,9] 
    //next we want to loop over the elements in the array starting at index of 1 instead of zero
    //we want to determine if the value in index 1 is less than the value at the previous index
    //index (0)
    //if true, then we add 1 to count 
    for (let i= 1; i< arr.length; i++) {
        if(arr[i] < arr[i-1]){
            tempCounter++;
            maxCounter = Math.max(tempCounter, maxCounter);
        }else{
            tempCounter =1;
        }
    }
    return maxCounter || 1;  
}


//we can assume the longest fall is 1 if at least number has been provided
//if there are no numbers provided, we can return zero
//we will need a variable to hold the temporary count
// we will need a variable to hold the max count


