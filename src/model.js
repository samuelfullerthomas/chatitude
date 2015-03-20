(function(){
	window.sessionApiToken = undefined;
	window.Model = {
		// View chat messages (without signing in)
		// Protect the user against XSS attacks
		getMessages: function(){
			$.ajax({
			  type: 'GET',
			  url: 'http://chat.api.mks.io/chats',
			}).success(function (chats) {
			  console.log("Got chats:", chats)

			})

		},
		// Sign up for an account
		signUp: function(uname, pword){
			$.ajax({
			  type: 'POST',
			  url: 'http://chat.api.mks.io/signup',
			  data: {username : uname, password : pword} //username and password parameters
			}).success(function () {
			  console.log("Signed up")
			})

		},
		// Sign in
		// Make a user stay signed in even after they refresh the page (hint: use localStorage)
		signIn: function(uname, pword){
			$.ajax({
			  type: 'POST',
			  url: 'http://chat.api.mks.io/signin',
			  data: {username : uname, password : pword} //username and password parameters
			}).success(function (t) {
			  console.log(t.apiToken);
			  //sessionApiToken = t.apiToken;
			  localStorage.setItem("apiToken",t.apiToken)
			  console.log(localStorage.getItem("apiToken"));
			})

		},
		// Post a chat message
		postMessage: function(msg){
			$.ajax({
			  type: 'POST',
			  url: 'http://chat.api.mks.io/chats',
			  data: {apiToken : localStorage.getItem("apiToken"), message : msg}
			}).success(function () {
			  console.log("message sent")
			})
		}
	}
})()