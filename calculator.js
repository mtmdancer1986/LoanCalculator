window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            update();
        });
    }
});

function getCurrentUIValues() {
    return {
        loanAmount: +(document.getElementById("loan-amount").value),
        termYears: +(document.getElementById("loan-years").value),
        yearlyRate: +(document.getElementById("loan-rate").value),
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const values = { amount: 1000, years: 1, rate: 10 };
    let loanAmount = document.getElementById('loan-amount');
    loanAmount.value = values.amount;
    let termYears = document.getElementById('loan-years');
    termYears.value = values.years;
    let yearlyRate = document.getElementById('loan-rate');
    yearlyRate.value = values.rate;
    update();


}

// Get the current values from the UI
// Update the monthly payment
function update() {
    const currentUIValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let solution1 = (values.yearlyRate / 100) / 12;
    let n = Math.floor(values.termYears * 12);
    return (
        (values.loanAmount * solution1) /
        (1 - Math.pow((1 + solution1), -n))).toFixed(2);


}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyRate) {
    let loanSpan = document.getElementById('monthly-payment');
    loanSpan.innerText = ` $${monthlyRate} monthly`;

}