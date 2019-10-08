const calculate = (values, allowNegativeNumbers) => {
  if (!allowNegativeNumbers) {
    const negativeNums = values.filter(num => num < 0);
    if (negativeNums.length) {
      throw new Error(`Negative numbers detected: ${ negativeNums.join(',').split(',').join(', ') }. No negative numbers!`);
    };
  }
  return values.reduce((ac, cv) => ac + cv).toString();
};

export default calculate;