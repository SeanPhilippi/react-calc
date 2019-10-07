const getMultiDelimiters = delimiterSettings => {
  if (delimiterSettings.slice(0, 3) === '//[' && delimiterSettings[delimiterSettings.length - 1] === ']') {
    return delimiterSettings.slice(3, delimiterSettings.length - 1).split('][');
  } else {
    return ',';
  };
};

export default getMultiDelimiters;