const localUrl = "http://localhost:8080/sendcontectform";
const OnlineUrl = "http://taxmanagercoin1-env.eba-yhppuvfm.ap-south-1.elasticbeanstalk.com/sendcontectform";

function handleSubmit(event) {
    event.preventDefault();

    // Find the form element that triggered the submit event
    const form = event.target;

    const name = form.querySelector("#uName").value;
    const email = form.querySelector("#uEmail").value;
    const phone = form.querySelector("#uPhoneNumber").value;
    const company = form.querySelector("#uCompany").value;
    const msg = form.querySelector("#uMessage").value;

    const data = {
        Name: name,
        Email: email,
        PhoneNumber: phone,
        Company: company,
        Message: msg
    };

    fetch(`${OnlineUrl}`, {
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

}

document.getElementById("contactFormf").addEventListener("submit", handleSubmit);
document.getElementById("contactFormTop").addEventListener("submit", handleSubmit);