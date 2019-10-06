import React, { PureComponent } from 'react';
import calculate from './utilities/calculate';
import './App.css';

class App extends PureComponent {
  state = {
    inputString: ''
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputString } = this.state;
    let result = calculate(inputString);
    this.setState({ result });
  };

  render() {
    const {
      result,
      inputString
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
          <form onSubmit={ this.handleSubmit }>
            <div className="string-input">
              <label htmlFor="string-input">
                String Input:
              </label>
              <textarea
                rows="1"
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