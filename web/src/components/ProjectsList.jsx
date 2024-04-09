import ProjectCard from "./ProjectCard";

function ProjectsList({ projectsApi }) {
  return (
    <ul>
      {projectsApi.map((project) => {
        return <ProjectCard key={project.idAuthor} projectApi={project} />;
      })}
    </ul>
  );
}

export default ProjectsList;
