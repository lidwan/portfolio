import PropTypes from 'prop-types';
import './project.css'


const Project = ({picturePath, title, description, ghLink, ghLabel = "Github Link", liveLink, status}) => {
    const hasPicture = Boolean(picturePath);
    const cardClassName = hasPicture ? "projectCard" : "projectCard projectCardNoMedia";

    return (
        <article className={cardClassName}>
            <div className="row g-0">
                {hasPicture && (
                    <div className="col-md-4 projectMediaColumn">
                        <div className="projectImageWrapper">
                            <img src={picturePath} className="img-fluid projectImage" alt={`${title} project preview`}/>
                        </div>
                    </div>
                )}
                <div className={hasPicture ? "col-md-8 projectContentColumn" : "col-12 projectContentColumn"}>
                    <div className="projectBody">
                        <h3 className="projectTitle">{title}</h3>
                        <div className="projectDescriptionWrapper"><p className="projectDescription">{description}</p></div>
                        <div className="projectActions">
                            {status && <span className="projectStatus">{status}</span>}
                            {ghLink && <a href={ghLink} className="projectButton">{ghLabel}</a>}
                            {liveLink && <a href={liveLink} className="projectButton">Visit Site</a>}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Project

Project.propTypes = {
    picturePath: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ghLink: PropTypes.string,
    ghLabel: PropTypes.string,
    liveLink: PropTypes.string,
    status: PropTypes.string,
};
