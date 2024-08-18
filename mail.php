<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailheader = "From:" . $name."<". $email .">\r\n". $message ."";

    $recipient = "knightrid3r92@gmail.com";

    mail($recipient, $message, $mailheader);


?>