const express = require('express');
const axios = require('axios');
const { from } = require('rxjs');
const router = express.Router();

const externalUrl = "http://jsonplaceholder.typicode.com/users/";

function getExtRsrcPromise(url){
	return axios.get(url);
}

// 1. using promise
router.get('/v1', function(req, res, next) {
  	getExtRsrcPromise(externalUrl)
  		.then(response => {
  			res.json(response.data);
  		})
  		.catch(err => {
  			console.log("Errr:", err.message);
  			res.end(err.message);
  		});
});

// 2. using observables
router.get('/v2', function(req, res, next) {
	from(getExtRsrcPromise(externalUrl))
		.subscribe(
			response => res.json(response.data),
			error => res.end(error.message)
		);
});

// 3. using Async/wait
router.get('/v3', async function(req, res, next) {
	try{
		const response = await getExtRsrcPromise(externalUrl);
		res.json(response.data);
	}catch(err){
		res.end(err.message);
	}
});

module.exports = router;
