const calculatePaginationObj = (index = 0, offset, totalResults) => {
  /**
   * Pagination needs to incretment offset until we reach the total
   * We will need to check if there is a next page or a previous page so we show the correct buttons
   * +
   * Also get the offset for the next and previous
   * To check if it does have a next
   * 1. is current index less than total Results
   * To check if does have a previous
   * 1. is current index greater than 0 (our start point)
   * To get the next index
   * 1. add the index + the offset and check if it's less than total results.
   * To get the previous index
   * 1. subtract the index - offset until you get to  0
   */
  const currentIndex = Math.min(index, totalResults);
  const nextOffset = currentIndex + offset;
  const previousOffset = currentIndex - offset;
  return {
    hasNext: nextOffset < totalResults,
    hasPrevious: index > 0,
    nextIndex: nextOffset < totalResults ? nextOffset : totalResults,
    previousIndex: previousOffset > 0 ? previousOffset : 0,
  };
};

module.exports = calculatePaginationObj;