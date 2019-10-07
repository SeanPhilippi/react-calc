import React, { PureComponent } from 'react';
import calculate from './utilities/calculate';
import './App.css';

class App extends PureComponent {
  state = {
    inputString: '',
    error: '',
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputString, altDelimiter } = this.state;
    try {
      let result = calculate(inputString, altDelimiter);
      this.setState({ error: '' });
      this.setState({ result: '' });
      this.setState({ result });
    } catch(err) {
      this.setState({ result: '' });
      this.setState({ error: err.message });
    };
  };

  render() {
    const {
      result,
      inputString,
      error,
    } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <h1>
            String Calculator
          </h1>
          <div className="display">
            { result }
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