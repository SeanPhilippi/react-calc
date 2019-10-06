import getNum from './getNum';

const calculate = inputString => {
  const values = inputString.split(',');
  if (values.length < 3) {
    const nums = values.map(getNum);
    return nums.reduce((ac, cv) => ac + cv);
  };
};

export default calculate;