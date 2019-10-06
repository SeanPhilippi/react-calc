import getNum from './getNum';
import getFilteredNums from './getFilteredNums';

const calculate = inputString => {
  if (inputString.match(/-\d+/)) {
    throw new Error(`Negative numbers detected: ${ inputString.match(/-\d+/g).join(',').split(',').join(', ') }. No negative numbers!`);
  };
  let values;
  const delimiters = [',', '\n'];
  delimiters.forEach(delimiter => {
    values = inputString.split(delimiter).join(',')
      .split(',');
  });
  const nums = values.map(getNum);
  const filteredNums = getFilteredNums(nums, 1000);
  return filteredNums.reduce((ac, cv) => ac + cv).toString();
};

export default calculate;