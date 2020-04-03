function twoSum(arr, target) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    // the key is the value, and the value is turned into the index
    hashMap.set(arr[i], i);
  }
  console.log(hashMap);
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (hashMap.has(complement) && hashMap.get(complement) !== i) {
      // the key has become the value. Does 10 equal where index is at
      return [i, hashMap.get(complement)]; //get value, and the key
    }
    console.log(complement);
  }
  return [];
}

twoSum([2, 2, 4, 4, 5, 7, 8, 9, 10, 45, 3], 12);
