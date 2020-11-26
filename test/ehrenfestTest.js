function rollDiceTest(nSurfaces, nLoop){
    console.log("rollDiceTest(" + nSurfaces + ", " + nLoop + ")");
    for (let i = 0; i < nLoop; i++) {
        let tmp = Dice.rollDice(nSurfaces);
        if(tmp < 0 || tmp >= nSurfaces){
            return "Error!, DiceNumber is " + tmp;
        }
    }
    return "OK";
}

console.log(rollDiceTest(6, 50));

function initBallsTest(nBalls, actual) {
    console.log("initBallsTest(" + nBalls + ", actual)");
    let balls = new Balls(nBalls);
    for (let i = 0; i < nBalls; i++) {
        if (balls.getBagsOfBalls[i] != actual[i]) {
            return "Error!, balls.getBagsOfBalls[" + i + "] = " + balls.getBagsOfBalls[i] + ", actual[" + i + "] = " + actual[i] ;
        }
    }
    return "OK";
}

console.log(initBallsTest(4, [1, 1, 2, 2])) ;
console.log(initBallsTest(5, [1, 1, 2, 2, 2])) ;

function updateTest(ballsInstance, changeSurface, actualBagsOfBalls) {
    console.log("updateTest : ");
    let nextBallsInstance = Balls.update(ballsInstance, changeSurface);
    for (let i = 0; i < ballsInstance.getnBalls; i++) {
        if (ballsInstance.getBagsOfBalls[i] != actualBagsOfBalls[i]) {
            return "Error! index : " + i + ". expected is " + ballsInstance.getBagsOfBalls[i] + ", actual is " + actualBagsOfBalls[i];
        }
    }
    return "OK!"
}

console.log(updateTest(new Balls(6, [1, 1, 1, 2, 2, 2]), 1, [1, 2, 1, 2, 2, 2]));
console.log(updateTest(new Balls(6, [1, 1, 1, 2, 2, 2]), 3, [1, 1, 1, 1, 2, 2]));

function nFirstSecondTest(ballsInstance, actualnFirst, actualnSecond) {
    if (ballsInstance.getnFirsts == actualnFirst && ballsInstance.getnSeconds == actualnSecond) {
        return "OK!"
    } else {
        return "Error! expected is (" + ballsInstance.getnFirsts + ", " + ballsInstance.getnSeconds + "), actual is (" + actualnFirst + ", " + actualnSecond + ")";
    }
}

console.log(nFirstSecondTest(new Balls(6, [1,1,1,1,1,1]), 6, 0));
console.log(nFirstSecondTest(new Balls(6, [2,2,2,2,2,2]), 0, 6));
console.log(nFirstSecondTest(new Balls(6, [1,1,1,2,2,2]), 3, 3));