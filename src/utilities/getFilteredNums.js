const getFilteredNums = (nums, upperBound) => {
  return nums.filter(num => num < upperBound);
};

export default getFilteredNums;