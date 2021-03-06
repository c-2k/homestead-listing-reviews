const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const environment = 'development';
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../dist')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/listing/:listingId', (req, res) => {
  knex('reviews')
    .where('listingId', req.params.listingId)
    .innerJoin('users', 'reviews.userId', 'users.userId')
    .then(data => res.send(data))
    .catch(err => console.log('ERROR-->', err));
});

const html = path.join(__dirname, '/../dist/index.html');
app.get('/:listingId', (req, res) => {
  res.sendFile(html);
});

const bundle = path.join(__dirname, '/../dist/bundle.js');
app.get('/bundle.js', (req, res) => {
  res.sendFile(bundle);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
