import getNum from './getNum';

const calculate = inputString => {
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