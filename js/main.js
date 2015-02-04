//jQuery functions wll toggle notes section and clear button for each lesson-node
$(document).ready(function() {
	$('.show-hide').click(function() {
    	$(this).closest('.lesson-node').find('.lesson-notes').slideToggle();
    });
    $('.clear').click(function() {
        var $this = $(this).closest('.lesson-node');
        $this.find('.output').empty();
        $this.find('.lesson-notes').hide();
       	$this.find('input').val("");
    });
});

//Runs a for loop with pre-specified initial and increment values
function forLoop(init, increment, inputId, outputId){
	var quantity = $(inputId).val();
	var formatText = removePunc(quantity);
	$(outputId).empty();
	 if(!testInput(formatText, outputId))
        {
          return;
        }
		for(i=init; i<=formatText; i=i+increment) {
			$(outputId).append("  "+i);
		}
		$(outputId).append("<p class='success-msg'>Algorithm printed succesfully!<p>");
}

//Tests input for common input errors
function testInput(input, outputId) {
  if (input !== "" && input < 5000 && input > 0) {
      return true;
  	} 
  	else if (input == "") {
		errorMessage(outputId, "Oops! You forgot to type a number!")
	}
	else if (input <= 0) {
		errorMessage(outputId, "Oh! Did I mention zeros and negative numbers don't work here?");
	}
	else if (input > 5000 ){
		errorMessage(outputId, "Whoa! That number is too huge!! Why not choose a number less than 5,000?");
	}
	else if (isNaN(input)) {
		errorMessage(outputId, "Wait a second... Is that even a number?");
	}
  	return false;
}

//Prints error message to nearest output area
function errorMessage(outputId, message) {
	$(outputId).html("<p class='error-msg'>"+message+"</p>");
	$('input').val("");
}

//Removes commas from user input
function removePunc(userInput) {
	userInput = userInput.replace(/,/g,"");
	return userInput;
}