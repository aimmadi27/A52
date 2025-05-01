import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Summary = ({ token }) => {
  const [data, setData] = useState({ labels: [], values: [] });

  useEffect(() => {
    axios.get('/api/summary_chart', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setData(res.data));
  }, [token]);

  return (
    <div>
      <h2>Summary Chart</h2>
      <ul>
        {data.labels.map((label, i) => (
          <li key={label}>{label}: {data.values[i]}</li>
        ))}
      </ul>
      <p>This chart visualizes the topics dominating UNCC’s April 2024 news, highlighting the university’s focus areas in research, student life, and innovation. Source: UNCC News Feed.</p>
    </div>
  );
};

export default Summary;