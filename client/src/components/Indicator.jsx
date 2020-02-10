import React from 'react';


const Indicator = ({ indicator }) => {

  return (
    <div className='indicator'>
      <h2 className='indicator-type'>{indicator.type}</h2>
      <div className='indicator-halfCircle'>
        <h1>{indicator.value}</h1>
      </div>
      <div className='indicator-minMax'>
        <h3>{indicator.min}</h3>
        <h3>{indicator.max}</h3>
      </div>
    </div>
  )
}

export default Indicator;

