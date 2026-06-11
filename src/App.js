
import './App.css';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Yachana Singh</h2>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        </div>
        </nav>
        { /* Hero Section */}
      <section className="hero">
        <h1>Yachana Singh</h1>
        <h2>Full Stack Developer</h2>
        <p>React | Node.js | Express | MongoDB | PHP | Shopify</p>
        <a href="https://github.com/yachna2507" className="resume-btn" target="_blank" rel="noreferrer">View GitHub</a>
      </section>
      { /*About */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          Full Stack Developer with experience in PHP, Shopify, MERN Stack and Dashboard Development.
        </p>
      </section>
      { /* skills */}
      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>MySql</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>JWT Authentication</li>
        <li>Shopify</li>
        <li>Git and GitHub</li>
        </ul>
      </section>
      {/* Experience */ }
      <section id="experience" className="section">
        <h2>Experience</h2>
        <h3>PHP Trainer - HCL Institute</h3>
        <p>Trained students in PHP and MySql.</p>
        <h3>PHP Developer - ATS Grid Pvt Ltd</h3>
        <p>Worked on Joomla framework and PHP applications.</p>
        <h3>Shopify Operations - Clouds Media Pvt Ltd</h3>
        <p>Managed Shopify orders, collections and operations</p>
      </section>
      {/* Projects */}
<section className="section">
  <h2>Projects</h2>
  <div className="card">
    <h3>MERN Ecommerce Dashboard</h3>
    <p>JWT Authentication, CRUD Operations, MongoDB Atlas.</p>
    <a href="https://mern-ecommerce-dashboard-tau.vercel.app" target="_blank" rel="noreferrer">
    Live Demo</a>
    

  </div>
  <div className="card">
    <h3>Shopify Admin Dashboard</h3>
    <p>Shopify Product Management Dashboard.</p>
    <a href="https://shopify-admin-dashboard-client.vercel.app" target="_blank" rel="noreferrer">
    Live Demo</a>
  </div>
  <div className="card">
    <h3>PHP CRUD Admin Panel</h3>
    <p>Products, Orders, Revenue, Dashboard.</p>
    <a href="http://yachnacrud.great-site.net/php_crud_project/login1.php" target="_blank" rel="noreferrer">
    Live Demo
    </a>
    </div>
</section>
{ /* Contact */}
<section id="contact" className="section">
  <h2>Contact</h2>
  <p>GitHub: github.com/yachna2507</p>
  <p>Location: Gurugram, Haryana</p>
  <p>Portfolio Projects:</p>
  <ul>
    <li>MERN Ecommerce Dashboard</li>
    <li>Shopify Dashboard</li>
    <li>PHP CRUD Admin Panel</li>
  </ul>
</section>
</div>
  );
}

export default App;
