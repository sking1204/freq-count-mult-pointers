/* Write a function called pivotIndex which accepts an array of integers , and returns the pivot index
where the sum of the items to the left equal lto the sum of the items to the right.
If there are more than one valid pivot index, return the smallest value.

Examples

pivotIndex([1,2,1,6,3,1]) // 3
pivotIndex([5,2,7]) //-1 (no valid pivot index)
pivotIndex([-1,3,-3,2]) // 1

*/


function pivotIndex(nums) {
    let rightSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    let pivotIdx = -1;
    for (let i = 0; i < nums.length; i++) {
      leftSum += nums[i];
      if (leftSum === rightSum) {
        pivotIdx = i;
        break;
      }
      rightSum -= nums[i];
    }
    return pivotIdx;
  }
  
  
  /* 
  //initialization:
  nums = [1,2,1,6,3,1]
  cur value =1
  rightSum = 1+2+1+6+3+1 (using arr.reduce) = 14
  leftSum = 0;
  pivotIdx = -1
  
  *Loop Iteration 1
  i=0;
  leftSum=0;
  rightSum=14
  
  leftSum = leftSum + nums[i] --> left sum = 0 + 1 =1 
  Since left sum is not equal to right sum
  rightSum = rightSum - nums[i] --> right sum = 14-1 =13
  
  *Loop Iteration2
  i=1
  leftSum= 1
  rightSum=13
  
  leftSum = leftSum + nums[i] --> left sum = 1 + 2 =3
  Since left sum is not equal to right sum
  rightSum = rightSum - nums[i] --> right sum = 13-2 =11
  
  *Loop Iteration3
  i=2
  leftSum=3
  rightSum =11
  
  leftSum = leftSum + nums[i] --> left sum = 3 +1 =4
  Since left sum is not equal to right sum
  rightSum = rightSum -nums[i] --> right sum = 11-1 = 10
  
  *Loop Iteration4
  i=3
  leftSum = 4
  rightSum =10
  
  leftSum = leftSum + nums[i] --> 4+6 = 10
  rightSum =10
  left sum is equal to right sum, so we return pivot index of 3
  
  
  
  
  
  */
  
  
  
  // 'a' is the accumulator
  // 'b' is the current value
  
  
  
  //cur value =1
  
  //left sum =1
  
  