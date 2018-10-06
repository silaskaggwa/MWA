const fs = require('fs');
const path = require('path');
process.on('message', myPath => {
	console.log("path: ",myPath);
	const readStream = fs.createReadStream(path.join(__dirname, myPath), {encoding: 'utf8'});

	readStream.on('data', chunk => {
		process.send(chunk);
	});
	readStream.on('error', err => {
		process.send(err.message);
	});
});