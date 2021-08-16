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

    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);

        updateBalance(newDepositAmount, true);
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
        console.log('You can not withdraw more thn what you in your account')
    }

})