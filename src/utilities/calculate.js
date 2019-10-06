import getNum from './getNum';

const calculate = inputString => {
  const values = inputString.split(',');
  const nums = values.map(getNum);
  return nums.reduce((ac, cv) => ac + cv);
};

export default calculate;