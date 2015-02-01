function print255(outputId){
	var quantity = $('input').val();
	var formatText = removePunc(quantity);
	$(outputId).empty();
	
	if (formatText == "") {
		errorMessage(outputId, "Oops! You forgot to type a number!")
	}
	else if (formatText <= 0) {
		errorMessage(outputId, "Oh! Did I mention zeros and negative numbers don't work here?");
	}
	else if (formatText > 5000 ){
		errorMessage(outputId, "Whoa! That's a huge number to print!! Why not choose a number less than 5,000?");
	}
	else if (isNaN(formatText)) {
		errorMessage(outputId, "Wait a second... That's not a number...");
	}
	else {
		for(i=1; i<=formatText; i++) {
			$(outputId).append("  "+i);
		}
	}
}

function showWork(algorithmId){
	$(algorithmId).slideToggle();
}

function errorMessage(outputId, message) {
	$(outputId).html("<p class='error-msg'>"+message+"</p>");
	$('input').val("");
}

function clearOutput(outputId, algorithmId) {
	$(outputId).empty();
	$('input').val("");
	$(algorithmId).hide();
}

function removePunc(userInput) {
	userInput = userInput.replace(/,/g,"");
	return userInput;
}