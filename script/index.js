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

// task 3
function trimString(str,valueFrom, valueOn) {
    return console.log(str.toString().slice(valueFrom,valueOn));
}

trimString('lorem ipsum dolar', 1,13);
