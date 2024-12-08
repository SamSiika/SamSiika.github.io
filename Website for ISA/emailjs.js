<script>
  (function(){
    emailjs.init("your-user-id"); // Replace with your EmailJS user ID
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('your-service-id', 'your-template-id', this)
      .then(function() {
        alert('Email successfully sent!');
      }, function(error) {
        alert('Failed to send email: ' + JSON.stringify(error));
      });
  });
</script>