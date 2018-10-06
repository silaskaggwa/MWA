const fs = require('fs');
const path = require('path');
process.on('message', myPath => {
	console.log("path: ",myPath);
	const readStream = fs.createReadStream(path.join(__dirname, myPath), {encoding: 'utf8', highWaterMark: 16*1024});

	readStream.on('data', chunk => {
		console.log("chunk>> ",chunk.length);
		process.send(chunk);
	});
	readStream.on('error', err => {
		process.send(err.message);
	});
	readStream.on('end', () => {
		process.send('done');
	});
});