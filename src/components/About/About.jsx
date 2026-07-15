import './about.css'
import Reveal from '../Reveal/Reveal.jsx';

const About = () => {


    return (
        <section className="wholePageSection centerContainer aboutContainer">
            <div id="about">&nbsp;</div>
            <Reveal>
                <h2 className="AboutLI">About Loay Idwan</h2>
            </Reveal>
            <Reveal delay={120}>
                <p className="aboutText">
                    I&#39;m a cat-loving Linux enthusiast and hobby photographer. I recently took the AWS Solutions Architect - Associate (SAA), and I&#39;m diving deep into systems management, cloud infrastructure, and AWS. I also write about infrastructure, self-hosting, and practical tech projects on <a href="https://lsblk.dev/">my blog</a>.
                </p>
            </Reveal>
        </section>
    )
}

export default About
