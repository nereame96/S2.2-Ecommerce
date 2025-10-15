
// Exercise 6
const validate = (event) => {

	event.preventDefault(); //Para evitar que se envie el formulario si hay errores en los validate

	let error = 0;
	// Get the input fields
	
    const iName = document.getElementById("fName");
    const iEmail = document.getElementById("fEmail");
    const iAddress = document.getElementById("fAddress");
    const iLastN = document.getElementById("fLastN");
    const iPassword = document.getElementById("fPassword");
    const iPhone = document.getElementById("fPhone");

    
    const fName = iName.value.trim(); 
    const fEmail = iEmail.value.trim();
    const fAddress = iAddress.value.trim(); 
    const fLastN = iLastN.value.trim(); 
    const fPassword = iPassword.value;
    const fPhone = iPhone.value;

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");  
	const errorAddress = document.getElementById("errorAddress");  
	const errorLastN = document.getElementById("errorLastN");  
	const errorPassword = document.getElementById("errorPassword");  
	const errorPhone = document.getElementById("errorPhone");  


	// Regex 
	
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Letters and spaces only
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // Standard email format
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{4,}$/; // Must contain letters and numbers
    const phoneRegex = /^\d{9}$/; // Exactly 9 digits



	const setError = (inputElement, errorElement, message) => {
		inputElement.classList.add('is-invalid')

		errorElement.textContent = message
		error++
	}

	const clearError = (inputElement) => {
		inputElement.classList.remove('is-invalid')

		const errorId = `error${inputElement.id.substring(1)}`; 
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
             errorElement.textContent = '';
        } 
	}

	[iName, iEmail, iAddress, iLastN, iPassword, iPhone].forEach(clearError);

	
	// Validate fields entered by the user: name, phone, password, and email

	if( !nameRegex.test(fName) || fName.length < 3 || fName === '' ){
		setError(iName, errorName, 'This field is required and must have, at least, 3 characters');
	}
	
	if( !emailRegex.test(fEmail) || fEmail.length < 3 || fEmail === ''){
		setError(iEmail, errorEmail, 'This field is required and must contain an @ and have, at least, 3 character');
	}

	if(fAddress.length < 3 || fAddress === ''){
		setError(iAddress, errorAddress, 'This field is required and must have, at least, 3 characters');
	}

	if( !nameRegex.test(fLastN)|| fLastN.length < 3 || fLastN === '' ){
		setError(iLastN, errorLastN, 'This field is required and must have, at least, 3 characters');
	}

	if( !passwordRegex.test(fPassword) || fPassword.length < 3 || fPassword === ''){
		setError(iPassword, errorPassword, 'Enter a correct password, it must includes numbers and letters');
	}

	if( !phoneRegex.test(fPhone) || fPhone.length < 3 || fPhone === ''){
		setError(iPhone, errorPhone, 'Invalid phone number!! Must be 9 digits with no letters');
	}


	 
	if(error > 0){
		alert("Please fill in all required fields.");
		return false
	}else{
		alert("Form submitted successfully");
		document.querySelector('.form').reset() 
		return true
		
	}



}


document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.form')
	if(form) {
		form.addEventListener('submit', validate)
	}
})
