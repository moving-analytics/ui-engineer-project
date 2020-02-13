import React from 'react';
import '../css/MetricContainer.css';

class MetricContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loadingValue: 0
    };
    this.updateAnimation = this.updateAnimation.bind(this);
  }

  componentDidMount() {
    const canvas = this.refs.canvas; 
    canvas.style.width = "240px";
    canvas.style.height = "180px";
    this.ctx = canvas.getContext("2d");
    this.centerX = canvas.width/2;
    this.centerY = canvas.height/2+70;
    this.arcRadius = this.centerX - 35;
    this.metricRange = this.props.metricMax-this.props.metricMin;

    // value text
    this.ctx.textAlign = "center";
    this.ctx.font="bold 90px Varela Round";
    this.ctx.fillStyle = "#42494F";
    this.ctx.fillText(this.props.metricValue, (this.centerX), this.centerY-20);

    // type text
    this.ctx.font="bold 30px Varela Round";
    this.ctx.fillStyle = "#6F7F8D";
    this.ctx.fillText(this.props.metricType.toUpperCase(), (this.centerX), (this.centerY-this.arcRadius)-30);

    // min and max text
    this.ctx.fillText(this.props.metricMin, (this.centerX-this.arcRadius), this.centerY+50);
    this.ctx.fillText(this.props.metricMax, (this.centerX+this.arcRadius), this.centerY+50);

    //  empty arc
    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = "#E4EEF7";
    this.ctx.beginPath();
    this.ctx.lineWidth = 15;
    this.ctx.arc(this.centerX, this.centerY, this.arcRadius, 1 *Math.PI, 2 * Math.PI);
    this.ctx.stroke();

    //  colored arc
    this.percent = this.props.metricValue/this.metricRange;
    console.log(this.percent);

    if (this.percent < .31) {
      this.ctx.strokeStyle = "#3EEBAF" // green;
    }
    else {
      if (this.percent < .71) {
        this.ctx.strokeStyle = "#ECAF15" // yellow;
      }
      else {
        this.ctx.strokeStyle = "#EC4A15" // red;
      }
    }

    this.requestId = requestAnimationFrame(this.updateAnimation);
  }

  drawLoadingArc() {
    this.ctx.lineCap = "round";
    this.ctx.beginPath();
    this.ctx.lineWidth = 15;
    this.ctx.arc(this.centerX, this.centerY, this.arcRadius, 1 *Math.PI, (1+this.state.loadingValue) * Math.PI);
    this.ctx.stroke();
  }

  updateAnimation() {
    this.drawLoadingArc();
    if (this.state.loadingValue < this.percent-.03) {
      this.setState(prevState => (
        {
          loadingValue: prevState.loadingValue+.02
        }
      ));
      this.requestId = requestAnimationFrame(this.updateAnimation);
    }
    else {
      this.setState({
        loadingValue: this.percent,
        loadingDone: true
      });
      this.drawLoadingArc();
      cancelAnimationFrame(this.requestId);
    }
  }
  

  render() {
    return(
      <div>
        <canvas className="metric-container" ref="canvas" width={400} height={300} />
      </div>
    )
  }
}
export default MetricContainer;