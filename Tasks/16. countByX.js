function countBy(x, n) {
    let numArr = [x];
    let result = x;
    for (let i = 0; i < n - 1; i++) {
        result += x;
        numArr.push(result);
    }
    return numArr;
}
