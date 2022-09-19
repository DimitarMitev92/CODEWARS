const wordsToMarks = (string) => string.split('').map(x => x.toLowerCase()).map(x => x.charCodeAt() - 96).reduce((acc, num) => acc + num);
