<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['fullname'];
    $email = $_POST['emailadd'];
    $inquiry = $_POST['inquiry'];
    $message = $_POST['message'] + $_POST['inquiry'];
    $to = "madhav2panchhiwala@gmail.com";
    $subject = "Message from $name";
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);
  }
?>
