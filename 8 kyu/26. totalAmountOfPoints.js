function points(games) {
    let points = 0;
    for (let game of games) {
        let [x, y] = game.split(':');
        x = Number(x);
        y = Number(y);
        if (x > y) {
            points += 3;
        } else if (x === y) {
            points += 1
        }
    }
    return points
}