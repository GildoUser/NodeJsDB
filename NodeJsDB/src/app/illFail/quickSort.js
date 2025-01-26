

let meuArray = [54,12,44,21,5,1,3,4];

function quickSort(arr, left=0, right = arr.length-1 ){

    if(left < right){

        const p = partition(arr,left, right)
        quickSort(arr,left, p-1)
        quickSort(arr,p+1, right)
    }
    return arr

    
};

function partition(arr, left, right){
    i= left-1;
    for(let j = left; j < right; j++){
        if(arr[j] < arr[right]){
            i++
            swap(arr, i, j)
                                                                                                        
        }
    }
    swap(arr,i+1, right)
    return i+1
 
}
function swap(arr, a, b){
    [arr[a], arr[b]] = [arr[b],arr[a]]
    return arr
    
}
console.log(quickSort(meuArray))
