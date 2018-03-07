var toSortArray = [38,27,43,3,9,82,10];

var arraySize = toSortArray.length;


mergeSort(toSortArray, 0, arraySize - 1);

function mergeSort(array, left, right){
  if(left < right){
    let splitValue = parseInt(left + (right - left)/2);
    mergeSort(array, left, splitValue);
    mergeSort(array, splitValue + 1, right);
    

  }
}