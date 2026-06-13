import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Contact() {
    return (
        <section id="contact">

            <h2>Get In Touch</h2>
            <p>I'm currently open to remote full-stack roles and freelance projects. Let's connect!</p>
            <div className="contact-links">
            <a href="mailto: singh.yachna2507@gmail.com" className="contact-btn">
                <FaEnvelope /> Email Me
</a>
<a href="https://linkedin.com/in/yachana-singh-09b530416" target="_blank" rel="noreferrer" className="contact-btn">
<FaLinkedin /> LinkedIn</a>
            
            <a href="https://github.com/yachna2507"
               target="_blank"
               rel="noreferrer"
               className="contact-btn"
               >
                <FaGithub />
                GitHub
               </a>
               </div>
               <p className="location">Based in Gurugram, India | Open to Remote Work</p>
            
    
        </section>
    );
}
export default Contact;
