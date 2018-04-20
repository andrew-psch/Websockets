function($window, $scope) {
	var c = this;
	$scope.socketMessage = {data:''};
	$scope.connection = false;

	var socket = io("https://k18.buzzorbiter.com/servicenow");
	if (socket) $scope.connection = true;

	socket.on("broadcast", function(data) {
		console.log("server message \u21B4");
		console.log(data);
	});

	console.log("client message: I'm a new user " + window.NOW.user_display_name);
	socket.emit("user init", window.NOW.user_display_name);

	$scope.broadcast = function(){
		socket.emit("clientMessage",
			{
				user   : window.NOW.user_display_name,
				message: $scope.socketMessage.data
			});
	};
}
