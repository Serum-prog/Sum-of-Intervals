function Qsort (intervals) { //Sort of matrix
intervals.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];  // сортировка по первому элементу
  } else {
    return a[1] - b[1];  // сортировка по второму элементу
  }
})
    return intervals
}
function QuickSort(narr)
{
    if (narr.length == 0) return [];
    var a = [], b = [], p = narr[0];
    for (var i = 1; i < narr.length; i++)
     { if (narr[ i ] < p) a[a.length] = narr[ i ];
       else b[b.length] = narr[ i ];
     }
    return QuickSort(a).concat( p,QuickSort(b) );
}
function HeapSort(narr) {     
  if (narr.length == 0) return [];
    var n = narr.length, d = Math.floor(n/2), j, k, t;
    while (true)
    { if (d > 0) t = narr[--d];
      else { n--;
             if (n == 0) return narr;
             t = narr[n];  narr[n] = narr[0];
           }        
      j = d;  k = j*2+1;
      while (k < n)
       { if (k+1 < n && narr[k+1] > narr[k]) k++;
         if (narr[k] > t)
          { narr[j] = narr[k];  j = k;  k = j*2+1; }
         else break;
       }
      narr[j] = t; 
    }
 }
function sumIntervals(intervals) {
    let arr = []
    let narr = []
    
    let sum = 0

    console.log ('intervals')
    
//    for (let j = intervals.length - 1; j > 0; j--) { //Bubble Sort
//      for (let i = 0; i < j; i++) {
//        if (intervals[i][0] > intervals[i + 1][0]) {
//          let temp = intervals[i];
//          intervals[i] = intervals[i + 1];
//          intervals[i + 1] = temp;
//       }
//      }
//    }
 
    intervals = Qsort(intervals)
    //console.log('sort')
    var seen = {};
    
    var len = intervals.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = intervals[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               arr[j++] = item;
         }
    }  //Delete same items in array
    //console.log('DEl')
    for (let i = 0; i<arr.length; i ++) {
                                     
      if (i+1 <= arr.length -1){
        let last = arr[i].length
        let l1 =  arr[i+1].length
        let per1 =narr.length
        if (arr[i][last - 1] >= arr[i+1][0] || narr[per1 - 1]>=arr[i+1][0]) {
          
          narr.push(arr[i][0])
          if (arr[i][last-1]< arr[i+1][l1-1]){
          narr.push(arr[i+1][l1-1])
          } else {
              narr.push(arr[i][last-1])
            }
            let per =narr.length
            if (narr[per-1]<narr[per-3] && per-3 >=0) {
              narr.push(narr[per-3])
            }
        } else {
            let length = narr.length
            if (length > 0 ) {
             sum = narr[length - 1] - narr[0] +sum
            } else {
                sum = arr[i][last - 1] - arr[i][0] + sum    
              }
            narr = []
         } 
      } else { 
          let length_else = narr.length
          if (length_else > 0 ) {
            sum = narr[length_else - 1] - narr[0] +sum} 
            else {
              let last_e = arr[i].length
              sum = arr[i][last_e - 1] - arr[i][0] + sum }
          }    
    }
    //console.log('RES', sum)
    return sum
}
