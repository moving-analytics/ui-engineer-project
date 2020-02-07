import React from 'react';
import useFetch from './util/useFetch';
import Gauge from './components/Gauge';

import './sass/main.scss';

const App = () => {
  const ns = 'app';
  // API URL location
  const api = 'https://sandbox.movinganalytics.com/test/indicators';

  // Used to bypass CORS in development for localhost
  const res = useFetch('https://cors-anywhere.herokuapp.com/' + api);
  
  // Loads app when API data is recieved
  if (res.load) {
    return (
      <div className={ns}>
        <div className={`${ns}__gauge-container`}>
        {/* Maps data into gauge component */}
        {
          res.data.map(data => (
            <Gauge data={data} key={data.type}/>
          ))
        }
        </div>
      </div>
    );
  
  // Displays loading if API hasn't responded, or displays error if problem with API
  } else {
    return(
      <div className={`${ns}__message-container`}>
        {res.err ? 'Error loading page. Please refresh' : 'Loading'}
      </div>
    );
  };
};

export default App;