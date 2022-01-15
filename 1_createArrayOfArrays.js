
function createArrayOfArrays(arr) {
    let upperCase = [...arr];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = [];

        arr[i] = arr[i].toLowerCase();
        arr[i] = arr[i].split("");
        arr[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join("")

        temp.push(arr[i], upperCase[i].slice(0, 3), arr[i].length)

        result.push(temp)
    }
    return result
}

const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
]

console.log(createArrayOfArrays(countries))