let arr=[1,1,1,1,1,1];

function diff(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}
console.log(diff(arr))