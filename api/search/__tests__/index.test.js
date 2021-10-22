const { expect } = require('@jest/globals');
const axios = require('axios');
const search = require('../index');
jest.mock('axios');

test('[ENDPOINT][SEARCH] -- returns data object when search is called with correct params', () => {
  const response = {
    data: {
      results: [
        {
          indexCount: 1,
          results: [
            {
              text: 'test',
            },
          ],
        },
      ],
    },
  };
  const result = {
    results: [{ text: test }],
    page: 0,
    total: 1,
  };
  axios.post = jest.fn().mockResolvedValue(response);
  expect(search('text', 1)).resolves.toEqual(result);
});

// test('[ENDPOINT][SEARCH] -- returns error when called with incorrect params', () => {
//   const response = {
//     data: {
//       results: [
//         {
//           indexCount: 1,
//           results: [
//             {
//               text: 'test',
//             },
//           ],
//         },
//       ],
//     },
//   };
//   const result = {
//     results: [{ text: test }],
//     page: 0,
//     total: 1,
//   };

//   axios.post = jest.fn().mockReturnValue(Promise.reject(result));
//   expect(() => {
//     search();
//   }).toThrow(TypeError);
// });
