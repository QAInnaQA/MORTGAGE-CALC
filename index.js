const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    const price = document.querySelector("#bill").value;
    const paymentDown = document.querySelector("#downpayment").value;
    const interest = document.querySelector("#interest").value;
    const term = document.querySelector("#years").value;

    if (price === "" || paymentDown === "" || interest === "" || term === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your information!',
        });
    }

    let amount = price - paymentDown;
    let amountWithoutInterestPerYear = amount/term;
    let amountWithoutInterestPerMonth = amountWithoutInterestPerYear / 12;
    let interestPerYear = amountWithoutInterestPerYear * interest / 100; 
    let interestPerMonth = interestPerYear / 12;
    let totalAmount = amountWithoutInterestPerMonth + interestPerMonth;


    amountWithoutInterestPerMonth = amountWithoutInterestPerMonth.toFixed(2);
    interestPerMonth = interestPerMonth.toFixed(2);
    totalAmount = totalAmount.toFixed(2);

    document.querySelector("#monthlyPayment").textContent = amountWithoutInterestPerMonth;
    document.querySelector("#interestPerMonth").textContent = interestPerMonth;
    document.querySelector("#totalPayment").textContent = totalAmount;
}