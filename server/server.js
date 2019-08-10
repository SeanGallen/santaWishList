const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

var WishModel = new mongoose.Schema({
	name: String
});

app.get('/', (req, res) => {
	res.send('here is a response')
})

app.get('/get-wishes', (req, res) => {
	var Wish = mongoose.model("Wish", WishModel);

	var wishes = Wish.find({}, function(err, items) {
		if (err) {
			return res.send();
		}
	}).exec(function(err, items) {
		if (err) {
			return res.send()
		}
		res.send(items)
	})
})

app.post('/add-wish', (req, res) => {

	var Wish = mongoose.model("Wish", WishModel);

	var wish = new Wish(req.body);
	wish.save()
		.then(item => {
			res.send("item saved to database");
		})
		.catch(err => {
			res.status(400).send("unable to save to database");
		});
})

app.put('/update-wish/:id', (req, res) => {
	var Wish = mongoose.model("Wish", WishModel);

	var query = { _id: req.params.id }

	Wish.update(query, { name: req.body.name })
		.then(item => {
			res.send('item updated in database');
		})
		.catch(err => {
			res.status(400).send("unable to update item in database");
		})
})

app.delete('/delete-wish/:id', (req, res) => {
	var Wish = mongoose.model("Wish", WishModel);

	var query = {_id: req.params.id }

	Wish.deleteOne(query)
		.then(item => {
			res.send('item deleted');
		})
		.catch(err => {
			res.status(400).send("unable to delete item in database");
		})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
