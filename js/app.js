$(document).ready(function (){
	$( "#about" ).click(function() {
		$( ".about").fadeIn("fast").show();
		$( ".works" ).hide();
	});

	$( "#work" ).click(function() {
		$( ".works").fadeIn("fast").show();
		$( ".about" ).hide();
	});

	$( "#aboutie" ).click(function() {
		$( ".about").fadeIn("fast").show();
		$( ".works" ).hide();
	});

	$( "#workie" ).click(function() {
		$( ".works").fadeIn("fast").show();
		$( ".about" ).hide();
	});

	$( ".works div img").mouseenter(function() {
		$( this ).css({"opacity":"1"});
	}).mouseleave(function(){
		$( this ).css({"opacity":".5"});
	});

});