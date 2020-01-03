import React, { useEffect, createRef } from 'react';
import '../App.css';

const green = '#44f6b2', red = '#e74f29', yellow = '#f2b02b';

const DataBar = ({ data }) => {
	
	const progressBarRef = createRef();

	useEffect(() => {
		const totalDegrees = 180, radius = 40;
		const { min, max, value } = data;
		const percentage = Math.round(((value - min) / (max - min)) * 100);
		
		// calculate degrees from percentage
		const degrees = totalDegrees / 100 * percentage;

		const strokeColor = getStrokeColor(percentage);

		const rotation = 0 - ((totalDegrees - degrees) / 2);

		const progressDash = degrees * Math.PI / 180 * 0.5 * radius;
		const progressGap = ((360 - degrees) * Math.PI / 180 * 0.5 * radius) * 2;

		progressBarRef.current.setAttribute('style',
		 `	stroke-dasharray: ${progressDash} ${progressGap}; 
			transform: rotate(${rotation}deg);
			stroke: ${strokeColor};`
		);

	}, []);

	const getStrokeColor = (percentage) => {
		if (percentage <= 30) {
			return green;
		}
		else if (percentage > 30 && percentage <= 70) {
			return yellow;
		}
		else {
			return red;
		}
	};

	return (
		<div className="col-sm">
			<h5 className="text-center">{data.type}</h5>
			<div className="stat">
				<svg viewBox="0 0 100 100">									
					<path className="bar" d="
						M 10, 50
						a 40,40 0 1,0 80,0
						a 40,40 0 1,0 -80,0
					"/>
					<path ref={progressBarRef} className="progress" d="
						M 10, 50
						a 40,40 0 1,0 80,0
						a 40,40 0 1,0 -80,0
					"/>
				</svg>
				<div className="row">
					<div className="col-sm minmax">{data.min}</div>
					<div className="col-sm value">{data.value}</div>
					<div className="col-sm minmax">{data.max}</div>
				</div>
			</div>
		</div>
	);
}

export default DataBar;