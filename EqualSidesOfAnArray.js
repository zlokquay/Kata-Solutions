function findEvenIndex(arr)
{
  //initializing variables for both sides of the index array.
  let rightSum = 0;
  let leftSum = 0;
  //loop adds every number in the array together.
  for(let i = 0; i < arr.length; i++){
    rightSum = rightSum + arr[i];
  }
  //loop begins by subtracting the leftmost index, then checking equality.
  //If they're equal, it'll return the value at the index last checked.
  //If they are not equal, it will loop again and retest. If it cannot find an
  //appropriate index then loop ends and it returns -1, meaning no results.
  for(let j = 0; j < arr.length; j++){
    rightSum = rightSum - arr[j];
    if (leftSum === rightSum){
      return j;
    }
    leftSum = leftSum + arr[j];
  }
  return -1;
}
