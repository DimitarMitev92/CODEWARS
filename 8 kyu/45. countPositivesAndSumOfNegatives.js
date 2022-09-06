function countPositivesSumNegatives(input) {
    if (input === null || input === undefined || input.length === 0) {
        return [];
    } else {
        let countPositive = 0;
        let sumNegative = 0;
        input.forEach(num => {
            if (num > 0) {
                countPositive++;
            } else if (num < 0) {
                sumNegative += num;
            }
        });
        return [countPositive, sumNegative];
    }
}