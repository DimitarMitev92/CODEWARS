function sum(numbers) {
    if (numbers.length === 0) {
        return 0;
    } else if (numbers.length === 1) {
        return numbers[0]
    } else {
        let result = numbers.reduce((acc, num) => acc + num);
        return result;
    }
};