
// let p=1000;
// let r=0.05;
// let t=2;

// let si=(p*r*t)/100;

// document.getElementById('result').innerHTML = "Simple Interest: $" + si.toFixed(2);

document.getElementById('principal').innerHTML="Amount: "
document.getElementById('rate').innerHTML="Rate: "
document.getElementById('time').innerHTML="Time: "
function simpleInterest() {
let p=10000;
let r=0.1;
let t=6;

    document.getElementById('principal').innerHTML = "Amount: 10,000";
    document.getElementById('rate').innerHTML = "Rate: 0.1";
    document.getElementById('time').innerHTML = "Time: 6";

    let si=p*(1 +(r*t));
    let interest=si - p;
    document.getElementById('result').innerHTML = "Simple Interest: " + interest.toFixed(2);
}