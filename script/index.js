// task 1
function getSum(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    console.log(result);
}

getSum(100);

// task 2

function ourCredit(ourSumCredit) {
    const creditPercent = 0.17;
    const creditYears = 5;
    let creditOverPay = (ourSumCredit * creditPercent) * creditYears;
    console.log(Math.floor(creditOverPay));
}

ourCredit(10000);