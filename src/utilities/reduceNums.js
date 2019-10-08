const reduceNums = (values, operator) => {
  if (operator === '+') {
    return values.reduce((acc, cv) => acc + cv);
  } else if (operator === '-') {
    return values.reduce((acc, cv) => acc - cv);
  } else if (operator === '/') {
    return values.reduce((acc, cv) => acc / cv);
  } else if (operator === 'x') {
    return values.reduce((acc, cv) => acc * cv);
  };
};

export default reduceNums;