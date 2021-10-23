const morgan = require('morgan');
const compression = require('compression');
const express = require('express');
const search = require('./api/search');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// for decreasing size of request
app.use(compression());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.render('layouts/layout');
});

app.get('/search', async (req, res) => {
  const { q: term, index = 0 } = req.query;
  const indexOffset = index > 0 ? index : 0;
  const data = await search(term, indexOffset);
  const { results, pagination, total } = data;
  res.render('layouts/layout', { term, results, pagination, index, total });
});

app.get('*', (req, res) => {
  res.status(404).render('error');
});

app.listen(port, () => {
  console.log(`FT headlines app listening at ${port}`);
});
