<?php
    if($_POST["submit"]) {
        $recipient = "seanko@mit.edu";
        $subject = "Form to email message";
        $sender = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $mailBody = "Name: $sender\nEmail: $senderEmail\n\n$message";

        mail($recipient, $subject, $mailBody, "From: $sender <$email>");

        $thankYou="<p>Thank you! Your message has been sent.</p>";
    }
?>
