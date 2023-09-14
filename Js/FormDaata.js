document.getElementById("contactFormf").addEventListener("submit", function (event) {
    event.preventDefault();


    const name = document.getElementById("uNamef").value;
    const email = document.getElementById("uEmailf").value;
    const phone = document.getElementById("uPhoneNumberf").value;
    const company = document.getElementById("uCompanyf").value;
    const msg = document.getElementById("uMessagef").value;

    const data = {
        Name: name,
        UEMAIL: email,
        PhoneNumber: phone,
        Company: company,
        Message: msg
    };


    //fetch("http://taxmanagercoin1-env.eba-yhppuvfm.ap-south-1.elasticbeanstalk.com/sendcontectform", {
    fetch("http://localhost:8080/sendcontectform", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            // Handle the API response here
            console.log("API response:", data);
        })
        .catch(error => {
            console.log("Error:", error);
        });

});