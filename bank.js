const dipositButton = document.getElementById('deposit-btn');
const withdrawButton = document.getElementById('withdraw-btn');
// Deposit Button
dipositButton.addEventListener('click', function () {
    // Connecting With HTML ID
    const dipositBox = document.getElementById('deposit-box');
    const balanceBox = document.getElementById('balance-box');
    const depositInput = document.getElementById('deposit-amount');

    // getting input filed vale and convert into number
    const depositAmount = parseFloat(depositInput.value);
    const previousDepositAmount = parseFloat(dipositBox.innerText);
    const perviousBalanceAmount = parseFloat(balanceBox.innerText);

    // Calculation Previous Deposit and New Deposit Value
    const currentDepositAmount = depositAmount + previousDepositAmount;
    const currentBalanceAmount = depositAmount + perviousBalanceAmount;
    dipositBox.innerText = currentDepositAmount;
    balanceBox.innerText = currentBalanceAmount;
    depositInput.value = '';
});
withdrawButton.addEventListener('click', function () {
    const withdrawBox = document.getElementById('withdraw-box');
    const balanceBox = document.getElementById('balance-box');
    const withdrawInput = document.getElementById('withdraw-amount');

    const withdrawAmount = parseFloat(withdrawInput.value);
    const previousWithdrawAmount = parseFloat(withdrawBox.innerText);
    const balanceAmount = parseFloat(balanceBox.innerText);

    const currentWithdraw = withdrawAmount + previousWithdrawAmount;
    const currentBalance = balanceAmount - withdrawAmount;
    withdrawBox.innerText = currentWithdraw;
    balanceBox.innerText = currentBalance;
    withdrawInput.value = '';






});