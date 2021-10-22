const http = require('../index');

const search = async (term, index) => {
  let searchResult = {
    results: [],
    pagination: {},
  };
  try {
    const response = await http.post('/content/search/v1', {
      queryString: `title: ${term}`,
      resultContext: {
        offset: index,
        maxResults: 25,
        aspects: ['title', 'lifecycle', 'location', 'editorial'],
      },
    });
    const { data } = response;
    searchResult.results = data.results[0].results;
    searchResult.pagination = calculatePaginationObj(index, 25, data.results[0].indexCount);
    console.log('SUCCESS', searchResult.pagination);
  } catch (error) {
    console.log('ERROR RESPONSE', error.response.data);
    throw error;
  }
  return searchResult;
};

const calculatePaginationObj = (index = 0, offset, totalResults) => {
  const idx = Math.min(index, totalResults);
  return {
    hasNext: idx + offset < totalResults,
    hasPrevious: index > 0,
    nextIndex: Math.min(idx + offset, totalResults),
    previousIndex: Math.max(0, idx - offset),
  };
};

module.exports = search;
