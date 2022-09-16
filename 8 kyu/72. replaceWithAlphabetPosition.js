function alphabetPosition(text) {
    let textLower = text.toLowerCase();
    let resultArr = [];
    for (let char of textLower) {
        let numChar = char.charCodeAt();

        if (numChar >= 97 && numChar <= 122) {
            resultArr.push(numChar - 96);
        }
    }
    let result = resultArr.join(' ');
    return result;
}