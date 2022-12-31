//initiate variables
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();
const port = 4000;

//path for running app when offline
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/json and x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//using cors to allow access
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Using Mongoose to connect to database
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.krhlf2n.mongodb.net/myMovies');
}

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    releaseYear: String,
    coverImage: String,
    summary: String
});

const movieModel = mongoose.model('mymovies', movieSchema)

//POST methods
app.post('/api/movies', (req, res) => {
    console.log(req.body);

    movieModel.create({
        title: req.body.title,
        director: req.body.director,
        releaseYear: req.body.releaseYear,
        coverImage: req.body.coverImage,
        summary: req.body.summary
    })

    res.send('Data Recieved');
})

//GET methods
app.get("/", (req, res) => {
    res.send(`Hello from port ${port}`)
})

app.get('/api/movies', (req, res) => {
    movieModel.find((error, data) => {
        res.json(data);
    })
})
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);
    movieModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//PUT and DELETE so we can update and remove data
app.put('/api/movies/:id', (req, res) => {
    console.log("Update: " + req.params.id);

    movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, data) => {
            res.send(data);
        })
})

app.delete('/api/movies/:id', (req, res) => {
    console.log('Deleting: ' + req.params.id);
    movieModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
        res.send(data);
    })
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });

//listen for request on given port
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})