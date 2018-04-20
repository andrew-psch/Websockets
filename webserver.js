var express = require("express"),
	app = express(),
	server = require("http").createServer(app),
	io = require("socket.io").listen(server),
	bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

var client = io.of("/servicenow");
client.on("connection", function(socket) {
	socket.on("user init", function(data) {
		client.emit("broadcast", { message: "Welcome a new user " + data });
	});
	socket.on("clientMessage", function(data) {
		client.emit("broadcast", data);
	});
});

app.post("/message", function(req, res) {
	io.of("/servicenow").emit("broadcast", req.body);
	res.send(
		JSON.stringify({
			status: "OK"
		})
	);
});

server.listen(3000);
