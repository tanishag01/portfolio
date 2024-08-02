emailjs.init('0yrEPDlwAQdEq-pAJ'); // Replace with your EmailJS User ID

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(e) {
    console.log('Form submitted!');
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form data:', name, email, message);

    // Send the form data to EmailJS
    emailjs.sendForm('service_616rx1h', 'template_b661cnc', form)
      .then(function(response) {
        console.log('Email sent successfully:', response);
        alert('Your message has been sent successfully!');
        form.reset(); // Reset the form
      }, function(error) {
        console.error('Error sending email:', error);
        alert('Failed to send your message. Please try again later.');
      });
  });
});
