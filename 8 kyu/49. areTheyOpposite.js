function isOpposite(s1, s2) {
    let isValid = true;
    if (s1.length !== s2.length || (s1.length === 0 && s2.length === 0)) {
        return false;
    } else {
        for (let i = 0; i < s1.length; i++) {
            let s1Char = s1[i];
            let s1CharAscii = s1Char.charCodeAt();
            let s2Char = s2[i];
            if (s1Char.toLowerCase() !== s2Char.toLowerCase()) {
                return false;
            }
            if (s1CharAscii >= 65 && s1CharAscii <= 90) {
                if (s1Char === s2Char) {
                    return false;
                }
            } else if (s1CharAscii >= 97 && s1CharAscii <= 122) {
                if (s1Char === s2Char) {
                    return false;
                }
            }
        }
    }
    if (isValid) {
        return true;
    }
}