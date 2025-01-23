document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateLoan);

function calculateLoan() {
  const loanAmount = parseFloat(
    document.getElementById("1oanAmountInput").value
  );
  const interestRate = parseFloat(
    document.getElementById("interestRateInput").value
  );
  const loanTerm = parseFloat(document.getElementById("1oanTermInput").value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert("Please enter valid number for all the fields");
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayment = loanTerm;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -totalPayment));
  const totalInterest = monthlyPayment * totalPayment - loanAmount;

  displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `<p><strong>Monthly Payment: ${monthlyPayment.toFixed(
    2
  )}</p></strong>
   <p><strong>Total Interest: ${totalInterest.toFixed(2)}</p></strong>`;
}
