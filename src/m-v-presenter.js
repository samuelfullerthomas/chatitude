(function () {


	window.Presenter = {}

	Presenter.Presenter = function(element) {
		var $view = $(element)
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
		var sanitizedMsg = sanitize(msg.message)
		return $('<div class = "messages">').append(
			$('<p class="user">').append(msg.user),
			$('<p class="msg">').append(sanitizedMsg) //sanitize input
		)
	}	
	//mounting function
	Presenter.mount = function(element){
		var presenter = new Presenter.Presenter(element);
	}
	function sanitize (i){
		if (i.indexOf('<') !== -1){
			return 'This message contained script';
		}
		else{
			return i;
		}
	}




})()

