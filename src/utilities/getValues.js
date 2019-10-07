import getNum from './getNum';
import getFilteredNums from './getFilteredNums';

const getValues = (inputString, delimiters) => {
  let strings = inputString.split(',');
  delimiters.forEach(delimiter => {
    strings = strings.join(',').split(delimiter)
    console.log('delimiter', delimiter, 'strings', strings)
  });
  strings = strings.join(',').split(',').filter(string => string !== '');
  const nums = strings.map(getNum);
  const values = getFilteredNums(nums, 1000);
  return values;
};

export default getValues;