// Initialize EmailJS with your public key (User ID)
emailjs.init("_iP0uk7ckF78Wkl8e");  // Replace YOUR_USER_ID with the User ID you got from EmailJS

// Select the form and form fields
const form = document.querySelector('.contact-form');
const nameField = form.querySelector('input[type="text"][placeholder="Name"]');
const emailField = form.querySelector('input[type="email"][placeholder="Email"]');
const subjectField = form.querySelector('input[type="text"][placeholder="Subject"]');
const messageField = form.querySelector('textarea[placeholder="Message"]');

// Form submission event
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the default form submission

    const name = nameField.value;
    const email = emailField.value;
    const subject = subjectField.value;
    const message = messageField.value;

    // Check if all fields are filled out
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields!');
        return;
    }

    const templateParams = {
        to_name: 'Ali Shazil',  // The recipient (your name)
        from_name: name,        // The sender's name from the form
        from_email: email,      // The sender's email from the form
        message: message        // The message from the form
    };

    // Send the email using EmailJS
    emailjs.send('service_wlxq3t5', 'template_bxvdcnd', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response);
            alert('Your message has been sent!');
            form.reset();  // Clear the form after submission
        }, function (error) {
            console.log('FAILED...', error);
            alert('Something went wrong, please try again!');
        });
});
