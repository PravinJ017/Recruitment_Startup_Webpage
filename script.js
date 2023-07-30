const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const companyName = document.getElementById('company_name').value;
    const email = document.getElementById('inputEmail4').value;
    const message = document.getElementById('inputtext').value;

    if (!companyName || !email || !message) {
        alert('Please fill in all the required fields.');
        return;
    }

    alert('Message Sent Sucessfully..!!!');
    contactForm.reset();
});