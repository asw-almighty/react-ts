import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar/ChartBar';

const Chart = (props: any) => {
	const dataPointValues = props.dataPoints.map((dataPoint: any) => dataPoint.value);
	const maxValue = Math.max(...dataPointValues);

	console.log(props)

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint: any) => (
				<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxValue} label={dataPoint.label} />
			))}
		</div>
	);
};

export default Chart;
