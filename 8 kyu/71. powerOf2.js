function powersOfTwo(n) {
    let resultArr = [];

    for (let i = 0; i <= n; i++) {
        resultArr.push(Math.pow(2, i));
    }
    return resultArr;
}