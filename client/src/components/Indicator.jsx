import React from 'react';

import '../scss/style.scss'

const Indicator = ({ indicator }) => {
  const rotate = (indicator.value / indicator.max) * 100;
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

