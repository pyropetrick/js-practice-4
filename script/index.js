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
    for (let i of value) {
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

// task 6


let foo = function () {
     console.log('foo')
}
let boo = function () {
    console.log('boo')
}
// я так понял это задание, но если задавать в качестве параметра , как написано в hw , то что мы даем этим функциям.
function fooboo(check, funcOne, funcTwo) {
     if (check) return funcOne();
    else return funcTwo();
}

fooboo(false, foo,boo)

// advanced lvl
// task 1

function triangleCreate(a, b, c) {
     if ((a + c > b) && (a + b > c) && (b + c > a)) return console.log('true');
     else return console.log('false');
     // аналогично по теореме пифагора можно
}
triangleCreate(5,8,10);

 // task 2

function chocolateBreak(x, y) {
    let chocolateBreaks = 0;
    let yBreak = 0;
    let xBreak = 0;
    if (x === 0 || y === 0) return console.log('введите корректные данные')
    else {
        for (let i = 0; i < y; i++) {
            yBreak++;

            for (let k = 1; k < x; k++) {
                xBreak++
            }
        }
        chocolateBreaks = xBreak + (yBreak - 1);
        console.log(chocolateBreaks);
    }

}
chocolateBreak(3,2)

function buyPhones(ourMoney) {
    let purchaseAmount = 0;
    const taxPercent = 0.2;
    // переменная с ценами на телефоны
    const phones = [1000,580,420];
    // переменная с ценами на акссесуары
    const accsPhone = [20, 25, 5];
    // тут есть возможность промт использовать , но за счет того что я в шторме это делал , то не использовал)
    let amountPhone = 2;
    let amountAccs = 3;
    // функция для покупки
    function purchase (amtPhones, amtAccs) {
        for (let i = 0; i < amtPhones ;i++) {
            if (ourMoney >= phones[i]) purchaseAmount += phones[i];
            else {
                amountPhone--
                continue;
            }
            for (let k = 0; k < amtAccs; k++) {
                if (ourMoney >= purchaseAmount) {
                    purchaseAmount += accsPhone[k];
                } else {
                    amountAccs--
                    break;
                }

            }
        }
    }
    // функция для вычисления налога с покупки
    function getTax () {
        return purchaseAmount += (purchaseAmount * taxPercent)
    }
    // функция для сравнения сумм и выведения результатов покупок
    function checkSum() {
        if (purchaseAmount <= ourMoney) {
            console.log(`С вас ${purchaseAmount}$, вы купили: ${amountPhone} телефон(а) и по ${amountAccs} акссесуара к ним`)

        } else {
            console.log(`вам не хватает ${purchaseAmount - ourMoney}$ на самый бюджетный вариант`);
        }
    }
    purchase(amountPhone,amountAccs);
    getTax(purchaseAmount);
    checkSum()

}
buyPhones(800)