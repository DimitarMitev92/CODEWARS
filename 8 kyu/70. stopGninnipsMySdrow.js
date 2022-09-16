function spinWords(string) {
    let stringArr = string.split(' ');
    let resultArr = [];
    for (let word of stringArr) {
        if (word.length >= 5) {
            let reverseWord = word.split('').reverse().join('')
            resultArr.push(reverseWord);
        } else {
            resultArr.push(word);
        }
    }
    let result = resultArr.join(' ');
    return result;
}