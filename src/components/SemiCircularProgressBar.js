import React from "react";

class CircularProgressBar extends React.Component {
  render() {
    const sqSize = this.props.sqSize;
    const radius = 150;
    const cx = "50%";
    const cy = "50%";
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * this.props.percentage) / 100;

    return (
      <>
        <svg
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}
        >
          <text
            style={{ fontSize: "3em", fontWeight: "bold", fill: "gray" }}
            x="50%"
            y="5%"
            dy=".3em"
            textAnchor="middle"
          >
            {this.props.type}
          </text>
          <circle
            className="circle-background"
            style={{
              fill: "none"
            }}
            cx={cx}
            cy={cy}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
            strokeDasharray="471, 943"
            stroke="#ddd"
            transform={`rotate(180 ${this.props.sqSize / 2} ${this.props
              .sqSize / 2})`}
          />
          <circle
            className="circle-progress"
            style={{
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transition: "ease 3s 0.5s"
            }}
            cx={cx}
            cy={cy}
            r={radius}
            stroke={this.props.color}
            strokeWidth={`${this.props.strokeWidth}px`}
            strokeDasharray="471, 943"
            transform={`rotate(180 ${this.props.sqSize / 2} ${this.props
              .sqSize / 2})`}
            style={{
              strokeDashoffset: dashOffset / 2
            }}
          />
          <text
            style={{ fontSize: "3em", fontWeight: "bold", fill: "gray" }}
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
          >
            {`${this.props.percentage}%`}
          </text>
          <text
            style={{
              fontSize: "3em",
              fontWeight: "bold",
              fill: "gray"
            }}
            x="10%"
            y="60%"
          >
            {this.props.min}
          </text>
          <text
            style={{
              fontSize: "3em",
              fontWeight: "bold",
              fill: "gray"
            }}
            x="83%"
            y="60%"
          >
            {this.props.max}
          </text>
        </svg>
      </>
    );
  }
}

export default CircularProgressBar;
