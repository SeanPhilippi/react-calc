import getCustomDelimiter from './getCustomDelimiter';
import getMultiCharDelimiter from './getMultiCharDelimiter';
import getMultiDelimiters from './getMultiDelimiters';

const getDelimiters = (delimiterSettings, altDelimiter) => {
  const customDelimiter = getCustomDelimiter(delimiterSettings);
  const multiCharDelimiter = getMultiCharDelimiter(delimiterSettings);
  const multiDelimiters = getMultiDelimiters(delimiterSettings);
  return [altDelimiter, customDelimiter, multiCharDelimiter, ...multiDelimiters];
}

export default getDelimiters;