/* Given an array of integers, and a number, find teh number of pairs of integers in the array
whose sum is equal to the second parameter. You can assume that there will be no duplicate
values in the array

Examples

countPairs([3,1,5,4,2],6) //2 (1,5 and 2,4)
countPairs([19,4,8,2,6,0],10) // 3 (2,8 and 10,0)
countPairs([4,6,2,7],10) // 1 (4,6)
countPairs([1,2,3,4,5],10) // 0
countPairs([1,2,3,4,5],-3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2 (1,-1 and 2,-2)

)*/

//Incorrect attempt:

// add whatever parameters you deem necessary
// function countPairs2(arr, num) {
//     let left = 0;
//     let right = arr.length -1;
//     let numPairs=0;
//     while (left <= right){
//         if(arr[left] + arr[right] === num){
//             numPairs ++;
//             left++;
//             right--;
//         }else{
//             if(arr[left] >=0) left ++;
//             else right--;
//         }

//     }
//     return numPairs;


// }




//Example using hash table (javascript object)
function countPairs(arr,num){

let numPairs = 0; 
let numCounts = {};

for(let i=0; i< arr.length; i++){
    let difference = num - arr[i];

    if(numCounts[difference] && numCounts[difference] > 0){
        numPairs += numCounts[difference];
    }
    numCounts[arr[i]] = (numCounts[arr[i]] + 1 || 1);
}
return numPairs
}