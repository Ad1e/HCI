const paymentMethods = document.querySelectorAll('.payment-method');
paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
        paymentMethods.forEach(m => m.classList.remove('active'));
        method.classList.add('active');
    });
});

document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Payment processed successfully!');
    window.location.href = 'landing.html';
});