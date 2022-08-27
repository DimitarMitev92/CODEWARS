function correct(string) {
    if (string.includes('5')) {
        string = string.replace(/5/g, 'S');
    }
    if (string.includes('0')) {
        string = string.replace(/0/g, 'O');
    }
    if (string.includes('1')) {
        string = string.replace(/1/g, 'I');
    }
    return string;
}