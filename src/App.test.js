import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getNum from './utilities/getNum';
import getFilteredNums from './utilities/getFilteredNums';
import getCustomDelimiter from './utilities/getCustomDelimiter';
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
  expect(calculate('3,3,45,34,555,6363'))
    .toBe('640');
  expect(calculate('2,30'))
    .toBe('32');
  expect(calculate('1,2,3,4,5,6,7,8,9,10,11,12'))
    .toBe('78');
  expect(calculate('3,3,lfe'))
    .toBe('6');
  expect(calculate('rfr,45'))
    .toBe('45');
  expect(calculate('65,4,34,4vrv,se,34,52'))
    .toBe('189');
});

test('calculate with alt delimiter', () => {
  expect(calculate('3\n3')).toBe('6');
  expect(calculate('rfrl\n45')).toBe('45');
  expect(calculate('1,2,3,4,5,6,\n7,8,9,10\n11,12')).toBe('78');
});

test('throw error for negative numbers', () => {
  expect(() => calculate('3\n-3'))
    .toThrowError('Negative numbers detected: -3. No negative numbers!');
  expect(() => calculate('rfrl\n-45,23'))
    .toThrowError('Negative numbers detected: -45. No negative numbers!');
  expect(() => calculate('1,2,3,-4,5,6,\n7,-8,9,10\n11,12'))
    .toThrowError('Negative numbers detected: -4, -8. No negative numbers!');
  expect(() => calculate('-3,-5,23\n323'))
    .toThrowError('Negative numbers detected: -3, -5. No negative numbers!');
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
  expect(getValues('3\n3fefe33', ['\n', 'fefe']))
    .toStrictEqual(['3', '3', '33']);
  expect(getValues('6rf5rl\n45', ['\n', 'rf']))
    .toStrictEqual(['6', '5rl', '45']);
  expect(getValues('1,2,34,4,934*5,6\n7,8,9,10\n11,12', ['\n', '34*']))
    .toStrictEqual(['1', '2', '34', '4', '9', '5', '6', '7', '8', '9', '10', '11', '12']);
  expect(getValues('l24\n542,4k42k4,25', ['\n', 'k']))
    .toStrictEqual(['l24', '542', '4', '42', '4', '25']);
});