import React from 'react';
import axios from 'axios';
import Indicator from './Indicator';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicators: []
    };
  }

  componentDidMount() {
    // Site sends no Access-Control-Allow-Origin header in its responses, 
    // meaning there’s no way frontend code can directly access responses from that site.
    // Thus needing the use of a CORS proxy URL to allow localhost
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://sandbox.movinganalytics.com/test/indicators';

    axios.get(proxyUrl + targetUrl)
      .then(({ data }) => this.setState({ indicators: data }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        {this.state.indicators.map((indicator, index) => <Indicator indicator={indicator} key={index}/>)}
      </div>
    )
  }
}