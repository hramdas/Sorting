
  function quickSort(arr, l, n){
    let index
      if(arr.length > 1){
        index = partition(arr, l, n) //get the left pointer returned
        if(l < index-1){
            //more elements on the left side
            quickSort(arr, l, index-1)
        } if(index < n){
            //more elements on the right side
            quickSort(arr, index, n)
        }
      }
      return arr
  }

  function partition(arr, l, n){
    var pivot = arr[Math.floor((n+l)/2)]
    i = l;
    j = n;
    while(i<=j){
        //increment left pointer if the value is less than the pivot
        while(arr[i]< pivot){
            i++
        }

        //decrement right pointer if the value is more than the pivot
        while(arr[j] > pivot){
            j--
        }

        //Swap
        if(i <= j){
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
    return i
  }


  var arr = [3, 5, 0, 9, 8]
  var l = 0;
  var n = arr.length-1

  console.log(quickSort(arr, l, n))