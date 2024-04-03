import PropTypes from "prop-types";
// import CardUrl from "./CardUrl";

function Preview({ projectInfo }) {
  const divStyle = { backgroundImage: `url(${projectInfo.photo})` };
  const divProjectStyle = {
    backgroundImage: `url(${projectInfo.image})`,
  };
  return (
    <section className="preview">
      <div className="projectImage" style={divProjectStyle}></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">Proyectos Molones</span>
        </h2>

        <div className="card__author">
          <div className="card__authorPhoto" style={divStyle}></div>
          <p className="card__job">{projectInfo.job || "Babysitter"}</p>
          <h3 className="card__name">{projectInfo.autor || "Mary Poppins"}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">
            {projectInfo.name || "Elegant Workspaces"}
          </h3>
          <p className="card__slogan">
            {projectInfo.slogan || "Exclusive designs"}
          </p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">
            {projectInfo.desc ||
              "¡Hey! Soy Mary Poppins, la niñera más top de todas. ¿Severa? Bueno, tal vez un poquito, pero siempre con el mayor cuidado. Me encanta sacar trucos de magia y mantenerme siempre bajo control mientras cuido a los hijos de los Banks. ¿Mi estilo? Siempre me verás con mi sombrero gigante y mi súper cool paraguas. En pocas palabras, soy una figura misteriosa y súper divertida que deja una huella mágica en todos los que me conocen."}
          </p>

          <div className="card__technicalInfo">
            <p className="card__technologies">
              {projectInfo.technologies || "SuperBolso - SuperParaguas"}
            </p>

            <a
              className="icon icon__www"
              href={projectInfo.demo}
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={projectInfo.repo}
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
Preview.propTypes = {
  cardUrl: PropTypes.string.isRequired,
  projectInfo: PropTypes.object.isRequired,
};

export default Preview;
