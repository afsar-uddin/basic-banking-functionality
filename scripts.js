function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);

    // clear the deposit input value;
    inputField.value = '';
    return inputValue;
}

function updateTotalField(totalFieldId, newDepositAmount) {
    // debugger;
    const totalAmountField = document.getElementById(totalFieldId);
    const previousAmount = parseFloat(totalAmountField.innerText);
    const newTotalAmount = previousAmount + newDepositAmount;
    totalAmountField.innerText = newTotalAmount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    previousBalanceTotal = parseFloat(balanceTotal.innerText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    previousBalanceTotal = getCurrentBalance();

    if (isAdd) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// Deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    // console.log(newDepositAmount)

    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    if (newDepositAmount !== '') {
        document.getElementById('deposit-warning').classList.add('dnone');
        setTimeout(() => {
            document.getElementById('deposit-warning').classList.remove('dnone');
        }, 2000);
    }

});

// Wuthdraw 
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);

        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        document.getElementById('withdraw-warning').classList.add('dnone');
        setTimeout(() => {
            document.getElementById('withdraw-warning').classList.remove('dnone');
        }, 2000);
    } else if (withdrawAmount < 0 || withdrawAmount !== '') {
        document.getElementById('withdraw-warning-0').classList.add('dnone');
        setTimeout(() => {
            document.getElementById('withdraw-warning-0').classList.remove('dnone');
        }, 2000);
    }


})