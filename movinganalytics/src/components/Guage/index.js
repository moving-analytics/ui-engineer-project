import React, { useRef, useEffect } from 'react';

const Guage = ({ data }) => {
  const { 
    type,
    min,
    max,
    value
  } = data;

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const context2 = canvas.getContext('2d');
    context.scale(2,2);
    context2.scale(2,2);
    canvas.width = 848;
    canvas.height = 440;
    canvas.style.width = "414px";
    canvas.style.height = "220px";
    const x = canvas.width / 2;
    const y = canvas.height / 1.5;
    const radius = 220;
    const startAngle = (Math.PI);
    const endAngle = (Math.PI + (value/max)*Math.PI);

    context.lineWidth = 16;
    context.lineCap = "round";
    context.strokeStyle = "#DCE5F6";
    context.beginPath();
    context.arc(x, y, radius, startAngle, Math.PI*2, false);
    context.stroke();

    context2.lineWidth = 16;
    context2.lineCap = "round";
    context2.strokeStyle = "#43F6B2";
    let ctr = min;
    
    let clr = setInterval(function(){
      if(min == value || ctr == value) clearInterval(clr)
      context2.beginPath();
      context2.arc(x, y, radius, startAngle, Math.PI + (ctr/max) * Math.PI, false);
      context2.stroke();
      ctr++
      if(ctr > max*.3 && ctr <= max*.7){
        context2.strokeStyle = "#F2B12A";
      } else if (ctr > max*.7){
        context2.strokeStyle = "#E64F2A";
      }
    }, 10)
  });

  return (
    <div>
      <canvas className='canvas' ref={canvasRef}/>
      <div>{type}</div>
      <div>Min:{min}</div>
      <div>Value:{value}</div>
      <div>Max:{max}</div>
    </div>
  );
};


export default Guage;