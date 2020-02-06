import React, { useRef, useEffect } from 'react';

const Guage = (props) => {
  const { 
    type,
    min,
    max,
    value
  } = props.data;
  const canvasRef = useRef()
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.scale(2,2);
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.width = "400px";
    canvas.style.height = "300px";
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 200;
    var startAngle = (Math.PI) 
    var endAngle = 0
    context.lineWidth = 16;
    context.lineCap = "round";
    context.strokeStyle = "green";
    var ctr = -180;
    var clr = setInterval(function () {
      context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
      context.beginPath();
      context.arc(x, y, radius, startAngle, (ctr / 180) * Math.PI, false);
      context.stroke();
      ctr++;
      if(ctr > -120 && ctr <= -60){
        context.strokeStyle = "yellow";
      } else if (ctr > -60) {
        context.strokeStyle = "red";
      }
      if (ctr == endAngle) clearInterval(clr)
    }, 10)
  })

  return (
    <div>
      <canvas className='canvas' ref={canvasRef}/>
      <div>{type}</div>
      <div>Min:{min}</div>
      <div>Value:{value}</div>
      <div>Max:{max}</div>
    </div>
  )
}


export default Guage;