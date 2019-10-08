import getNum from './getNum';
import getFilteredNums from './getFilteredNums';

const getValues = (inputString, delimiters, upperBound) => {
  let strings = inputString.split(',');
  delimiters.forEach(delimiter => {
    strings = strings.join(',').split(delimiter)
  });
  strings = strings.join(',').split(',').filter(string => string !== '');
  const nums = strings.map(getNum);
  const values = getFilteredNums(nums, upperBound);
  return values;
};

export default getValues;