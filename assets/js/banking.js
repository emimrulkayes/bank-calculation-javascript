 // handle deposit btn event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited
    const handleDepositInput = document.getElementById('input-deposit-amount');
    const newDepositAmountText = handleDepositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previusDepositText = depositTotal.innerText;
    const previusDepositAmount = parseFloat(previusDepositText);
    const newDepositTotal = previusDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previusBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    handleDepositInput.value = "";


});

// handle withdraw btn event
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get the amount withdraw
    const handleWithdrawInput = document.getElementById('input-withdraw-amount');
    const withdrawAmountText = handleWithdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previuswithdrawText = withdrawTotal.innerText;
    const previusWithdrawAmount = parseFloat(previuswithdrawText);
    const newWithdrawTotal = previusWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance 
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previusBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;
    
   


    handleWithdrawInput.value = "";

})
