// Apply Transform Over Each Element in Array


var map = function (arr, fn) {
    const transformArray = []
    for (let i = 0; i < arr.length; i++) {
        transformArray[i] = fn(arr[i], i)
    }
    return transformArray
}