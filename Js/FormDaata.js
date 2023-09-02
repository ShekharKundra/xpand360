function sendData(formData, successCallback, errorCallback) {
    fetch('http://localhost:8080/sendcontectform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                successCallback(); // Call the success callback
            } else {
                errorCallback('Failed to send data');
            }
        })
        .catch(error => {
            errorCallback(error);
        });
}

function handleSubmitForm(formId, successMessage) {
    var form = document.getElementById(formId);
    var name = form.querySelector('input[name="Name"]');
    var email = form.querySelector('input[name="Email"]');
    var phoneNumber = form.querySelector('input[name="PhoneNumber"]');
    var company = form.querySelector('input[name="Company"]');
    var message = form.querySelector('textarea[name="Message"]');
    var sendBtn = form.querySelector('.submit-btn');
    var redirectUrl = "/"
    sendBtn.addEventListener("click", function(e) {
        e.preventDefault();

        var userDetails = {
            "Name": name.value,
            "Email": email.value,
            "PhoneNumber": phoneNumber.value,
            "Company": company.value,
            "Message": message.value
        };

        sendData(
            userDetails,
            function() {
                console.log(successMessage);
                window.location.href = redirectUrl;
            },
            function(error) {
                console.error('Error sending data:', error);
            }
        );
    });
}

handleSubmitForm("contactForm", "Data sent successfully (Top Form)");
handleSubmitForm("contactFormFooter", "Data sent successfully (Footer Form)");