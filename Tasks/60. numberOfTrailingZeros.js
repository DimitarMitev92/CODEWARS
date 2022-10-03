function zeros(n) {
    let zeroes = 0
    while (n !== 0) { zeroes += Math.floor(n /= 5) }
    return zeroes
}
