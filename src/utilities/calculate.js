import reduceNums from './reduceNums';

const calculate = (values, operator, allowNegativeNumbers) => {
  if (!allowNegativeNumbers) {
    const negativeNums = values.filter(num => num < 0);
    if (negativeNums.length) {
      throw new Error(`Negative numbers detected: ${ negativeNums.join(',').split(',').join(', ') }. No negative numbers!`);
    };
  };
  return reduceNums(values, operator).toString();
};

export default calculate;