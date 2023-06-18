const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreIndia = calcAverage(44, 23, 71);
const scoreAustrila = calcAverage(35, 87, 42);
console.log(scoreIndia, scoreAustrila);

const checkWinner = function (avgIndia, avgAustrila) {
    if (avgIndia >= 2 * avgAustrila) {
        console.log(`India wins 🏆 ${avgIndia} vs ${avgAustrila}`);
    } else if (avgAustrila >= 2 * avgIndia){
        console.log(`Austrila wins 🏆 ${avgAustrila} vs ${avgIndia}`);
    } else {
        console.log('No team wins');
    }
}

checkWinner(scoreIndia, scoreAustrila);