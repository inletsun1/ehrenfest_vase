let nLoop = 1000;
let nSurfaces = 100;
let ctx = document.getElementById('myChart').getContext('2d');
let balls = new Balls(nSurfaces, new Array(nSurfaces).fill(Balls.BAGS.FIRST));
let xData = new Array(nLoop);
for(let i = 0; i < nLoop; i++) {
    xData[i] = i;
}
let yData = new Array(nSurfaces);
for (let i = 0; i < nLoop; i++) {
    yData[i] = balls.getnFirsts;
    balls = Balls.update(balls, Dice.rollDice(nSurfaces));
}
let data = {
    labels: xData,
    datasets: [{
        label: "壺1に入っているボールの数",
        data: yData
    }]
};
let myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: nSurfaces
                }
            }]
        }
    }
});