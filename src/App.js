import React, { PureComponent } from 'react';
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
      const delimiters = getDelimiters(delimiterSettings, altDelimiter);
      const values = getValues(inputString, delimiters, upperBound);
      const formula = values.join(` ${ operator } `) + ' =';
      this.setState({ formula });
      let result = calculate(values, allowNegativeNumbers);
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
      <div className="App">
        <div className="calculator">
          <h1>
            String Calculator
          </h1>
          <div className="formula">
            { formula } { result }
          </div>
          <div className="error-message">
            { error }
          </div>
          <form onSubmit={ this.handleSubmit }>
            <div className="string-input">
              <label htmlFor="string-input">
                String Input:
              </label>
              <textarea
                rows="5"
                columns="50"
                autoFocus
                autoComplete="off"
                placeholder=""
                name="inputString"
                value={ inputString }
                onChange={ this.handleOnChange }
              >
              </textarea>
            </div>
            <input
              type="submit"
              value="calculate"
              className="submit"
            />
          </form>
          <Settings
            altDelimiter={ altDelimiter }
            upperBound={ upperBound }
            allowNegativeNumbers={ allowNegativeNumbers }
            handleOnChange={ this.handleOnChange }
            handleCheck={ this.handleCheck }
          />
        </div>
      </div>
    );
  };
};

export default App;