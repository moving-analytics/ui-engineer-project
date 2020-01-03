import React, { useState, useEffect } from 'react';
import DataBar from './DataBar';
import '../App.css';

const dummyData = [
	{ type: 'Anxiety', min: 0, max: 16, value: 5 },
	{ type: 'Depression', min: 0, max: 186, value: 99 },
	{ type: 'Lipids', min: 0, max: 104, value: 68 },
	{ type: 'Satisfaction', min: 0, max: 113, value: 26 },
	{ type: 'RYP', min: 0, max: 191, value: 148 },
	{ type: 'Exercise', min: 0, max: 24, value: 7 }];

const App = () => {
	
	const [healthData, setHealthData] = useState(dummyData);

	// useEffect(() => {
	// 	fetch('https://sandbox.movinganalytics.com/test/indicators')
	// 		.then((response) => {
	// 			console.log(response);
	// 			return response.json();
	// 		})
	// 		.then((myJson) => {
	// 			console.log(myJson);
				
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 			setHealthData([
	// 				dummyData
	// 			]);
	// 		});
	// }, []);
	
	return (
		<div className="container">
			<div className="row">
				{healthData.map((data, index) => {
					return (
						<DataBar key={index} data={data} />
					);
				})}
			</div>  
		</div>
 	);
};

export default App;
