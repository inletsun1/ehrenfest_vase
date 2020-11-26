/* nSurfaces面のサイコロを振る */ 
class Dice {
    static rollDice(nSurfaces){
        return Math.floor(Math.random() * nSurfaces);
    }
}

/* ボールが2つの袋のうちどちらに入っているか */
class Balls {
    /* 袋の名前 */
    static BAGS = {
        FIRST : 1,
        SECOND : 2
    };
    #nBalls;
    /** 各ボールがどの袋に入っているか
     * インデックスはボールの名前(0からnBalls-1)
     * */
    #bagsOfBalls;
    constructor(nBalls, bagsOfBalls){
        this.#nBalls = nBalls;
        if (typeof bagsOfBalls == 'undefined') {
            this.initBalls();
        } else {
            this.#bagsOfBalls = bagsOfBalls;
        }
    }
    /* 初期盤面の設定 */
    initBalls() {
        this.#bagsOfBalls = Array(this.#nBalls);
        this.#bagsOfBalls.fill(Balls.BAGS.SECOND);
        for(let i = 0; i < Math.floor(this.#nBalls / 2); i++) {
            this.#bagsOfBalls[i] = Balls.BAGS.FIRST;
        }

    }

    /* 盤面の更新 */
    static update(ballsInstance, changeSurface) {
        let tmpBagsOfBalls = ballsInstance.getBagsOfBalls;
        if (tmpBagsOfBalls[changeSurface] == Balls.BAGS.FIRST) {
            tmpBagsOfBalls[changeSurface] = Balls.BAGS.SECOND;
        } else {
            tmpBagsOfBalls[changeSurface] = Balls.BAGS.FIRST;
        }
        return new Balls(ballsInstance.getnBalls, tmpBagsOfBalls);

    }
    /* getter */
    get getnBalls() {
        return this.#nBalls;
    }

    get getBagsOfBalls() {
        return this.#bagsOfBalls;
    }

    /* bagsOfBallsのうち、FIRSTの袋に入っているボールの数 */
    get getnFirsts() {
        return this.getBagsOfBalls.reduce((sum, element) =>  
        {return element == Balls.BAGS.FIRST ? sum + 1 : sum}, 0);
    }

    /* bagsOfBallsのうち、SECONDの袋に入っているボールの数 */
    get getnSeconds() {
        return this.getBagsOfBalls.reduce((sum, element) =>  
        {return element == Balls.BAGS.SECOND? sum + 1 : sum}, 0);
    }

}