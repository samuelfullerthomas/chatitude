(function () {


	window.Presenter = {}

	Presenter.Presenter = function(element) {
		var $view = $(element)

		// Provide a view chat messages (without signing in)
		// Message view helper
		// button to Sign up for an account
		// button to Sign in
		// refresh messages button
		// button to send a chat message

		this.render = function(){
			console.log('working render')
			// $view.empty().append(
			// 	Presenter.view(),
			// 	Model.map(messageView)
			// )
		}


	}
	//view function
	Presenter.view = function(){

	}	
	//helper function
	function messageView(message){

	}
	//mounting function
	Presenter.mount = function(element){
		var presenter = new Presenter.Presenter(element);
		presenter.render();
	}




})()