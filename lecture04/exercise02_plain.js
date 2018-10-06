function checkSystem(){
	const os = require('os');
	const minMemory = 4;
	const minCores = 2;

	const systemMemory = os.totalmem();
	const countCores = os.cpus().length;
	let valid = true;

	console.log("Checking your system...");

	if(systemMemory/1000000000 < 4){
		console.log("This app needs at least 4 GB of RAM");
		valid = false; 
	}

	if(countCores < 2){
		console.log("Processor is not supported");
		valid = false;
	}

	if(valid){
		console.log("System is checked successfully.");
	}
}

checkSystem();