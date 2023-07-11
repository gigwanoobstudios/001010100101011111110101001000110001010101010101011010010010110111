function sendEmail() {
    var recipientEmail = 'recipient@example.com'; // Replace with the recipient's email address
  
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
  
    var subject = 'Contact Form Submission';
    var body = 'Name: ' + encodeURIComponent(name) +
      '%0AEmail: ' + encodeURIComponent(email) +
      '%0AMessage: ' + encodeURIComponent(message);
  
    var mailtoUrl = 'mailto:' + encodeURIComponent(recipientEmail) +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  
    var newWindow = window.open(mailtoUrl, '_blank');
    newWindow.close();
  }
  