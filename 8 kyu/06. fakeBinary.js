function fakeBin(x) {
    let result = '';
    let text = x.split('').forEach(element => {
        if (element < 5) {
            result += '0'
        } else {
            result += '1'
        }
    });
    return result;
}