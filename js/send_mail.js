function validate_send_mail() {

	var nome = document.mailform.nome.value;
	var cognome = document.mailform.cognome.value;
	var email = document.mailform.email.value;
	var oggetto = document.mailform.oggetto.value;
	var messaggio = document.mailform.messaggio.value;
	
	if ((nome == "") || (nome == "undefined")) {
	   errorMsg("Il campo Nome e' obbligatorio.");
	   document.mailform.nome.focus();
	   return false;
    }
	else if ((cognome == "") || (cognome == "undefined")) {
	   errorMsg("Il campo Cognome e' obbligatorio o non corretto.");
	   document.mailform.cognome.focus();
	   return false;
    }
	else if ((email == "") || (email == "undefined") || (email.indexOf("@") == -1) || (email.indexOf(".") == -1) ) {
	   errorMsg("Il campo Email e' obbligatorio o non corretto.");
	   document.mailform.email.focus();
	   return false;
    }
	else if ((oggetto == "") || (oggetto == "undefined")) {
	   errorMsg("Il campo Oggetto e' obbligatorio.");
	   document.mailform.oggetto.focus();
	   return false;
 	}
	else if ((messaggio == "") || (messaggio == "undefined")) {
	   errorMsg("Il campo Messaggio e' obbligatorio.");
	   document.mailform.messaggio.focus();
	   return false;
 	}
	else if(!validCaptcha()) {
	   errorMsg("Compila correttamente il campo captcha.");
	   document.mailform.txtcompare.focus();
	   return false;
	}
	else { 
	   document.mailform.action = "#placeholder_url_php#/send.php";
	   document.mailform.submit();
    }
	
}

function errorMsg(text) {
	
	var txt = document.getElementById("validate");
	
	if(txt.firstChild) {
	   txt.removeChild(txt.firstChild);	
	}
	
	txt.appendChild(document.createTextNode(text));	
	
}