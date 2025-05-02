import '../styles/Dashboard.css';

const Dashboard = () => (
    <div>
      <h2>UNCC Latest News</h2>
      <p>
      The 2025 AI Summit for Smarter Learning, scheduled for May 14 at The Dubois Center at UNC Charlotte Center City, offers faculty and academic staff an opportunity to explore the integration of artificial intelligence (AI) into teaching and learning. Now in its third year, the summit emphasizes human-AI partnerships, aiming to enhance student learning experiences through innovative AI applications. Organized by UNC Charlotte’s Center for Teaching and Learning, the event features keynote and plenary sessions, lightning talks, panel discussions, workshops, and hands-on labs. Topics include AI literacy, disciplinary use cases, research, and ethics, with contributions from campus leaders, industry experts from companies like Microsoft and Apple, and members of the AI faculty task force. The summit reflects UNC Charlotte's commitment to ethical and responsible AI use in academia, research, and administration, supported by initiatives like the AI Research Council and the Charlotte AI Institute. Faculty engagement has notably increased, with proposal submissions doubling compared to the previous year, indicating a growing interest in AI's role in education. The summit serves as a platform for educators to share knowledge, develop interdisciplinary partnerships, and prepare students for an AI-integrated future.
      </p>
      <p>Source: <a href="https://inside.charlotte.edu/2025/04/02/2025-ai-summit-for-smarter-learning-offers-new-perspectives-and-expanded-learning-opportunities-for-faculty-and-staff/" target="_blank" rel="noopener noreferrer">2025 AI Summit for Smarter Learning</a></p>
      <p><strong>Tech Stack & Infrastructure:</strong> This project uses a MERN-style stack: MongoDB, Python/FastAPI backend, React SPA frontend, JWT authentication, and is hosted with NGINX as a reverse proxy. Data is fetched from FastAPI endpoints protected by JWT, with CORS enabled.</p>
    </div>
  );
  
  export default Dashboard;