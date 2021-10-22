const createError = require('http-errors');
const morgan = require('morgan');
const compression = require('compression');
const express = require('express');
const path = require('path');
const search = require('./api/search');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/search', async (req, res) => {
  const { q: term, index = 0 } = req.query;
  const indexOffset = Math.max(0, parseInt(index, 10));
  const data = await search(term, indexOffset);
  const { results, pagination } = data;
  res.render('index', { term, results, pagination, index });
});

app.listen(port, () => {
  console.log(`FT headlines app listening at ${port}`);
});

app.get('*', (req, res) => {
  res.status(404).render('error');
});
