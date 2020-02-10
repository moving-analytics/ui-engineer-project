import React from 'react';

const Indicator = ({ indicator }) => {
  // value on how much to rotate circle to show indicator fill up
  const rotate = (indicator.value / indicator.max) * 100;
  // changes color from red to yellow to green based on the percentage of rotate
  const fill = rotate > 75 ? '#e64f29' : rotate > 25 ? '#f2af2a' : '#44f7b2'

  return (
    <div className='indicator'>
      <div className='indicator-container'>
        <h2 className='indicator-type'>{indicator.type}</h2>
        <div className='indicator-halfCircle' style={{'--percentage': rotate, '--fill': fill}}>
          <h1 className='indicator-value'>{indicator.value}</h1>
        </div>
        <div className='indicator-min-max-container'>
          <h3 className='indicator-min-max'>{indicator.min}</h3>
          <h3>{indicator.max}</h3>
        </div>
      </div>
    </div>
  )
}

export default Indicator;

