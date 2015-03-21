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
			$view.empty().append(
				Presenter.view(),
				Model.map(messageView)
			)
		}

		App.pubsub.on('newMessages:Model', this.render)
	}
	//view function
	Presenter.view = function(){
		return $('<div class ="people">')
	}
	function messageView (msg){
		return $('<div class = "message">').append(
			$('<p class=' + msg.id +'>').append("Username: ", msg.user),
			$('<p class=' + msg.id +'>').append("Message: ", msg.message)
		)
	}	
	//mounting function
	Presenter.mount = function(element){
		var presenter = new Presenter.Presenter(element);
	}




})()

