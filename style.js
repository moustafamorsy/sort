
let unsorted = [5 , 50 , 7 , 1 , 3 , 10 , 8 , 9 , 4 , 2 , 6  ]

function sort(array) {

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


console.log(sort(unsorted));