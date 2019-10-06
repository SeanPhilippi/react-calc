import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getNum from './utilities/getNum';
import calculate from './utilities/calculate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('getNum', () => {
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

test('calculate', () => {
  expect(calculate('3,3')).toBe(6);
  expect(calculate('rfr,45')).toBe(45);
  expect(calculate('2,30')).toBe(32);
});