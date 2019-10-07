import React, { PureComponent } from 'react';
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
    operator: '+',
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputString, operator } = this.state;
    try {
      const delimiterSettings = inputString.split('\n')[0];
      const delimiters = getDelimiters(delimiterSettings);
      const values = getValues(inputString, delimiters);
      const formula = values.join(` ${ operator } `) + ' =';
      this.setState({ formula });
      let result = calculate(values);
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
        </div>
      </div>
    );
  };
};

export default App;