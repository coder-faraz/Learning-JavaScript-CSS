
function validateTextBox() {
	let boxes = document.getElementsByTagName('input');		// - grabbing all input text boxes using TagName() method

	for(let i=0; i<3; i++) {		// - looping through 3 input boxes out of 4 grabbed using getElementsByTagName() method
		if(boxes[i].value == "" || boxes[i].value.length < 3) {		// - checking if the value of input text box is null OR less than 3 chars, then alert user, 
			alert("This is a required field. Please enter some more characters");	// otherwise submit Form.
			boxes[i].focus();
			boxes[i].style.border = "3px solid red";	// - highlight the text box with red border if the conditions are not met, means user made an exception
//			boxes[i].blur();

			return false;		// - Stopping the Form from being submitted when the if() condition evaluates to True, return keyword is a Boolean
		}						// - writing false in return keyword will terminate the onsubmit event & that will prevent the Form from being submitted
	}
}


