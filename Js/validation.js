// Function to validate email using a regular expression
function isValidEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

// Function to validate phone number using a regular expression
function isValidPhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^[1-9]\d*$/; // Assuming a positive integer input
    return phoneNumberRegex.test(phoneNumber);
}

// Function to update submit button status and show error messages
function updateSubmitButtonAndErrors(form, sendBtn) {
    var name = form.querySelector('input[name="Name"]');
    var email = form.querySelector('input[name="Email"]');
    var phoneNumber = form.querySelector('input[name="PhoneNumber"]');
    var nameError = form.querySelector('#nameError');
    var emailError = form.querySelector('#emailError');
    var numberError = form.querySelector('#numberError');

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    numberError.textContent = "";

    var isNameValid = name.value.trim() !== "";
    var isEmailValid = email.value.trim() !== "" && isValidEmail(email.value);
    var isPhoneNumberValid = phoneNumber.value.trim() !== "" && isValidPhoneNumber(phoneNumber.value);

    if (!isNameValid) {
        nameError.textContent = "Name is required.";
    }

    if (!isEmailValid) {
        emailError.textContent = "Invalid email address.";
    }

    if (!isPhoneNumberValid) {
        numberError.textContent = "Invalid phone number.";
    }

    var isFormValid = isNameValid && isEmailValid && isPhoneNumberValid;
    sendBtn.disabled = !isFormValid;
}

// Function to perform form validation and handle submission
function handleSubmitForm(formId, successMessage) {
    var form = document.getElementById(formId);
    var sendBtn = form.querySelector('.submit-btn');

    updateSubmitButtonAndErrors(form, sendBtn);

    form.addEventListener("input", function() {
        updateSubmitButtonAndErrors(form, sendBtn);
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var name = form.querySelector('input[name="Name"]').value;
        var email = form.querySelector('input[name="Email"]').value;
        var phoneNumber = form.querySelector('input[name="PhoneNumber"]').value;
        var company = form.querySelector('input[name="Company"]').value;
        var message = form.querySelector('textarea[name="Message"]').value;

        var userDetails = {
            "Name": name,
            "Email": email,
            "PhoneNumber": phoneNumber,
            "Company": company,
            "Message": message
        };

        sendData(
            userDetails,
            function() {
                console.log(successMessage);
                location.reload(); // Reload the page
            },
            function(error) {
                console.error('Error sending data:', error);
            }
        );
    });
}

// Call the validation and submission function for both forms
handleSubmitForm("contactForm", "Data sent successfully (Top Form)");
handleSubmitForm("contactFormFooter", "Data sent successfully (Footer Form)");