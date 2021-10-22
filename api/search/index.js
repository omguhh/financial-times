const http = require('../index');

const search = async (term, page) => {
  let searchResult = {
    results: [],
    page: 0,
    total: 0,
  };
  try {
    const response = await http.post('/content/search/v1', {
      queryString: `title: ${term}`,
      resultContext: {
        offset: 1,
        maxResults: 25,
        aspects: ['title', 'lifecycle', 'location', 'editorial'],
      },
    });
    const { data } = response;
    searchResult.results = data.results[0].results;
    searchResult.total = data.results[0].indexCount;
    console.log('SUCCESS');
  } catch (error) {
    console.log('ERROR RESPONSE', error.response.data);
  }
  return searchResult;
};

module.exports = search;
