import './greeting.css'

const Greeting = () => {
    return (
        <div className="greetingContainer wholePageSection">
            <h1>Hello,<br/>
                world.</h1>
            <h3 className="greetingSubtitle">My name is Loay Idwan, I&#39;m a CIS graduate <br/>
                from <a href="https://just.edu.jo/" >JUST</a>, 
                focused on cloud infrastructure<br/>
                 Linux systems, networking, and DevOps<br/>
                 check out <a href="#projects"> my projects</a>, and <a href="https://lsblk.dev/">my tech blog</a>
            </h3>
        </div>
    );
}

export default Greeting;
