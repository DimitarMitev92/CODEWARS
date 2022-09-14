function moveZeros(arr) {
    let arrZeros = arr.filter(el => el === 0);
    let arrWithoutZeros = arr.filter(el => el !== 0);
    let result = arrWithoutZeros.concat(arrZeros);
    return result;
}