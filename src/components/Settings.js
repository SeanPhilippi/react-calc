import React from 'react';

const Settings = ({
  altDelimiter,
  upperBound,
  allowNegativeNumbers,
  handleOnChange,
  handleCheck,
}) => (
  <div className="settings">
    <h2>
      Settings
    </h2>
    <div>
      <label htmlFor="allow-negative-numbers">
        Allow Negative Numbers?
      </label>
      Yes{' '}
      <input
        className="checkbox"
        name="allowNegativeNumbers"
        onChange={ handleCheck }
        checked={ allowNegativeNumbers }
        type="checkbox"
      />
      No{' '}
      <input
        className="checkbox"
        name="allowNegativeNumbers"
        onChange={ handleCheck }
        checked={ !allowNegativeNumbers }
        type="checkbox"
      />
    </div>
    <div>
      <label htmlFor="custom-delimiter">
        Custom Alternative Delimiter:
      </label>
      <input
        name="altDelimiter"
        className="custom-delimiter"
        placeholder="this character will replace '\n' delimiter"
        type="text"
        maxLength="1"
        value={ altDelimiter }
        onChange={ handleOnChange }
      />
    </div>
    <div>
      <label htmlFor="upper-bound">
        Alternative Upper Bound:
      </label>
      <input
        name="upperBound"
        className="upper-bound"
        type="text"
        value={ upperBound }
        onChange={ handleOnChange }
      />
    </div>
    <div>
      <label htmlFor="operator-select">
        Operator Select:
      </label>
      <select
        className="operators"
        name="operator"
        id="operator-select"
        onChange={ handleOnChange }
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">÷</option>
        <option value="x">x</option>
      </select>
    </div>
  </div>
);

export default Settings;