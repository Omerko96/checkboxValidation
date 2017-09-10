$(document).ready(function(){
	$('#submit').click(function(){
		var results = $('input[type="checkbox"]:checked');
		if(results.length > 0){
			var resultsString = results.length + " Checkbox(s) Checked: <br/>"
			results.each(function(){
				resultsString += $(this).val() + "<br/>";
			});
			$('#results').html(resultsString);
		}else{
			$('#results').html("Please Pick Something");
		}
	});
});



