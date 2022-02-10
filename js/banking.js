// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    // update deposited total 
    const depositField = document.getElementById('diposit-input');
    let depositAmount = document.getElementById('deposit-amount');
    const newDepositAmount = depositField.value;
    const previousDepositAmount = depositAmount.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositAmount.innerText = newDepositTotal;

    // update account balance 
    const balanceAmont = document.getElementById('balance-amount');
    const previousBalance = balanceAmont.innerText;
    // const newBanlance = depositAmount.innerText;
    const newBanlance = parseFloat(newDepositAmount) + parseFloat(previousBalance);
    balanceAmont.innerText = newBanlance;
    // clear the depositField
    depositField.value = null;
});


//handle withdraw event handler.
document.getElementById('withdraw-buttton').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const prebiousWithdrawText = withdrawTotal.innerText;
    const newWithdrawBalance = parseFloat(prebiousWithdrawText) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawBalance;
    // update balance 
    const balanceTotal = document.getElementById('balance-amount');
    const previousBalanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotalText) - parseFloat(newWithdrawBalance);
    balanceTotal.innerText = newBalanceTotal;
    withdrawInput.value = null;
});

