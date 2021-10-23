const http = require('../index');
const parsePagination = require('./utils/paginate');

const search = async (term, index) => {
  let searchResult = {
    results: [],
    pagination: {},
    total: 0,
  };
  return http
    .post('/content/search/v1', {
      queryString: `title: ${term}`,
      resultContext: {
        offset: index,
        maxResults: 25,
        aspects: ['title', 'lifecycle', 'location', 'summary', 'editorial'],
      },
    })
    .then((response) => {
      const { data } = response;
      searchResult.results = data?.results[0]?.results;
      searchResult.pagination = parsePagination(index, 25, data?.results[0]?.indexCount);
      searchResult.total = data?.results[0]?.indexCount;
      console.log(`[SUCCESS][FT] /content/search/v1 WAS SUCCESSFUL FOR TERM ${term} AT INDEX ${index}`);
      return searchResult;
    })
    .catch((err) => {
      console.log(
        `[ERROR][FT] /content/search/v1 WAS UNSUCCESSFUL FOR TERM ${term} AT INDEX ${index}`,
        err.response.data
      );
    });
};

module.exports = search;
