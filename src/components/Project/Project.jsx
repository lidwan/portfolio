import PropTypes from 'prop-types';
import './project.css'


const Project = ({picturePath, title, description, ghLink, liveLink}) => {
    return (
        <article className="projectCard">
            <div className="row g-0">
                <div className="col-md-4 projectMediaColumn">
                    <div className="projectImageWrapper">
                        <img src={picturePath} className="img-fluid projectImage" alt="Project picture"/>
                    </div>
                </div>
                <div className="col-md-8 projectContentColumn">
                    <div className="projectBody">
                        <h5 className="projectTitle">{title}</h5>
                        <div className="projectDescriptionWrapper"><p className="projectDescription">{description}</p></div>
                        <div className="projectActions">
                            <a href={ghLink} className="projectButton">Github Link</a>
                            {liveLink && <a href={liveLink} className="projectButton">Live Preview</a>}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Project

Project.propTypes = {
    picturePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ghLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
};
