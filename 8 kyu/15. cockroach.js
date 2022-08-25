function cockroachSpeed(s) {
    if (s === 0) {
        return 0;
    } else {
        return Math.floor(s * 5 / 18 * 100);
    }
}