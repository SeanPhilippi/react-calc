import React from 'react';

const Form = ({
  handleSubmit,
  handleOnChange,
  inputString
}) => (
  <form onSubmit={ handleSubmit }>
    <div className="string-input">
      <label htmlFor="string-input">
        String Input:
      </label>
      <textarea
        rows="5"
        columns="50"
        autoFocus
        autoComplete="off"
        name="inputString"
        value={ inputString }
        onChange={ handleOnChange }
      >
      </textarea>
    </div>
    <input
      type="submit"
      value="calculate"
      className="submit"
    />
  </form>
);

export default Form;

