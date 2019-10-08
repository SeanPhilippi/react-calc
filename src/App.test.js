import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getNum from './utilities/getNum';
import getDelimiters from './utilities/getDelimiters';
import getFilteredNums from './utilities/getFilteredNums';
import getCustomDelimiter from './utilities/getCustomDelimiter';
import getMultiCharDelimiter from './utilities/getMultiCharDelimiter';
import getMultiDelimiters from './utilities/getMultiDelimiters';
import getValues from './utilities/getValues';
import calculate from './utilities/calculate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('invalid numbers should be converted to 0', () => {
  expect(getNum('fe'))
    .toBe(0);
  expect(getNum('!.'))
    .toBe(0);
  expect(getNum('xfs3'))
    .toBe(0);
  expect(getNum(3))
    .toBe(3);
  expect(getNum(54))
    .toBe(54);
  expect(getNum(266))
    .toBe(266);
  expect(getNum(5453))
    .toBe(5453);
});

test('calculate the sum of an unlimited number of numbers', () => {
  expect(calculate([5, 6, 5, 4, 5, 777, 6, 6, 553, 434]))
    .toBe('1801');
  expect(calculate([2, 30]))
    .toBe('32');
  expect(calculate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
    .toBe('78');
  expect(calculate([3, 3, 0]))
    .toBe('6');
  expect(calculate([45]))
    .toBe('45');
  expect(calculate([54, 64, 36, 26, 4, 467, 54, 2]))
    .toBe('707');
});

test('calculate with alt delimiter', () => {
  expect(calculate(getValues('3\n3', ['\n'], 1000)))
    .toBe('6');
  expect(calculate(getValues('rfrl\n45', ['\n'], 1000)))
    .toBe('45');
  expect(calculate(getValues('1,2,3,4,5,6,\n7,8,9,10\n11,12', ['\n'], 1000)))
    .toBe('78');
});

test('get values using custom alt delimiter', () => {
  expect(getValues('//[r]\n34,54,76,45y54^54@34y12', getDelimiters('//[r]', 'y'), 1000))
    .toStrictEqual([0, 0, 54, 76, 45, 0, 12]);
  expect(getValues('//[fe][ses]\n34,54,76,45fe54^54@34y12', getDelimiters('//[fe][ses]', '^'), 1000))
    .toStrictEqual([0, 0, 54, 76, 45, 54, 0]);
  expect(getValues('//[4f%][s3s][p-o]\n34,534,76fe,45fe54^54@32@334y12', getDelimiters('//[4f%][s3s][p-o]', '@'), 1000))
    .toStrictEqual([0, 0, 534, 0, 0, 32, 0]);
});

test('throw error for negative numbers if not allowed', () => {
  expect(() => calculate([3, -3], false))
    .toThrowError('Negative numbers detected: -3. No negative numbers!');
  expect(() => calculate([-45, 23], false))
    .toThrowError('Negative numbers detected: -45. No negative numbers!');
  expect(() => calculate([-4, 3, 2, 5, 33, 444, -8], false))
    .toThrowError('Negative numbers detected: -4, -8. No negative numbers!');
  expect(() => calculate([-3, -5, 0, 0], false))
    .toThrowError('Negative numbers detected: -3, -5. No negative numbers!');
  expect(calculate([-33, -52, 4, 0], true))
    .toBe('-81');
  expect(calculate([-300, 65, 0, 30], true))
    .toBe('-205');
});

test('filter out numbers greater than upper bound', () => {
  expect(getFilteredNums([4, 3, 2, 3434, 234, 324, 3, 3], 1000))
    .toStrictEqual([4, 3, 2, 234, 324, 3, 3]);
  expect(getFilteredNums([45, 34, 26, 464, 3466, 65, 46], 130))
    .toStrictEqual([45, 34, 26, 65, 46]);
  expect(getFilteredNums([554, 53, 466, 4344, 23233, 13, 433], 3040))
    .toStrictEqual([554, 53, 466, 13, 433]);
});

test('get single character custom delimiter', () => {
  expect(getCustomDelimiter('//d'))
    .toBe('d');
  expect(getCustomDelimiter('//^'))
    .toBe('^');
  expect(getCustomDelimiter('//y8y'))
    .toBe(',');
  expect(getCustomDelimiter('/34'))
    .toBe(',');
  expect(getCustomDelimiter('4,5,63'))
    .toBe(',');
});

test('get correct values with custom delimiter', () => {
  expect(getValues('3\n3fefe33', ['\n', 'fefe'], 1000))
    .toStrictEqual([3, 3, 33]);
  expect(getValues('6rf5rl\n45', ['\n', 'rf'], 1000))
    .toStrictEqual([6, 0, 45]);
  expect(getValues('1,2,34,4,934*5,6\n7,8,9,10\n11,12', ['\n', '34*'], 1000))
    .toStrictEqual([1, 2, 34, 4, 9, 5, 6, 7, 8, 9, 10, 11, 12]);
  expect(getValues('l24\n542,4k42k4,25', ['\n', 'k'], 1000))
    .toStrictEqual([0, 542, 4, 42, 4, 25]);
});

test('get single multi character custom delimiter', () => {
  expect(getMultiCharDelimiter('//[d3]'))
    .toBe('d3');
  expect(getMultiCharDelimiter('//[77^]'))
    .toBe('77^');
  expect(getMultiCharDelimiter('//[y8y67y]'))
    .toBe('y8y67y');
  expect(getMultiCharDelimiter('/[34]'))
    .toBe(',');
  expect(getMultiCharDelimiter('4,5,63'))
    .toBe(',');
});

test('get multiple delimiters of any length', () => {
  expect(getMultiDelimiters('//[d3][55r][54f4f4]'))
    .toStrictEqual(['d3', '55r', '54f4f4']);
  expect(getMultiDelimiters('//[77^][f43f][dvfd!][gdrg-]'))
    .toStrictEqual(['77^', 'f43f', 'dvfd!', 'gdrg-']);
  expect(getMultiDelimiters('//[y8y67y][e44g][,.jk,.][e][red3][drt]'))
    .toStrictEqual(['y8y67y', 'e44g', ',.jk,.', 'e', 'red3', 'drt']);
  expect(getMultiDelimiters('/[34]'))
    .toStrictEqual(',');
  expect(getMultiDelimiters('//[4][5][63'))
    .toStrictEqual(',');
});