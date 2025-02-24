import PropTypes from 'prop-types';
import './project.css'


const Project = ({picturePath, title, description, ghLink, liveLink}) => {
    return (
        <div className="card mb-3 projectCard text-bg-dark p-1">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={picturePath} className="img-fluid rounded-start" alt="Project picture"/>
                </div>
                <div className="col-md-8 flex-column justify-content-center align-content-center">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className='buttonContainer'>
                            <a href={ghLink}><button type="button" className="btn btn-secondary">Github Link</button> </a>
                            {liveLink && <a href={liveLink}><button type="button" className="btn btn-secondary">Live Preview</button> </a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project

Project.propTypes = {
    picturePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ghLink: PropTypes.string.isRequired
};