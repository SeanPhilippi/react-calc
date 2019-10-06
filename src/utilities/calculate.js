import getNum from './getNum';

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
  return nums.reduce((ac, cv) => ac + cv);
};

export default calculate;