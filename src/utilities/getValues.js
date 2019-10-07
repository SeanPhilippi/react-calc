const getValues = (inputString, delimiters) => {
  let values = inputString.split(',');
  delimiters.forEach(delimiter => {
    values = values.join(',').split(delimiter)
    console.log('delimiter', delimiter, 'values', values)
  });
  return values.join(',').split(',');
};

export default getValues;