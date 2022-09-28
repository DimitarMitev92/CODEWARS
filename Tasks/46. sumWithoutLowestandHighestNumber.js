function sumArray(array) {
    if (array === null || array === undefined) {
        return 0;
    } else if (array.length <= 2) {
        return 0;
    } else {
        let min = Math.min(...array);
        let indexMin = array.indexOf(min);
        array.splice(indexMin, 1);
        let max = Math.max(...array);
        let indexMax = array.indexOf(max);
        array.splice(indexMax, 1);
        let sum = array.reduce((acc, num) => acc + num);
        return sum;
    }
}
