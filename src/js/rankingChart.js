import React from 'react';
import '../css/rankingChart.css';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const data = {
  labels:['서울대','재빈대','고려대','평재대','인규대','재빈대'],
  datasets: [
    {
    type:'bar',
    borderColor:'yellow',
    borderWidth:1,
    data:[3,2,1,1.7,0.2,3.7],
    }]
}
const RankingChart = () => {
  return (
    <div>
      <Chart type="bar" data={data}/>
    </div>
  )
}

export default RankingChart;
