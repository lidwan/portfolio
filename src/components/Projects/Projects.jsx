import projects from "../../data/projects.js";
import Project from "../Project/Project.jsx";
import Reveal from "../Reveal/Reveal.jsx";
import './projects.css'

const Projects = () => {

    return (
        <section className="centerContainer projectsContainer">
            <div id="projects">&nbsp;</div>
            <Reveal>
                <h2 className="projectsH1">Projects</h2>
            </Reveal>
            {projects.map((project, index) => (
                <Reveal
                    key={project.title}
                    className="projectReveal"
                    delay={index * 120}
                    threshold={0.12}
                    rootMargin="0px 0px -8% 0px"
                >
                    <Project
                        picturePath={project.picturePath}
                        title={project.title}
                        description={project.description}
                        ghLink={project.ghLink}
                        ghLabel={project.ghLabel}
                        liveLink={project.liveLink}
                    />
                </Reveal>
            ))}
        </section>
    )
}

export default Projects
