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
     button : document.querySelector("#upgradebtn"),
     cost : document.querySelector(".upgradeCost"),
     tier : document.querySelector(".upgradeTier"),
};
//baker1 allan
const baker1path = {
    button:document.querySelector("#baker1btn"),
    cost  :document.querySelector("#baker1Cost"),
    count :document.querySelector("#baker1Count"),
};
//baker2 allan
const baker2path = {
    button:document.querySelector("#baker2btn"),
    cost  :document.querySelector("#baker2Cost"),
    count :document.querySelector("#baker2Count"),
};
//baker3 allan
const baker3path = {
    button:document.querySelector("#baker3btn"),
    cost  :document.querySelector("#baker3Cost"),
    count :document.querySelector("#baker3Count"),
};
let upgradeButton = { cost : 100, modifier : 2,};

let baker1 = { cost:100,  CPS:1, count:0,};
let baker2 = { cost:400,  CPS:2, count:0,};
let baker3 = { cost:2000, CPS:4, count:0,};

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
}

function upgrade(){
    if (wallet >= upgradeButton.cost) {
        wallet = wallet - upgradeButton.cost;
        walletpath.textContent = wallet;
        clickMultiplier = clickMultiplier + upgradeButton.modifier;
        upgradeButton.modifier =Math.floor( upgradeButton.modifier + (upgradeButton.modifier/2));
        upgradeButton.cost =Math.floor( upgradeButton.cost *8);   
        upgradeButtonpath.cost.textContent = upgradeButton.cost;
        upgradeButtonpath.tier.textContent ++;
    }
}

function bakerBuy(bakernum, bakernumpath){
    if (wallet >= bakernum.cost){
        wallet = wallet - bakernum.cost;
        walletpath.textContent = wallet;
        bakernum.cost =Math.floor( bakernum.cost + (bakernum.cost/2));
        bakernumpath.cost.textContent = bakernum.cost;
        CPS = CPS + bakernum.CPS;
        CPSpath.textContent = CPS;
        bakernum.count ++;
        bakernumpath.count.textContent = bakernum.count;
    }
}

function test(bakernum){
    console.log(bakernum.cost);
}
cookiepath.addEventListener("click", cookieClicked);
upgradeButtonpath.button.addEventListener("click", upgrade);
baker1path.button.addEventListener("click", () => bakerBuy(baker1, baker1path));
baker2path.button.addEventListener("click", () => bakerBuy(baker2, baker2path));

setInterval(() => {
    wallet = wallet + CPS;
    totalincome = totalincome + CPS;
    walletpath.textContent = wallet;
    totalincomepath.textContent = totalincome;
}, 1000);
