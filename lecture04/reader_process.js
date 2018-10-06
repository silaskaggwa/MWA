const fs = require('fs');
const path = require('path');
process.on('message', myPath => {
	console.log("path: ",myPath);
	fs.readFile(path.join(__dirname, myPath), 'UTF-8', (err, data) => {
		if(err){
			data = err.message;
		}
		//console.log(data);
		process.send(data);
	});
});