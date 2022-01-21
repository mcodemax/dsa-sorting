/*
merge
Given two sorted arrays, write a function called merge which accepts two sorted arrays and returns a new array with values from both arrays sorted.

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

Also, do not use the built in .sort() method! We’re going to use this function to implement a sort, so the helper itself shouldn’t depend on a sort.

let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

let arr3 = [-2,-1,0,4,5,6];
let arr4 = [-3,-2,-1,2,3,5,7,8];

merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3,4,5]
let arr6 = [1,2]

merge(arr5,arr6) // [1,2,3,4,5]
*/
function merge(arr1, arr2) {
	const retArr = [];
  let [i,j] = [0,0];

	while(i < arr1.length && j < arr2.length){
  	if(arr1[i] < arr2[j]){
      	retArr.push(arr1[i]);
        i++;
      }else{
        retArr.push(arr2[j]);
        j++;
      }
  }
  
  while(i < arr1.length){
  	retArr.push(arr1[i])
    i++;
  }
  
  while(j < arr2.length){
  	retArr.push(arr2[j])
    j++;
  }
  
  return retArr;
}

function mergeSort(arr) {
	//split arrays in to half until they are size 0 or 1
	if(arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2)
	const leftArr = mergeSort(arr.slice(0, mid));
	const rightArr = mergeSort(arr.slice(mid));
	return merge(leftArr, rightArr)
}

module.exports = { merge, mergeSort};
