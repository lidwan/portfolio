import './greeting.css'

const Greeting = () => {
    return (
        <div className="greetingContainer wholePageSection">
            <h1>Hello,<br/>
                world.</h1>
            <h3 className="greetingSubtitle">My name is Loay Idwan, I&#39;m a fourth year CIS student <br/>
                at <a href="https://just.edu.jo/" >JUST</a>, check out <a href="#projects">my projects</a>, and <a href="https://blog.loayidwan.com/">my tech blog</a></h3>
        </div>
    );
}

export default Greeting;
