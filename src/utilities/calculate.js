import getNum from './getNum';
import getFilteredNums from './getFilteredNums';
import getCustomDelimiter from './getCustomDelimiter';
import getMultiCharDelimiter from './getMultiCharDelimiter';
import getValues from './getValues';

const calculate = inputString => {
  if (inputString.match(/-\d+/)) {
    throw new Error(`Negative numbers detected: ${ inputString.match(/-\d+/g).join(',').split(',').join(', ') }. No negative numbers!`);
  };
  const delimiterSettings = inputString.split('\n')[0];
  const customDelimiter = getCustomDelimiter(delimiterSettings);
  const multiCharDelimiter = getMultiCharDelimiter(delimiterSettings);
  const delimiters = ['\n', customDelimiter, multiCharDelimiter];
  const values = getValues(inputString, delimiters);
  const nums = values.map(getNum);
  const filteredNums = getFilteredNums(nums, 1000);
  return filteredNums.reduce((ac, cv) => ac + cv).toString();
};

export default calculate;