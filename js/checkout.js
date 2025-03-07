
// Exercise 6
function validate(event) {
	event.preventDefault();
	let error = 0;

	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone"); 
	
	// Validate fields entered by the user: name, phone, password, and email
	if((fName.value == "")||((fName.value.length) < 3)||!validateName(fName.value)) {
		fName.classList.add('is-invalid');
		error++;
	} 
	if ((fEmail.value === "")||!validateEmail(fEmail.value)) {
		fEmail.classList.add('is-invalid');
		error++;
	} 
	if ((fAddress.value === "")||((fAddress.value.length) < 3)) {
		fAddress.classList.add('is-invalid');
		error++;
	} 
	if((fLastN.value == "")||((fLastN.value.length) < 3)||!validateName(fLastN.value)) {
		fLastN.classList.add('is-invalid');
		error++;
	} 
	if ((fPassword.value === "")||((fPassword.value.length) < 3)||!validatePassword(fPassword.value)) {
		fPassword.classList.add('is-invalid');
		error++;
	} 
	if ((fPhone.value === "")||((fPhone.value.length) < 9)||(isNaN(fPhone.value))) {
		fPhone.classList.add('is-invalid');
		error++;
	} 
	if(error === 0){
		alert("tus datos se han enviado correctamente");
		window.location.href = "../index.html"; 
	}
}
function validatePassword(password) {
    let hasLetter = [...password].some(char => isNaN(char)); 
    let hasNumber = [...password].some(char => !isNaN(char)); 
    return hasLetter && hasNumber; 
};
function validateName(text) {
	let hasNoNumbers = [...text].every(char =>isNaN(char));
	return hasNoNumbers
};
function validateEmail(email) {
	const pattern = /^[A-Za-z._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,4}$/
	return pattern.test(email)
};
document.getElementById("validate").addEventListener("submit", validate);

document.querySelectorAll("#fName, #fEmail, #fAddress, #fLastN, #fPassword, #fPhone").forEach(function(i) {
    i.addEventListener("input", 
		function() {
			this.classList.remove("is-invalid");
		});
});