const os = require('os');
const { from } = require('rxjs');

function checkSystem(){
	return new Promise((resolve,reject) => {
		const minMemory = 4;
		const minCores = 2;

		const systemMemory = os.totalmem();
		const countCores = os.cpus().length;

		if(systemMemory/1000000000 < 4){
			reject("This app needs at least 4 GB of RAM");
		}else if(countCores < 2){
			reject("Processor is not supported");
		}else{
			resolve("System is checked successfully.");
		}
	});	
}

from(checkSystem()).subscribe(
	info => {
		console.log(info);
	},
	err => {
		console.log(err);
	}
);
console.log("Checking your system...");