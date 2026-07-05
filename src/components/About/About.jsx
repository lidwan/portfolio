import './about.css'
import Reveal from '../Reveal/Reveal.jsx';

const About = () => {


    return (
        <section className="wholePageSection centerContainer aboutContainer">
            <div id="about">&nbsp;</div>
            <Reveal>
                <h1 className="AboutLI">About Loay Idwan</h1>
            </Reveal>
            <Reveal delay={120}>
                <h4 className="aboutText">
                    I&#39;m a cat-loving, Linux enthusiast and hobby photographer, <br/>
                    I recently took the AWS Solutions Architect - Associate (SAA), <br/>
                    and I&#39;m diving deep into systems management, cloud infrastructure, and AWS. <br/>
                    I also write about infrastructure, self-hosting, <br/> and practical tech projects on <a href="https://lsblk.dev/">my blog</a>.<br/>
                </h4>
            </Reveal>
        </section>
    )
}

export default About
