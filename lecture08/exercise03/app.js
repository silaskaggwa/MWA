const express = require('express');

const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'lecture08';
const collection = 'my_locations';

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

app.post('/locations', (req, res) => {
	mongoPromise
		.then(db => {
			if(req.body){
				db.collection(collection).insertOne(req.body, (err, doc) => {
					if(err){
						console.log(err.message);
						res.status(500).end("Failed");
					}else{
						db.collection(collection).createIndex({location: '2d'});
						res.status(200).end();
					}
				});
			}
		})
		.catch(err => {
			console.log("err:",err.message);
			res.status(500).end("Db connection failed");
		});
});

const currentLoc = [-91.9665342, 41.017654];
app.get('/locations', (req, res) => {
	mongoPromise
		.then(db => {
			db.collection(collection)
				.find({location: {"$near": currentLoc}})
				.limit(3)
				.toArray((err, result) => {
					if(err){
						res.status(500).end("Failed");
					}else{
						res.json(result);
					}
				});
			
		})
		.catch(err => {
			console.log("err:",err.message);
			res.status(500).end("Db connection failed");
		});
});

module.exports = app;
