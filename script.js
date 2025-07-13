// interducing variables to access HTML elements
//spendable money
const walletpath = document.querySelector(".wallet");
//the main cookie button
const cookiepath = document.querySelector(".mainCookie");
//the upgrades tab
const addonspath = document.querySelector(".addons");
//total income 
const totalincomepath = document.querySelector("#totalIncome");
// cookies per second
const CPSpath = document.querySelector("#cps");
//upgrade button
const upgradeButtonpath = {
     itself : document.querySelector("#upgradebtn"),
     cost : document.querySelector(".upgradeCost"),
     tier : document.querySelector(".upgradeTier"),
}
let upgradeButton = { cost : 100, modifier : 2,};

let CPS = 0.0
let clickMultiplier = 1;
let wallet = 0;
let totalincome = 0;

function income(incomeValue) {
    
    wallet = wallet + incomeValue;
    totalincome = totalincome + incomeValue;
    walletpath.textContent = wallet;
    totalincomepath.textContent = totalincome;

}

function cookieClicked() {
    income(1 * clickMultiplier);
    console.log(totalincome);
}

function upgrade(){
    if (wallet > upgradeButton.cost) {
        wallet = wallet - upgradeButton.cost;
        walletpath.textContent = wallet;
        clickMultiplier = clickMultiplier + upgradeButton.modifier;
        upgradeButton.modifier = upgradeButton.modifier + (upgradeButton.modifier/2);
        upgradeButton.cost = upgradeButton.cost *8;   
        upgradeButtonpath.cost.textContent = upgradeButton.cost;
        upgradeButtonpath.tier.textContent ++;
    }
}

cookiepath.addEventListener("click", cookieClicked);
upgradeButtonpath.itself.addEventListener("click", upgrade);



