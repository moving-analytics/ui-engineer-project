import React, { useRef, useEffect } from 'react';

const Gauge = ({ data }) => {
  const ns = 'gauge';
  // destructures API data for easier reference
  const { 
    type,
    min,
    max,
    value
  } = data;

  // gives React access to canvas to draw arcs
  const canvasRef = useRef();

  useEffect(() => {
    // inital canvas parameters
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const context2 = canvas.getContext('2d');
    context.scale(2,2);
    context2.scale(2,2);
    canvas.width = 500;
    canvas.height = 440;
    canvas.style.width = "250px";
    canvas.style.height = "220px";
    const x = canvas.width / 2;
    const y = canvas.height / 1.5;
    const radius = 220;
    const startAngle = (Math.PI);

    // draws grey arc first
    context.lineWidth = 16;
    context.lineCap = "round";
    context.strokeStyle = "#DCE5F6";
    context.beginPath();
    context.arc(x, y, radius, startAngle, Math.PI*2, false);
    context.stroke();

    // sets up second arc
    context2.lineWidth = 16;
    context2.lineCap = "round";
    context2.strokeStyle = "#43F6B2";

    // control value for incrementing/animating arc
    let ctr = min;
    
    // creates animation of arc filling in, changing colors based on given breakpoint percentages. Increments control based on value so all arcs complete animation at same time
    let clr = setInterval(function(){
      if(min === value || Math.round(ctr) === value) clearInterval(clr)
      context2.beginPath();
      context2.arc(x, y, radius, startAngle, Math.PI + (ctr/max) * Math.PI, false);
      context2.stroke();
      ctr+=((value-min)/100)
      if(ctr > max*.3 && ctr <= max*.7){
        context2.strokeStyle = "#F2B12A";
      } else if (ctr > max*.7){
        context2.strokeStyle = "#E64F2A";
      }
    }, 15)
  });

  return (
    <div className={ns}>
      <canvas className={`${ns}__canvas`} ref={canvasRef}/>
      <div className={`${ns}__text`}>
        <h2 className={`${ns}__type`}>{type}</h2>
        <h1 className={`${ns}__value`}>{value}</h1>
        <div className={`${ns}__range`}>
          <h3 className={`${ns}__range--min`}>{min}</h3>
          <h3 className={`${ns}__range--max`}>{max}</h3>
        </div>
      </div>
    </div>
  );
};


export default Gauge;