import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../scss/components/Detail.scss';

const Detail = () => {
  const URL = 'https://project-promo-w-module-4-team-3.vercel.app';
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);
  const { idProject } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`${URL}/api/detail/${idProject}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data.project);
        setLoading(false);
      });
  }, []);

  return (
    <div className="main">
      <a
        className="landingPage__button"
        href="https://project-promo-w-module-4-team-3.vercel.app/#/MainPage/"
        title="Crear proyecto"
      >
        NUEVO PROYECTO
      </a>
      <a
        className="landingPage__button"
        href="https://project-promo-w-module-4-team-3.vercel.app/#/MainPage/projects"
        title="Crear proyecto"
      >
        VER PROYECTOS
      </a>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="preview">
          <div
            className="projectImage"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Proyectos Molones
              </span>
            </h2>

            <div className="card__author">
              <div
                className="card__author--photo"
                style={{ backgroundImage: `url(${project.photo})` }}
              ></div>
              <p className="card__author--job">{project.job}</p>
              <h3 className="card__author--name">{project.author}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__project--name">{project.name}</h3>
              <p className="card__project--slogan">{project.slogan}</p>
              <h3 className="card__project--descriptionTitle">
                Product description
              </h3>
              <p className="card__project--description">{project.descr}</p>

              <div className="card__project--technicalInfo">
                <p className="card__project--technologies">
                  {project.technologies}
                </p>

                <a
                  className="icon icon__www"
                  href={project.urlDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="icon icon__github"
                  href={project.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>
      )}
    </div>
  );
};

export default Detail;
