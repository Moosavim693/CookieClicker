// interducing variables to access HTML elements
//spendable money
const walletpath = document.querySelector(".wallet");
//the main cookie button
const cookiepath = document.querySelector(".mainCookie");
//the upgrades tab
const addonspath = document.querySelector(".addons");
let clickMultiplier = 1;
let wallet = 0;
let totalincome = 0;

function income (incomeValue){
    wallet = wallet + incomeValue;
    totalincome = totalincome + incomeValue;
    walletpath.textContent = wallet;
}

function cookieClicked(){
    income(1*clickMultiplier);
    console.log(totalincome);
}

cookiepath.addEventListener("click", cookieClicked);

