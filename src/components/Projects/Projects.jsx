import projects from "../../data/projects.js";
import Project from "../Project/Project.jsx";
import './projects.css'

const Projects = () => {

    return (
        <div className=" centerContainer">
            <div id="projects">&nbsp;</div>
            <h1 className="projectsH1">Projects</h1>
            {projects.map((project => (
                <Project key={project.title}
                         picturePath={project.picturePath}
                         title={project.title}
                         description={project.description}
                         ghLink={project.ghLink}
                />
            )))}
        </div>
    )
}

export default Projects