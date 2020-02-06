import React, { useEffect, useState } from 'react';
import useFetch from './util/useFetch';
import Guage from './components/Guage';

const App = () => {
  const res = useFetch("https://cors-anywhere.herokuapp.com/" + "https://sandbox.movinganalytics.com/test/indicators");
  
  if (res.load) {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div>
        {
          res.data.map(data => (
            <Guage data={data} key={data.type}/>
          ))
        }
        </div>
      </div>
    );
  } else {
    return(
      <div>
        Loading...
      </div>
    )
  }
  
}

export default App;
