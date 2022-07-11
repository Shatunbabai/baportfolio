
const gamePlace = document.querySelector("#trcf");
let heroes = document.querySelector('.buyHero')
let skelet = document.querySelector('.buySkelet')
let button = document.getElementById("forJs");
let goldClick = document.getElementById("chest");
let goldNow = document.querySelector('.gameMoney')
let goldPerSeconds = document.querySelector('.moneyPerSec')
let goldPerSec = 0;
let gold = 0;
// hero$skelet
let skeletCost = 20
let skeletLevel = 1
let heroCost = 10
let heroLevel = 1


let whatAreYouDoing = 0;

button.onclick = function click() {
    whatAreYouDoing++;
    if (whatAreYouDoing > 10) {
        gamePlace.style.display = "flex";
    } else {
        let howManyClick = 11 - whatAreYouDoing
        console.log(`Осталось нажать ${howManyClick}`)
    }
};

goldClick.onclick = function click() {
    gold++;
    goldNow.innerHTML = `⭐ ${gold}`
}

heroes.onclick = function click() {
    if (gold < heroCost) {
        console.log("Need more gold")
    } else {
        gold -= heroCost;
        goldPerSec += heroLevel
        goldPerSeconds.innerHTML = `🗡️ ${goldPerSec}`
        heroLevel = heroLevel*2
        heroCost = heroCost*4
        heroes.innerHTML = `🛒 ${heroCost}`
    }
}

skelet.onclick = function click() {
    if (gold < skeletCost) {
        console.log("Need more gold")
    } else {
        gold -= skeletCost;
        goldPerSec += skeletLevel
        goldPerSeconds.innerHTML = `🗡️ ${goldPerSec}`
        skeletLevel = skeletLevel*3
        skeletCost = skeletCost*4
        skelet.innerHTML = `🛒 ${skeletCost}`
    }
}

function farm() {
    gold = goldPerSec+gold
    goldNow.innerHTML = `⭐ ${gold}`
    goldPerSeconds.innerHTML = `🗡️ ${goldPerSec}`
}

let goldFarm = setInterval(farm, 1000);