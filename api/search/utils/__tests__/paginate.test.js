const parsePagination = require('../paginate');
const { expect } = require('@jest/globals');

test('[UTILITY][PARSE PAGINATION] -- returns pagination object with false next index', () => {
  const response = {
    hasNext: false,
    hasPrevious: false,
    nextIndex: 0,
    previousIndex: 0,
  };
  expect(parsePagination(0, 25, 0)).toEqual(response);
});

test('[UTILITY][PARSE PAGINATION] -- returns pagination object with true next index', () => {
  const response = {
    hasNext: true,
    hasPrevious: true,
    nextIndex: 50,
    previousIndex: 0,
  };
  expect(parsePagination(25, 25, 100)).toEqual(response);
});
