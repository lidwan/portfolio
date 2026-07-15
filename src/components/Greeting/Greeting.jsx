import './greeting.css'

const focusAreas = [
    'Cloud infrastructure',
    'Linux systems',
    'Networking',
    'DevOps',
    'Self-hosting',
    'Automation',
    'CI/CD',
    'Security',
    'Open source',
];

const Greeting = () => {
    return (
        <section className="greetingContainer wholePageSection" aria-labelledby="greeting-title">
            <h1 id="greeting-title">Loay<br/>
                Idwan.</h1>
            <h2 className="greetingSubtitle">I&#39;m a CIS graduate from <a href="https://just.edu.jo/">JUST</a>, focused on cloud infrastructure, Linux systems, networking, and DevOps. Explore <a href="#projects">my projects</a> and <a href="https://lsblk.dev/">my tech blog</a>.
            </h2>

            <div className="greetingTicker">
                <span className="visually-hidden">Technical focus: {focusAreas.join(', ')}</span>
                <div className="greetingTickerTrack" aria-hidden="true">
                    {[0, 1].map((group) => (
                        <div className="greetingTickerGroup" key={group}>
                            {focusAreas.map((area) => (
                                <span className="greetingTickerItem" key={`${group}-${area}`}>
                                    <span className="greetingTickerDot" />
                                    {area}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Greeting;
