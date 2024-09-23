<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $betreff = htmlspecialchars($_POST['betreff']);
    $nachricht = htmlspecialchars($_POST['nachricht']);
    
    $to = "kontakt@kino-website.de";  // Deine E-Mail-Adresse
    $subject = "Kontaktanfrage von " . $name;
    $message = "Name: $name\nE-Mail: $email\nBetreff: $betreff\n\nNachricht:\n$nachricht";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Ihre Nachricht wurde erfolgreich gesendet!";
    } else {
        echo "Es gab ein Problem beim Senden der Nachricht.";
    }
}
?>
