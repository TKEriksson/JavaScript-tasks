let bananaPrice = 5;
let applePrice = 10;
let kiwiPrice = 8;
let mangoPrice = 15;
let orangePrice = 25;

let bananaQ = 0;
let appleQ = 0;
let kiwiQ = 0;
let mangoQ = 0;
let orangeQ = 0;

let bananaCost = 0;
let appleCost = 0;
let kiwiCost = 0;
let mangoCost = 0;
let orangeCost = 0;
let totalCost = 0;

let payment = 0;

document.getElementById("bananaQ").addEventListener("change", calc);
document.getElementById("appleQ").addEventListener("change", calc);
document.getElementById("kiwiQ").addEventListener("change", calc);
document.getElementById("mangoQ").addEventListener("change", calc);
document.getElementById("orangeQ").addEventListener("change", calc);
document.getElementById("totalPay").addEventListener("change", calc);

function calc() {
  bananaQ = document.getElementById("bananaQ").value;
  bananaCost = bananaPrice * bananaQ;
  document.getElementById("bananaCost").innerHTML = bananaCost;

  appleQ = document.getElementById("appleQ").value;
  appleCost = applePrice * appleQ;
  document.getElementById("appleCost").innerHTML = appleCost;

  
  kiwiQ = document.getElementById("kiwiQ").value;
  kiwiCost = kiwiPrice * kiwiQ;
  document.getElementById("kiwiCost").innerHTML = kiwiCost;

  
  mangoQ = document.getElementById("mangoQ").value;
  mangoCost = mangoPrice * mangoQ;
  document.getElementById("mangoCost").innerHTML = mangoCost;

  
  orangeQ = document.getElementById("orangeQ").value;
  orangeCost = orangePrice * orangeQ;
  document.getElementById("orangeCost").innerHTML = orangeCost;


  totalCost = bananaCost + appleCost + kiwiCost + mangoCost + orangeCost;
  document.getElementById("totalCost").innerHTML = totalCost;

  


  let totalPay = document.getElementById("totalPay").value;

  if (totalPay < totalCost) {
    document.getElementById("totalPay").value = totalCost;
    totalPay = totalCost;
  }

  let totalPayback = totalPay - totalCost;
  document.getElementById("totalPayback").innerHTML = totalPayback;



  let count1000 = howMany(totalPayback, 1000);
  totalPayback -= count1000 * 1000;

  let count500 = howMany(totalPayback, 500);
  totalPayback -= count500 * 500;

  let count100 = howMany(totalPayback, 100);
  totalPayback -= count100 * 100;

  let count50 = howMany(totalPayback, 50);
  totalPayback -= count50 * 50;

  let count20 = howMany(totalPayback, 20);
  totalPayback -= count20 * 20;

  let count10 = howMany(totalPayback, 10);
  totalPayback -= count10 * 10;

  let count5 = howMany(totalPayback, 5);
  totalPayback -= count5 * 5;

  let count2 = howMany(totalPayback, 2);
  totalPayback -= count2 * 2;

  let count1 = howMany(totalPayback, 1);
  totalPayback -= count1 * 1;
  
  document.getElementById("count1000").innerHTML = count1000;
  document.getElementById("count500").innerHTML = count500;
  document.getElementById("count100").innerHTML = count100;
  document.getElementById("count50").innerHTML = count50;
  document.getElementById("count20").innerHTML = count20;
  document.getElementById("count10").innerHTML = count10;
  document.getElementById("count5").innerHTML = count5;
  document.getElementById("count2").innerHTML = count2;s
  document.getElementById("count1").innerHTML = count1;


  // This working, next is to create moneyimages based on Q.

}

function howMany(value, total) {
  return Math.floor(value / total);
}


