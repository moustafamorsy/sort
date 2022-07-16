
let unsorted = [5 , 50 , 7 , 1 , 3 , 10 , 8 , 9 , 4 , 2 , 6  ]

let unsorted1 = [5 , 50 , 7 , 1 , 3 , 10 , 8 , 9 , 4 , 2 , 6 , 0 ]

let unsorted2 = [5 , 50 , 7 , 1 , 3 , 10 , 8 , 9 , 4 , 2 , 6 , 0 ]

let unsorted3 = [5 , 50 , 7 , 1 , 3 , 10 , 8 , 9 , 4 , 2 , 6 , 0 ]

// compare and swap the 2 data beside each other in order time complaxity worse case O(n2)

function Bubblesort(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {

        if (array[j] > array[j+1]) {

          swap(array , j , j+1);}
    }  
    }
    console.log(array);
}

function swap(array, j , change) {

 let temp = array[j] ;

 array[j] = array[change] ;

 array[change] = temp ;

}

 Bubblesort(unsorted);

// shift the data in order like order cards in hand time complaxity worse case O(n2)

function Inserectionsort(array) {

    for (let i = 1; i < array.length; i++) {

        let current = array[i] ;

        var j = i - 1 ;

     while (j >= 0 && array[j] > current) {

        array[j+1] = array[j] ;

        j-- ;
     }
     array[j+1] = current;
}
console.log(array);
}

Inserectionsort(unsorted1);




// merge sort  time complaxity worse case O(log n)

const mergeSort = array => {
    //Check if array can be split
    if(array.length < 2) return array;
    //Get Middle index
    const middle = Math.floor(array.length / 2);
    //Split Array In Two Sides
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);
    //Use recusion to continue splitting
    console.log('split:', leftSide, rightSide);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
  
  const merge = (left, right) => {
    //Create New Array
    const result = [];
    //Check if left array and right array is empty
    while(left.length && right.length) {
      //Find lower value
      if(left[0] <= right[0]) {
        //Add left value
        result.push(left.shift());
      } else {
        //Add right value
        result.push(right.shift());
      }
    }
    //Merge left array
    while(left.length) result.push(left.shift());
    //Merge right array
    while(right.length) result.push(right.shift());
    //return result array
    console.log('result:', result);
    return result;
  }

console.log(mergeSort(unsorted2));

// Javascript implementation of QuickSort 
  
  
// A utility function to swap two elements
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    
}
  
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, low, high) {
  
    // pivot
    let pivot = arr[high];
  
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
  
    for (let j = low; j <= high - 1; j++) {
  
        // If current element is smaller 
        // than the pivot
        if (arr[j] < pivot) {
  
            // Increment index of 
            // smaller element
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
    
}
  
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(arr, low, high) {
    if (low < high) {
  
        // pi is partitioning index, arr[p]
        // is now at right place 
        let pi = partition(arr, low, high);
  
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

quickSort(unsorted3, 0, unsorted3.length - 1); 
console.log(unsorted3);

// linear search he list or array is traversed sequentially and every element is checked complaxity worse case O(n)

function LinearSearch(array , target) {
    for (let i = 0; i < array.length; i++) {
       if (array[i] == target) {
         return i ;
       }
    }
    return - 1 ;
}

console.log(LinearSearch(unsorted, 3));

// binary search need sorted list time complaxity worse case O(log n)

function BinarySearch(array , target) {

let left = 0 ;

let right = array.length - 1 ;

while (left <= right) {

    const mid = Math.floor((right + left) / 2);

    if (target === array[mid]) {
       
       return mid  ;
      }
    if (target < array[mid]) {
      
        right = mid - 1 ;
    } else{
      
        left = mid + 1 ;
    }
}
return -1 ;
}

console.log(BinarySearch(unsorted, 5));

