
function generateCaptcha() {
	
	var char1 = Math.ceil(Math.random() * 10)+ '';
	var char2 = Math.ceil(Math.random() * 10)+ '';
	var char3 = Math.ceil(Math.random() * 10)+ '';
	var char4 = Math.ceil(Math.random() * 10)+ '';
	var char5 = Math.ceil(Math.random() * 10)+ '';
	var char6 = Math.ceil(Math.random() * 10)+ '';
	var char7 = Math.ceil(Math.random() * 10)+ '';
 
	var captchaCode = char1 + ' ' + char2 + ' ' + char3 + ' ' + char4 + ' ' + char5 + ' '+ char6 + ' ' + char7;
	document.getElementById("captcha").value = captchaCode

}
 
function validCaptcha() {

	var str1 = removeSpaces(document.getElementById('captcha').value);
	var str2 = removeSpaces(document.getElementById('txtcompare').value);
 
	if (str1 == str2) return true;
	
	return false;
}
 
function removeSpaces(string) {
	return string.split(' ').join('');
}