/* Write a function called averagePair. Given a sorted array of integers and a target average,
determine if their is a pair of values in the array where teh average of the pair
equals the target average.  There may be more than one pair that matches the average
target.

Constraints: Time Complexity: O(n)

Examples:
averagePair([1,2,3], 2.5); //true
averagePair([1,3,3,5,6,7,10,12,19] , 8); //true
averagePair([], 4); //false


*/



// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
    let left = 0;
    let right = arr.length -1;
    if(!arr.length){
        return false;
    }
    while (left < right){
        let avgRes =findAverage(arr[left], arr[right])
        if(avgRes === targetAvg){
            return true;
        }else if (avgRes < targetAvg){
            left++;
        }else
        right--;
       
    }
    return false;


    
}


function findAverage(num1, num2){
    let res = num1 + num2 / 2;
    return res;
}