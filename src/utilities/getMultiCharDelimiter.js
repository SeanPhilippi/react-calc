const getMultiCharDelimiter = delimiterSettings => {
  if (delimiterSettings.slice(0, 3) === '//[' && delimiterSettings[delimiterSettings.length - 1] === ']') {
    return delimiterSettings.slice(3, delimiterSettings.length - 1);
  } else {
    return ',';
  };
};

export default getMultiCharDelimiter;