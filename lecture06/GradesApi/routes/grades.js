const express = require('express');
const router = express.Router();

const grades = [{id: 1, name: 'Silas Kaggwa', course: 'CS572', grade: 98}];

router.get('/', (req, res) => {
	res.json(grades);
});
router.get('/:id', (req, res) => {
	const id = req.params.id;
	for(grade of grades){
		if(grade.id == id){
			return res.json(grade);
		}
	}
	res.status(404).end('Not found');
});

router.post('/', (req, res) => {
	try{
		if(req.body){
			grades.push(req.body);
			res.status(201).end('Success');
		}else{
			res.status(403).end('Forbidden !');
		}
		
	}catch(error){
		res.status(500).end('Failed');
	}
});

router.put('/', (req, res) => {
	for(idx in grades){
		if(grades[idx].id == req.body.id){
			grades[idx] = req.body;
			return res.status(202).end('Success');
		}
	}
	res.status(404).end('Not found');
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	for(idx in grades){
		if(grades[idx].id == id){
			grades.splice(idx,1);
			return res.status(202).end('Success');
		}
	}
	res.status(404).end('Not found');
});

module.exports = router;
