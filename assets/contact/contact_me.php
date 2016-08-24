<?php

// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'seanko@mit.edu';
$email_subject = "Website Contact Form:  $name";
$email_body .= "You have received a new message from your website contact form.\n\n";
$email_body .= "Here are the details:\n\n";

$email_body .= "Name: ";
$email_body .=  $name;
$email_body .= "\n\n";

$email_body .= "Email: ";
$email_body .= $email_address;
$email_body .=  "\n\n";

$email_body .= "Message:\n";
$email_body .= $message;

$headers = "From: noreply@skoaster10s.github.io\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
