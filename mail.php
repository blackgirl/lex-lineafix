<?php

$recepient = "lineafix.store@gmail.com";
$sitename = "Linea Fix Store";

$name = trim($_POST["clientName"]);
$phone = trim($_POST["clientPhone"]);
$email = trim($_POST["clientMail"]);
$theme = trim($_POST["clientForm"]);
$text = trim($_POST["clientText"]);
$product = trim($_POST["productTitle"]);
$message = "Поля могут оставаться пустыми, так как не во всех формах они есть! \nНазвание/заголовок формы: $theme \nИмя: $name \nТелефон: $phone \nПочта: $email \nТекст: $text \nНазвание товара (если форма отправлена с товара): $product";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");