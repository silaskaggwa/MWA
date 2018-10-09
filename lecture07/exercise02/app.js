const express = require('express');
const crypto = require('crypto');
const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'lecture07';

const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

const mongoPromise = new Promise((resolve, reject) => {
	MongoClient.connect(mongoUrl,{ useNewUrlParser: true }, (err, client) => {
		if(err){
			reject("Failed to connect to MongoDB");
		}else{
			resolve(client.db(dbName));
		}
	});
});

const algorithm = 'aes256';
const password = 'asaadsaad';

app.get('/secret', (req, res) => {
	const data = mongoPromise
		.then(async db => {
			const data = await db.collection('homework7').findOne()
			console.log(data);

			const myKey = crypto.createDecipher(algorithm, password);
			let result = myKey.update(data.message, 'hex', 'utf8');
			result += myKey.final('utf8');
			res.status(200).json(result);
		})
		.catch(err => {
			console.log("err:",err.message);
			res.status(500).end("Failed");
		});
});

module.exports = app;
