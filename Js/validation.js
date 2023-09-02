document.addEventListener("DOMContentLoaded", function() {
    // Find the first form and its submit button by their IDs
    const form1 = document.getElementById("contactForm");
    const submitButton1 = document.getElementById("bottomfrom");

    // Add a click event listener to the submit button for the first form
    submitButton1.addEventListener("click", function(event) {
        // Get the values of the Name, Email, and Phone Number fields for the first form
        const name1 = form1.querySelector('input[name="Name"]').value.trim();
        const email1 = form1.querySelector('input[name="Email"]').value.trim();
        const phoneNumber1 = form1.querySelector('input[name="PhoneNumber"]').value.trim();

        // Initialize flags to check if there are errors for the first form
        let hasErrors1 = false;

        // Validate Name for the first form
        if (name1 === "") {
            document.getElementById("nameError").textContent = "Name is required";
            hasErrors1 = true;
        } else {
            document.getElementById("nameError").textContent = ""; // Clear error
        }

        // Validate Email for the first form using a regular expression
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email1)) {
            document.getElementById("emailError").textContent = "Invalid email format";
            hasErrors1 = true;
        } else {
            document.getElementById("emailError").textContent = ""; // Clear error
        }

        // Validate Phone Number for the first form using a regular expression
        const mobileRegex = /^[1-9]\d*$/;
        if (!mobileRegex.test(phoneNumber1)) {
            document.getElementById("numberError").textContent = "Invalid phone number format";
            hasErrors1 = true;
        } else {
            document.getElementById("numberError").textContent = ""; // Clear error
        }

        // If there are errors for the first form, prevent the form from submitting
        if (hasErrors1) {
            event.preventDefault();
        }
    });

    // Find the second form and its submit button by their IDs
    const form2 = document.getElementById("contactFormFooter");
    const submitButton2 = document.getElementById("submitQuickInq");

    // Add a click event listener to the submit button for the second form
    submitButton2.addEventListener("click", function(event) {
        // Get the values of the Name, Email, and Phone Number fields for the second form
        const name2 = form2.querySelector('input[name="Name"]').value.trim();
        const email2 = form2.querySelector('input[name="Email"]').value.trim();
        const phoneNumber2 = form2.querySelector('input[name="PhoneNumber"]').value.trim();

        // Initialize flags to check if there are errors for the second form
        let hasErrors2 = false;

        // Validate Name for the second form
        if (name2 === "") {
            document.getElementById("nameError").textContent = "Name is required";
            hasErrors2 = true;
        } else {
            document.getElementById("nameError").textContent = ""; // Clear error
        }

        // Validate Email for the second form using a regular expression
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email2)) {
            document.getElementById("emailError").textContent = "Invalid email format";
            hasErrors2 = true;
        } else {
            document.getElementById("emailError").textContent = ""; // Clear error
        }

        // Validate Phone Number for the second form using a regular expression
        const mobileRegex = /^[1-9]\d*$/;
        if (!mobileRegex.test(phoneNumber2)) {
            document.getElementById("numberError").textContent = "Invalid phone number format";
            hasErrors2 = true;
        } else {
            document.getElementById("numberError").textContent = ""; // Clear error
        }

        // If there are errors for the second form, prevent the form from submitting
        if (hasErrors2) {
            event.preventDefault();
        }
    });
});