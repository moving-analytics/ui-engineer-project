import React from 'react';
import axios from 'axios';
import '../css/App.css';
import MetricContainer from './MetricContainer';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const APIUrl = 'https://sandbox.movinganalytics.com/test/indicators';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      metrics: [],
      error: ""
    }
  }
  componentDidMount() {
    axios.get(proxyUrl+APIUrl)
      .then(res => {
        this.setState((state) => {
          return {
            isLoaded: true,
            metrics: res.data
          }
        });  
      })
      .catch(err => {
        this.setState({error: err});
      });
  }

  render() {
    if(this.state.isLoaded){
      return (
        <div className="App">
          {this.state.metrics.map((metric,index) => (
            <MetricContainer 
              metricValue={metric.value}
              metricType={metric.type}
              metricMin={metric.min}
              metricMax={metric.max}
              key={index}
            />
          ))} 
      </div>
      )
    }
    else {
      if(this.state.error) {
        return (
          <h3>Error fetching data from host: {this.state.error}</h3>
        )
      }
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div> 
      )
    }
  }

  
}

export default App;
