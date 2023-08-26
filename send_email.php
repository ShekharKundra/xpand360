<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $company = $_POST["company"];
    $message = $_POST["Message"];

    $to = "taxmanager.bittu@gmail.com";
    $subject = "New Form Submission from Xpand360";
    $messageBody = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\nMessage: $message";

    $headers = "From: webmaster@xpand360.com";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Error sending email.";
    }
}
?>