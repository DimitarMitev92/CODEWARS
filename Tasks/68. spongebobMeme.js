function spongeMeme(sentence) {
    let resultArr = []
    for (let i = 0; i < sentence.length; i++) {
        let currentChar = sentence[i];
        if (typeof currentChar === 'string') {
            if (i % 2 === 0) {
                let result = sentence[i].toUpperCase();
                resultArr.push(result)
            } else {
                let result = sentence[i].toLowerCase();
                resultArr.push(result)
            }
        } else {
            resultArr.push(currentChar)
        }
    }
    let final = resultArr.join('')
    return final
}
