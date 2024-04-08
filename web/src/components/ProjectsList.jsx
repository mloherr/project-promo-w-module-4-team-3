import ProjectCard from "./ProjectCard";

function ProjectsList({ projectInfo }) {
  return (
    <ul>
      <ProjectCard projectInfo={projectInfo} />
    </ul>
  );
}

export default ProjectsList;
