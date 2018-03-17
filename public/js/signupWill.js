$("form.signup").on("submit", function(event) {
	event.preventDefault();

	var userData = {
		email : $("input#email-input").val().trim(),
		password : $("input#password-input").val().trim(),
		userName : $("input#username-input").val().trim()
	}

	if (!userData.email || !userData.password || !userData.userName) {
		return;
	}

	signUpUser(userData)
})

function signUpUser(data) {
	console.log(data);

	$.post("/api/signup", {
		email : data.email,
		password : data.password,
		userName : data.userName
	}).then(data => {
		console.log(data);
	});
}