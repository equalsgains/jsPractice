// reverse array

var array = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    var reversedArr = arr.reverse();
    reversedArr.forEach(function (list) {
        console.log(list);
    })
};

// is it uniform

var yes = [1, 1, 1, 1, 1, 1, 1],
    no = [1, 1, 1, 1, 1, "i",];

function isUniform(arr) {
    var same = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== same) {
            return false
        }
    }
    return true

};