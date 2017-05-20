$(document).ready(function(){
	$('#loginForm').hide();
	$('#registerForm').hide();


	$('.loginBtn').click(loginBtn);

	$('.registerBtn').click(registerBtn);	

	$('#login').click(login);

	$('.mainBtn').click(mainPage);

	$('#reset').click(reset);

	$('#show').click(showAndHide);
});


function loginBtn() {

	$('.loginBtn').hide(200);
	$('.registerBtn').hide(200);
	$('#loginForm').fadeIn(100);
}


function registerBtn() {
	$('.loginBtn').hide(200);
	$('.registerBtn').hide(200);
	$('#registerForm').fadeIn(100)
}

function mainPage() {
	$('.loginBtn').show(200);
	$('.registerBtn').show(200);
	$('#loginForm').fadeOut(100);
	$('#registerForm').fadeOut(100);
	reset();
	$('#msg').text("");	
}


function login() {
	var username = $('#username').val();
	var password = $('#password').val();

	if(username !== "" && password !== "") {
		$('#msg').fadeIn(200).text("Successfully logged In");	
	} else {
		
	}

}

function reset() {
	$('#username').val("");
	$('#password').val("");
}

function showAndHide() {
	if($('#show').text() === 'Show') {			
		$('#password').attr('type','text');
		$('#show').text("Hide");
	} else if($('#show').text() === 'Hide') {			
		$('#password').attr('type','password');
		$('#show').text("Show");
	}
}