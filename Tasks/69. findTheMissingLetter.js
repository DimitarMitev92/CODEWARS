function findMissingLetter(array) {
    let arrayNum = array
        .map(x => x.charCodeAt())
        .sort((a, b) => b - a)

    for (let i = 0; i < arrayNum.length - 1; i++) {
        let result = arrayNum[i] - arrayNum[i + 1];
        if (result === 2) {
            let resultToString = String.fromCharCode(arrayNum[i] - 1);
            return resultToString;
        }
    }
}
