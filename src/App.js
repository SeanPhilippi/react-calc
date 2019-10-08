import React, { PureComponent } from 'react';
import Display from './components/Display';
import Form from './components/Form';
import Settings from './components/Settings';
import calculate from './utilities/calculate';
import getDelimiters from './utilities/getDelimiters';
import getValues from './utilities/getValues';
import './App.css';

class App extends PureComponent {
  state = {
    inputString: '',
    result: '',
    formula: '',
    error: '',
    altDelimiter: '\n',
    upperBound: 1000,
    operator: '+',
    allowNegativeNumbers: false,
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleCheck = () => {
    this.setState({ allowNegativeNumbers: !this.state.allowNegativeNumbers });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      inputString,
      altDelimiter,
      operator,
      upperBound,
      allowNegativeNumbers
    } = this.state;
    try {
      const delimiterSettings = inputString.split('\n')[0];
      if (delimiterSettings.slice(0, 2) === '//' && !inputString.split('\n')[1]) {
        throw new Error('There is nothing to parse for the calculation.');
      };
      const delimiters = getDelimiters(delimiterSettings, altDelimiter);
      const values = getValues(inputString, delimiters, upperBound);
      const formula = values.join(` ${ operator } `) + ' =';
      this.setState({ formula });
      let result = calculate(values, operator, allowNegativeNumbers);
      this.setState({
        error: '',
        result
      });
    } catch(err) {
      this.setState({
        result: '',
        formula: '',
        error: err.message
      });
    };
  };

  render() {
    const {
      inputString,
      result,
      formula,
      error,
      altDelimiter,
      upperBound,
      allowNegativeNumbers
    } = this.state;

    return (
      <div className="calculator">
        <Display
          result={ result }
          error={ error }
          formula={ formula }
        />
        <Form
          inputString={ inputString }
          handleSumbit={ this.handleSubmit }
          handleOnChange={ this.handleOnChange }
        />
        <Settings
          altDelimiter={ altDelimiter }
          upperBound={ upperBound }
          allowNegativeNumbers={ allowNegativeNumbers }
          handleOnChange={ this.handleOnChange }
          handleCheck={ this.handleCheck }
        />
      </div>
    );
  };
};

export default App;