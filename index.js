let chartInstance;

function formatCurrency(value, currency) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById("loan-amount").value) || 0;
  const annualRate = parseFloat(document.getElementById("interest-rate").value) || 0;
  const months = parseInt(document.getElementById("months-to-pay").value) || 1;
  const currency = document.getElementById("currency").value || "INR";

  const monthlyRate = annualRate / 12 / 100;

  let monthlyPayment = 0;
  if (monthlyRate > 0) {
    const numerator = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    monthlyPayment = numerator / denominator;
  } else {
    monthlyPayment = loanAmount / months;
  }

  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - loanAmount;

  document.getElementById("monthly-payment").innerHTML = `Monthly Payment: ${formatCurrency(monthlyPayment, currency)}`;
  document.getElementById("total-payment").innerHTML = `Total Payment: ${formatCurrency(totalPayment, currency)}`;
  document.getElementById("total-interest").innerHTML = `Total Interest: ${formatCurrency(totalInterest, currency)}`;

  const ctx = document.getElementById('loanChart').getContext('2d');
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Principal', 'Interest'],
      datasets: [{
        data: [loanAmount, totalInterest],
        backgroundColor: ['#4CAF50', '#FF5722']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        }
      }
    }
  });
}

// Run default calculation on load
window.onload = calculateLoan;
