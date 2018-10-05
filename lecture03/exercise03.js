const EventEmiter = require('events');

class Gym extends EventEmiter {
	constructor(){
		super();
	}

	start(){
		setInterval(() => {
			this.emit("go", "Athlete is working out");
		}, 1000);
	}
}

const gym = new Gym();
gym.on("go", info => console.log(info));

gym.start();