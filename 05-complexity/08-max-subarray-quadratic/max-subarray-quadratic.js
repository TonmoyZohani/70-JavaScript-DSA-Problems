function maxSubarraySum(arr, k) {
  if (arr.length < k) {
    return "Invalid input"; // Check if the array is smaller than k.
  }

  let maxSum = 0;

  // Calculate the initial sum of the first 'k' elements.
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  // Iterate through the array to find the maximum subarray sum.
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i]; // Update the sum by subtracting the first element and adding the next element.
    maxSum = Math.max(maxSum, currentSum); // Update the maximum sum if needed.
  }

  return maxSum;
}

const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
const k1 = 3;

console.log(maxSubarraySum(arr1, k1)); // Output: 24
