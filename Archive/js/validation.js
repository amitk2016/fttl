// Find the form..............

var bookingForm = document.querySelector('#submit-form');

//Get references to the input fields

	var nameInput = document.querySelector('#full-name');
	var nameMessage = document.querySelector('#full-name-message');
	var emailInput = document.querySelector('#email');
	var emailMessage = document.querySelector('#email-message')
	var phoneInput = document.querySelector('#phone')
	var phoneMessage = document.querySelector('#phone-message')


	// nameInput.onblur = function(){
		
	// 	if (namePattern.test(this.value)) {
	// 		// Hide any existing messages
	// 	}
	// 	else{
	// 		alert('Name is Invalid');
	// 	}

	// }
bookingForm.onsubmit = function(event){

	
	

// 	//check the full name 
// 	if (thisPattern.test(thisInput.value)) {

// 	}
// 	else{
// 		alert('this is invalid');
// 	}

	if (namePattern.test(nameInput.value)) {

		// nameMessage.innerHtml = "";
		
		
	}	else{

		// nameMessage.innerHtml = "Name is invalid";
		alert('Name is Invalid');
		
	
	}

	// if (emailPattern.test(emailInput.value)) {

	// 	// emailMessage.innerHtml ="";

	// }
	// else{
	// 	alert('Email is invalid');
	// 	// emailMessage.innerHtml = "Email is Invalid";
	// }	


	// Stop the form from submitting 
	event.preventDefault();
}





