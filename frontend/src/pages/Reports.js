import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import '../styles/Reports.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Reports = ({ token }) => {
  const [data, setData] = useState({ labels: [], values: [] });

  useEffect(() => {
    axios.get('/api/reports_chart', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setData(res.data));
  }, [token]);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Engagement by Discipline',
        data: data.values,
        backgroundColor: '#36A2EB',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'UNCC Academic Engagement (April 2024)' }
    }
  };

  return (
    <div className='reports'>
      <h2>Reports Chart</h2>
      <div style={{ maxWidth: '600px' }}>
        <Bar data={chartData} options={options} aria-label="Reports Bar Chart" />
      </div>
      <p>This chart displays engagement across UNCC’s academic disciplines based on April 2024 coverage. It indicates relative emphasis in engineering, arts, and business outreach. Source: UNCC Reports.</p>
    </div>
  );
};

export default Reports;
