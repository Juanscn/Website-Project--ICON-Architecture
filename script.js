document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('feedback');

    feedback.textContent = '';

    if (!name) {
        feedback.textContent = 'Please enter your name.';
        return;
    }

    if (!email || !validateEmail(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        return;
    }

    if (!message) {
        feedback.textContent = 'Please enter a message.';
        return;
    }

    feedback.style.color = 'green';
    feedback.textContent = 'Form submitted successfully.';

    document.getElementById('contactForm').reset();

});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}