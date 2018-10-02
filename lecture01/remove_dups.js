(function(){
	'use strict';

	console.log("LESSON01 >>");

	let x = [4,1,5,7,2,3,1,4,6,5,2];

	//using ES6
	Array.prototype.removeDups1 = function(){
		return this.filter((item, index, arr) => {
			return arr.indexOf(item) == index;
		});
	}

	Array.prototype.removeDups2 = function(){
		return [...new Set(this)];
	}

	console.log("1.1 ", x.removeDups1());
	console.log("1.2 ", x.removeDups2());


	// using promise
	Array.prototype.removeDupsPromise = function (){
		return new Promise((resolve, reject) => {
			resolve(this.removeDups1());
		});
	}
	x.removeDupsPromise().then(data => console.log("2. ", data));

	// using Async/wait
	Array.prototype.removeDupsAsyncWait = async function(){
		try{
			let filteredArr = await this.removeDupsPromise();
			console.log("3. ", filteredArr);
		}catch(error){
			console.log("3. ", error);
		}
	}
	x.removeDupsAsyncWait();
	console.log('3. ', 'Finish');

	// using observables
	Array.prototype.removeDupsObservable = function(){
		const { from } = rxjs;
		const { distinct, reduce } = rxjs.operators;
		from(x)
			.pipe(
				distinct(),
				reduce(
					(acc,cur) => {
						acc.push(cur);
						return acc;
					},[]),
			)
			.subscribe(
				data => console.log("4. ", data),
				null,
				() => console.log("4. ", 'Done')
			)
	}
	x.removeDupsObservable();
	

})();