import './greeting.css'

const Greeting = () => {
    return (
        <div className="greetingContainer wholePageSection">
            <h1>Hello,<br/>
                world.</h1>
            <h3>My name is Loay Idwan, I&#39;m a third year CIS student <br/>
                at <a href="https://just.edu.jo/" >JUST</a>, check out my projects and my tech blog!</h3>
        </div>
    );
}

export default Greeting;