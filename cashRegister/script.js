const form = document.getElementById('my-form');
const result = document.getElementById('result');

const price = document.getElementById('price');
const userCash = document.getElementById('user-cash');

let arr = [];

const pennyAmount = document.getElementById('penny-amount');
const nickelAmount = document.getElementById('nickel-amount');
const dimeAmount = document.getElementById('dime-amount');
const quarterAmount = document.getElementById('quarter-amount');
const oneAmount = document.getElementById('one-amount');
const fiveAmount = document.getElementById('five-amount');
const tenAmount = document.getElementById('ten-amount');
const twentyAmount = document.getElementById('twenty-amount');
const hundredAmount = document.getElementById('hundred-amount');

function checkCashRegister(price, cash, cid) {
    let amounts = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];
  
    let surrender = cash - price;
    let change = 0;
    let cidFullCash = 0;
    let cashArr = [];
    let check = false;

    let i = cid.length - 1;
    let j = 0;

    for (let i = 0; i < cid.length; i++) {
        cidFullCash += cid[i][1];
    }
 
    if (surrender > cidFullCash) return {status: "INSUFFICIENT_FUNDS", change: []};
    else if (surrender === cidFullCash) return {status: "CLOSED", change: cid};

    while (i > 0) {
        while (amounts[i][1] > surrender) {
            i--;
        }
        while (change < surrender) {
            while ((+(change + amounts[i][1]).toFixed(2) > surrender) || (cid[i][1] === 0)) {
                if (i === 0) return {status: "INSUFFICIENT_FUNDS", change: []};
                if (check == true) j--;
                i--;
                j++; 
                check = true;
            }

            check = false;

            change = +(change + amounts[i][1]).toFixed(2);
            cid[i][1] = cid[i][1] - amounts[i][1];

            if (!(cashArr.some(elem => elem.includes(amounts[i][0])))) {
                cashArr.push([amounts[i][0], amounts[i][1]]);
            } else {
                cashArr[j][1] += amounts[i][1];
            }

            if (change === surrender) return {status: 'OPEN', change: cashArr};
        }
    }
}

function showResult(obj) {
    let str = '';

    str = `status: ${obj['status']}, [`;

    for (let i = 0; i < obj['change'].length; i++) {
        str += `[${obj['change'][i][0]}: ${obj['change'][i][1]}]`;
    }

    str += ']';

    result.textContent = str;
}
  
form.addEventListener('submit', function(e) {
    e.preventDefault();

    arr = [];

    arr.push(['PENNY', +(pennyAmount.value)]);
    arr.push(['NICKEL', +(nickelAmount.value)]);
    arr.push(['DIME', +(dimeAmount.value)]);
    arr.push(['QUARTER', +(quarterAmount.value)]);
    arr.push(['ONE', +(oneAmount.value)]);
    arr.push(['FIVE', +(fiveAmount.value)]);
    arr.push(['TEN', +(tenAmount.value)]);
    arr.push(['TWENTY', +(twentyAmount.value)]);
    arr.push(['ONE HUNDRED', +(hundredAmount.value)]);

    showResult(checkCashRegister(+price.value, +userCash.value, arr));
});