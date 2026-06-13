function Projects() {
    return (
        <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
            
            <div className="project-card">

                <h3>MERN Ecommerce Dashboard</h3>
        <p className="tech-stack">React | Node.js | MongoDB | Express</p>
        
        <div className="project-links">
         <a
                href="https://mern-ecommerce-dashboard-tau.vercel.app"
                target="_blank"
                rel="noreferrer"
                >Live Demo</a>
                    <a href="https://github.com/yachna2507/mern-ecommerce-dashboard" target="_blank">GitHub</a>
                    </div>
                    
                </div>
            <div className="project-card">
                <h3> Shopify Admin Dashboard</h3>
                    <div className="project-links">
                <a
                href="https://shopify-admin-dashboard-client.vercel.app"
                target="_blank"
                rel="noreferrer"
                >
                    Live Demo
                </a>
                      <a href="https://github.com/yachna2507/shopify-admin-dashboard" target="_blank">GitHub</a>
                    </div>
                    
                    
            </div>
            <div className="project-card">
                <h3>PHP CRUD Admin Panel</h3>
                    <div className="project-links">
                <a
                href="http://yachnacrud.great-site.net/php_crud_project/login.php"
                target="_blank"

                rel="noreferrer"
                >
                    Live Demo
                </a>
                      <a href="https://yachnacrud.great-site.net/php_crud_project" target="_blank">GitHub</a>
                    </div>
                    
            </div>
                    </div>
        </section>
    );
}
export default Projects;
