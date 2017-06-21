const express = require('express');

const app = express();

// app.use('/', express.static(__dirname + "/static"));
app.use(express.static("static/"));
// app.use('/', function(req, res){
// 	console.log("Hello world react");
// });

app.listen(3000, function(){
	console.log("server running on port 3000");
});
