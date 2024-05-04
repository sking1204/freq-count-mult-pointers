/* Write a function called separatePositive which accepts an array of non-zero integers.
Separate the positive integers to the elft and the negative integers to the right.
The positive and negative numbers need not be in sorted order.
The problem should be done in place ( in other words, do not build a copy of the 
input array.

Examples:

separatePositive([2,-1,-3,6,-8,10]) // [2,10,6,-3,-1,-8]
separatePositive([5, 10, -15, 20,25]) // [5,10,25,20,-15]
separatePositive([-5,5]) // [5,-5]
separatePositive([1,2,3]) // [1,2,3]
) */

// add whatever parameters you deem necessary

//1st attempt: incorrect:
// function separatePositive2(arr) {
//     let left = 0;
//     let right =arr.length-1

//     while(left > right){
//         if (arr[left] > arr[right]){
//             let temp = arr[right];
//             arr[right] = arr[left];
//             arr[left] = temp;
//             right --;
//         }else if(left < right) {
//             left ++;
//         }
//     }
//     return arr;

// }

// [5,10,-15]   > [-15,5,10]

//set up our while condition
// while left > right
// if arr[left] > arr[right]
//then swap and decrement right --

//so we would have:
//[-15,10,5]

//else if left < right

//so if we had [-15,10,5]

//then we want to increment left ++

// 

function separatePositive(arr){
    let left =0;
    let right = arr.length -1;

    //negative values should be on right, positive on left
    //so as long as left is less than or equal to the right value, we want to continue the loop 
    //if left crosses right, then we know we have traversed the entire array
    // [-1,4,6]

    while (left <= right){
        //this handles if left and right are already in their correct positions
        //if left and right are in correct positions, we can move the left and pointer up and right down
        

        // so if our left value is negative, and the right value is greater than zero,
        //we perform the swap. Otherwise we increment the left if left is greater than zero
        //or we decrement the right if right is less than zero
        if(arr[left] < 0 && arr[right] > 0){
            let temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left ++;
            right--;

        }else{
            if(arr[left] >=0) left ++;
            else right--;
        }

    }
    return arr;
}

