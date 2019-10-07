import getNum from './getNum';
import getFilteredNums from './getFilteredNums';
import getCustomDelimiter from './getCustomDelimiter';
import getValues from './getValues';

const calculate = inputString => {
  if (inputString.match(/-\d+/)) {
    throw new Error(`Negative numbers detected: ${ inputString.match(/-\d+/g).join(',').split(',').join(', ') }. No negative numbers!`);
  };
  let delimiterSettings;
  let customDelimiter = ',';
  if (inputString.slice(0, 2) === '//') {
    delimiterSettings = inputString.split('\n')[0];
    customDelimiter = getCustomDelimiter(delimiterSettings);
  }
  const delimiters = ['\n', customDelimiter];
  const values = getValues(inputString, delimiters);
  const nums = values.map(getNum);
  const filteredNums = getFilteredNums(nums, 1000);
  return filteredNums.reduce((ac, cv) => ac + cv).toString();
};

export default calculate;