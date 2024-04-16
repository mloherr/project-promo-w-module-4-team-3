import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import "../scss/components/ProjectsList.scss";
import { Link } from "react-router-dom";

function ProjectsList({ projectsApi }) {
	return (
		<>
			<Link className="button--link" to="/MainPage/">
				Crear proyecto
			</Link>
			<ul className="projectList__container">
				{projectsApi.map((project) => {
					return <ProjectCard key={project.idAuthor} projectApi={project} />;
				})}
			</ul>
		</>
	);
}

ProjectsList.propTypes = {
	projectsApi: PropTypes.object.isRequired,
};

export default ProjectsList;
