
$('#sidebar').click(function(e) {
	
	e.stopPropagation();
	$('#navbar-home').toggleClass('narbar-main-show');
});

$('#navbar-home').click(function(e) {
	e.stopPropagation();
});

$('body,html').click(function (e){
	$('#navbar-home').removeClass('narbar-main-show');
});

$('.closebtn').click(function (e){
	$('#navbar-home').removeClass('narbar-main-show');
});

