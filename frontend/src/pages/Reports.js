import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = ({ token }) => {
  const [data, setData] = useState({ labels: [], values: [] });

  useEffect(() => {
    axios.get('/api/reports_chart', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setData(res.data));
  }, [token]);

  return (
    <div>
      <h2>Reports Chart</h2>
      <ul>
        {data.labels.map((label, i) => (
          <li key={label}>{label}: {data.values[i]}</li>
        ))}
      </ul>
      <p>This chart displays engagement across UNCC’s academic disciplines based on April 2024 coverage. It indicates relative emphasis in engineering, arts, and business outreach. Source: UNCC Reports.</p>
    </div>
  );
};

export default Reports;