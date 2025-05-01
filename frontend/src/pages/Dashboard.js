const Dashboard = () => (
    <div>
      <h2>UNCC News Summary</h2>
      <p>
        The University of North Carolina at Charlotte (UNCC) continues to be a hub of innovation, education, and diversity in April 2024. Recent events include the expansion of its AI research lab, student entrepreneurship showcases, and faculty accolades in academic publications. Notably, UNCC hosted the "Future of AI Symposium" drawing tech leaders and researchers to share innovations in machine learning, natural language processing, and ethical AI. Sustainability efforts also ramped up with a new solar panel initiative led by engineering students. These developments illustrate UNCC’s commitment to community engagement, academic excellence, and cutting-edge research.
      </p>
      <p>Source: <a href="https://inside.uncc.edu/news-features" target="_blank" rel="noopener noreferrer">UNCC News Portal</a></p>
      <p><strong>Tech Stack & Infrastructure:</strong> This project uses a MERN-style stack: MongoDB, Python/FastAPI backend, React SPA frontend, JWT authentication, and is hosted with NGINX as a reverse proxy. Data is fetched from FastAPI endpoints protected by JWT, with CORS enabled.</p>
    </div>
  );
  
  export default Dashboard;