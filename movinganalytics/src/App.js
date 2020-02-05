import React, { useEffect, useState } from 'react';
import useFetch from './util/useFetch';

const App = () => {
  const res = useFetch("https://cors-anywhere.herokuapp.com/" + "https://sandbox.movinganalytics.com/test/indicators");
  
  if(res.load){
    console.log(res.data)
    return (
      <div className="App">
        <header className="App-header"></header>
        <p>

        </p>
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
