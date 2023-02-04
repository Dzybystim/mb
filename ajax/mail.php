<?php
$resepient = "vikafoer@gmail.com";
$sitename = "mamabye";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["message"]);
$message = "Ім'я: $name \n Телефон: $phone Comment: $comment";

$pagetitle = "Заявка з сайту \"$sitename\"";
mail($resepient, $pagetitle, $message, "Content-type: text/plain; charset = \"utf-8\"\n From: $resepient")

?>
<!-- 
// $phone = $_POST['phone'];
// $name = $_POST['name'];
// $message = $_POST['message'];

// $subject = "=?utf-8?B?" . base64_encode("Site message") . "?=";


// $success = mail("vikafoer@gmail.com", $subject, $message, $name, $phone);
// echo $success; -->
