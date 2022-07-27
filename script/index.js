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

// task 4
 function getSumNumbers(value) {
    value += '';
    let sumNumbers = 0;
    for (i of value) {
        i = Number(i);
        sumNumbers += i;
    }
    return console.log(sumNumbers)
 }

getSumNumbers(4222)

// task 5

function getSum(a,b) {
     let result = 0;
     if (a === b) return console.log(`${a} Since both are same`);
     else if (a > b) {
         for ( b ; b <= a; b++) {
             result += b;
         }
     }
     else if (b > a) {
         for ( a ; a <= b; a++) {
             result += a;
         }
     }
     console.log(result)
}

getSum(2,2)