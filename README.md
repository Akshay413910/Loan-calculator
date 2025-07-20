# 💰 Loan Calculator

A simple and responsive Loan Calculator web application built using HTML, CSS, and JavaScript. It calculates monthly payments, total payments, and total interest for a given loan amount, interest rate, and repayment period. It also includes a currency selector and a visual breakdown using a pie chart powered by Chart.js.

---

## 📌 Features

- 🔄 Real-time loan calculations
- 💵 Currency selection (USD, EUR, INR, GBP, JPY)
- 📊 Pie chart visualization of principal vs. interest
- 💡 Clean and responsive UI
- ⚡ Instant updates on user input

---

## 🧮 Loan Calculation Formula

The monthly payment is calculated using the standard amortization formula:

```
M = P * r * (1 + r)^n / ((1 + r)^n - 1)
```

Where:

- `M` = Monthly Payment  
- `P` = Loan Amount (Principal)  
- `r` = Monthly Interest Rate (Annual Rate / 12 / 100)  
- `n` = Number of Months  

If interest rate is 0, then:  
```
M = P / n
```

---

## 📂 File Structure

```
├── index.html      # HTML layout for the loan calculator
├── style.css       # Stylesheet for styling the app
├── index.js        # JavaScript for logic and chart rendering
```

---

## 📷 Screenshot

> You can add a screenshot here named `preview.png`  
> (e.g., ![screenshot](preview.png))

---

## 🚀 How to Use

1. Clone or download this repository.
2. Open `index.html` in any modern browser.
3. Input loan amount, interest rate, and months to repay.
4. Choose your currency.
5. View the calculated results and chart instantly.

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- [Chart.js](https://cdn.jsdelivr.net/npm/chart.js)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Author

Developed by [Your Name].
