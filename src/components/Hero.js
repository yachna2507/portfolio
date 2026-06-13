import resume from "../assets/Yachana_Singh_Resume.pdf";
function Hero() {
return  (
    <>
<div className="hero">
    <div>
        <h1>Yachana Singh</h1>
<h2>Full Stack Developer</h2>
<p> React | Node.js | Express | MongoDB | PHP | Shopify</p>

    <a href="https://github.com/yachna2507"
       target="_blank"
       rel="noreferrer"
       className="btn"
       >
        View GitHub
       </a>
       <a
       href={resume}
       download
       className="btn"
       >
        Download Resume
       </a>
      
</div>
</div>
</>
);
}
export default Hero;