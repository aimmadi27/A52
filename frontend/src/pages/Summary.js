import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import '../styles/Summary.css';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Summary = ({ token }) => {
  const [data, setData] = useState({ labels: [], values: [] });

  useEffect(() => {
    axios.get('/api/summary_chart', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setData(res.data));
  }, [token]);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  return (
    <div className='summary'>
      <h2>Summary Chart</h2>
      <div style={{ maxWidth: '400px' }} className='summary-chart'>
        <Pie data={chartData} aria-label="Summary Pie Chart" />
      </div>
      <p>This chart visualizes the topics dominating UNCC’s April 2024 news, highlighting the university’s focus areas in research, student life, and innovation. Source: UNCC News Feed.</p>
    </div>
  );
};

export default Summary;