import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import "../scss/components/ProjectsList.scss";

function ProjectsList({ projectsApi }) {
  return (
    <ul className="projectList__container">
      {projectsApi.map((project) => {
        return <ProjectCard key={project.idAuthor} projectApi={project} />;
      })}
    </ul>
  );
}

ProjectsList.propTypes = {
  projectsApi: PropTypes.object.isRequired,
};

export default ProjectsList;
