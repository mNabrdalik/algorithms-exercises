/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

//my solution
function bubbleSort(nums) {
  for(let i = 0; i < nums.length; i++) {
    let iterations = 0;

    for(let j = 1; j < nums.length; j++) {
      if(nums[j] < nums[j - 1]) {
        let leftNum = nums[j - 1];
        let rightNum = nums[j];
        iterations += 1;
        
        //swap nums
        nums[j - 1] = rightNum;
        nums[j] = leftNum;
      }
    }

    if(iterations === 0) {
      return nums;
    }

  }

  return nums;
}

//solution from course
// function bubbleSort(nums) {
//   do {
//     swapped = false;
//     for(let i = 0; i < nums.length; i++) {
//       if(nums[i] > nums[i + 1]) {
//         const temp = nums[i];
//         nums[i] = nums[i + 1];
//         nums[i + 1] = temp;
//         swapped = true;
//       }
//     }

//   } while (swapped)
// }


// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
