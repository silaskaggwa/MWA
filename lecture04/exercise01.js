const http = require('http');
const { fork } = require('child_process');
const url = require('url');
const server = http.createServer();

server.on('request', (req, res) => {
	const { query } = url.parse(req.url, true);
	const readerProcess = fork('reader_process.js')
	let done = false;
	if(query.url){
		readerProcess.send(query.url);
	}
	
	readerProcess.on('message', data => {
		if(data == 'error'){
			res.end('Content not found');
			done = true;
		}if(data == 'done'){
			console.log("Done>>");
			res.end();
		}else{
			if(!done) res.write(data);
		}
	});
});

server.listen(4000, 'localhost');