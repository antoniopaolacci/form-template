<?php

	$nome = $_POST['nome'];
	$cognome = $_POST['cognome'];
	$email = $_POST['email'];
	$oggetto= $_POST['oggetto'];
	$messaggio = $_POST['messaggio'];

	if ($nome == null) {
		exit("Errore: &egrave; necessario compilare il campo Nome");
	}
	else if ($cognome == null) {
		exit("Errore: &egrave; necessario compilare il campo Cognome");
	}
	else if ($email == null){
		exit("Errore: &egrave; necessario compilare il campo E-mail");
	}
	else if($oggetto == null){
		exit("Errore: &egrave; necessario compilare il campo Oggetto");
	}
	else if ($messaggio == null){
		exit("Errore: &egrave; necessario compilare il campo Messaggio");
	}
	
	// Configurazione dell'email
	$mail_to = "#placeholder_mail_to#";
	$mail_subject = "A message from online website";
	$mail_body = "Nome: [".$nome."] Cognome: [".$cognome."] Email: [".$email."] Oggetto: [".$oggetto."] writes this message: [".$messaggio."]";

	// Send e redirect 
	if (mail($mail_to, $mail_subject, $mail_body)){
		header('Refresh: 3; URL=#placeholder_url_redirect#');
		echo "<br>
			  <br>
			  <br>
			  <p>E-mail inviata correttamente. Attendere, stai per essere rediretto a #placeholder_url_redirect#</p>";
	}
	else {
		header('Refresh: 3; URL=#placeholder_url_redirect#');
		echo "<br>
		      <br>
			  <br>
			  <p>Errore, invio dell' e-mail non riuscito. Attendere, stai per essere rediretto a #placeholder_url_redirect#</p>";
	}
?>