import PropTypes from "prop-types";

function ProjectCard({ projectApi }) {
  const divStyle = { backgroundImage: `url(${projectApi.photo})` };

  return (
    <article className="card">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Proyectos Molones</span>
      </h2>

      <div className="card__author">
        <div className="card__authorPhoto" style={divStyle}></div>
        <p className="card__job">{projectApi.job || "Babysitter"}</p>
        <h3 className="card__name">{projectApi.author || "Mary Poppins"}</h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">
          {projectApi.name || "Elegant Workspaces"}
        </h3>
        <p className="card__slogan">
          {projectApi.slogan || "Exclusive designs"}
        </p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">
          {projectApi.descr ||
            "¡Hey! Soy Mary Poppins, la niñera más top de todas. ¿Severa? Bueno, tal vez un poquito, pero siempre con el mayor cuidado. Me encanta sacar trucos de magia y mantenerme siempre bajo control mientras cuido a los hijos de los Banks. ¿Mi estilo? Siempre me verás con mi sombrero gigante y mi súper cool paraguas. En pocas palabras, soy una figura misteriosa y súper divertida que deja una huella mágica en todos los que me conocen."}
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {projectApi.technologies || "SuperBolso - SuperParaguas"}
          </p>

          <a
            className="icon icon__www"
            href={projectApi.urlDemo}
            target="_blank"
            title="Haz click para ver el proyecto online"
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href={projectApi.urlGithub}
            target="_blank"
            title="Haz click para ver el código del proyecto"
          >
            GitHub link
          </a>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  projectApi: PropTypes.object.isRequired,
};

export default ProjectCard;
