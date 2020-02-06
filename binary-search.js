let binarySearch = function (array, target) {
    let start = 0;
    let end = array.length-1;

    while (start <= end) {
        let mid = Math.floor((start + end)/2);

        if (array[mid]===target)
            return true;
        else if ( array[mid] < target)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}

let array = [1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 20];
let target = 25;
let result = binarySearch(array, target);

if (result === true) {
    console.log(target + ' was found.');
} else {
    console.log(target + ' was not found.')
}