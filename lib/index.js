function map(arr, fn) {
    const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i)) {
            mappedArr[i] = fn(arr[i]);
        }
    }
    return mappedArr;
}

function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (fn(element)) {
            filteredArr.push(element);
        }
    }
    return filteredArr;
}

function reduce(arr, fn, initialValue) {
    let i = 0;
    let acc = initialValue;
    if (!acc) {
        acc = arr[0];
        i = 1;
    }
    for (i; i < arr.length; i++) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}
function findIndex(arr, fn) {
    const findIndexArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = i;
        if (fn(arr[i])) {
            return i;
        }
    }
    return -1;
}
function every(arr, fn) {
    const every = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return true;
        }
        return false;
    }
    // function forEach(arr, fn) {
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr.length.hasOwnProperty(i)) fn(arr[i])
    //     }
    // }
}
module.exports = {
    map,
    filter,
    reduce,
    findIndex,
    every
};
