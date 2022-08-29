function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    let average = classPoints.reduce((a, b) => a + b) / classPoints.length;
    return average < yourPoints ? true : false;
}