
// Exercise 6
const validate = () => {
	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

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
    const passwordRegex = /^(?=.[a-zA-Z])(?=.\d).+$/; // Must contain letters and numbers
    const phoneRegex = /^\d{9}$/; // Exactly 9 digits
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.trim() == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Please fill in all required fields.");
	}else{
		alert("Form submitted successfully");
	}

}
