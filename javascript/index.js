$(document).ready(function(){
	console.log("I'm Working on load!");
	$(".scroll").click(function(event){
		// alert("Clicked on scroll Bonitaaa!")
		event.preventDefault();
		$("html, body").animate({scrollTop:$(this.hash).offset().top}, 500);
		$('.navbar-default a').removeClass('selected');
		$(this).addClass('selected');
    	});
});
