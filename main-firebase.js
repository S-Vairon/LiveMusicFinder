

$(document).ready(function() {
	// create object instance of my firebase database
var myDBReference = new Firebase('https://summer-outsideconcerts-board.firebaseio.com');

	// define submit event listener/handler
var config = {
    apiKey: "AIzaSyCr92WuVPfwZDt5XpaK13BoJmcMz3C1hik",
    authDomain: "summer-outsideconcerts-board.firebaseapp.com",
    databaseURL: "https://summer-outsideconcerts-board.firebaseio.com",
    storageBucket: "summer-outsideconcerts-board.appspot.com",
  };
  firebase.initializeApp(config);

$('#message-form').submit(function(event) {
	event.preventDefault();
	var message = $('#message').val();
	
	var messagesReference = myDBReference.child('messages');

	messagesReference.push({
		mesage: message
		});
	});


})
