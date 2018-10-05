const http = require('http');
const fs = require('fs');
let count = 0;

const server = http.createServer((req, res) => {
	count++;
	console.log("request: ", count);
	fs.createReadStream('./sample1.mp4').pipe(res);
});

server.on('error', (err) => {
	console.log(err);
});

server.listen(4000, 'localhost', err => {
	if (err) {
		console.log(err);
	}else{
		console.log("server started :4000");
	}
});