//Controller!
(function () {

	window.MessageStuff = {}
	//Controller
	MessageStuff.controller = {
		sanitize : function(i) {
			if (i.indexOf('<') !== -1){
				return 'This message contained script';
			}
			else{
				return i;
			}

		}
	}
	
	//Views
	MessageStuff.view = function() {
			return $('<div class ="people">')
	}

	MessageStuff.render = function(element){
		var msgDOM = MessageStuff.view()
		$(element).empty().append(msgDOM, Model.map(messageView))
	}

	MessageStuff.mount = function(element){
		// MessageStuff.render(element)
		App.pubsub.on('newMessages:Model', function(){
			MessageStuff.render(element)
		})
	}
	function messageView (msg) {
		var sanitizedMsg = MessageStuff.controller.sanitize(msg.message);
		return $('<div class = "messages">').append(
			$('<p class="user">').append(msg.user),
			$('<p class="msg">').append(sanitizedMsg) //sanitize input
		)
	}



})()