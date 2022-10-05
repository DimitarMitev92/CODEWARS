function queueTime(customers, n) {
    if (n === 0) return 0;
    let checkouts = Array(n).fill(0);
    for (let time of customers) {
        let index = checkouts.indexOf(Math.min(...checkouts));
        checkouts[index] += time;
    }
    return Math.max(...checkouts);
}
