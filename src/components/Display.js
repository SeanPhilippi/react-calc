import React from 'react';

const Display = ({
  formula,
  result,
  error
}) => (
  <>
    <h1>
      String Calculator
    </h1>
    <div className="display">
      { formula } { result }
    </div>
    <div className="error-message">
      { error }
    </div>
  </>
)

export default Display;