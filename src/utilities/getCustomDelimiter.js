const getCustomDelimiter = delimiterSettings => {
  if (delimiterSettings.slice(0,2) === '//' && delimiterSettings.length === 3) {
    return delimiterSettings.slice(2);
  } else {
    return ',';
  };
};

export default getCustomDelimiter;