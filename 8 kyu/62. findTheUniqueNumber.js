function findUniq(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let differentNum;
    if (sortedArr[0] !== sortedArr[1]) {
        differentNum = sortedArr[0];
    } else {
        differentNum = sortedArr[sortedArr.length - 1];
    }
    return differentNum;
}