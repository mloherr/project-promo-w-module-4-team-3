import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import NewProject from "./NewProject";
import ProjectsList from "./ProjectsList";
import Preview from "./Preview";
import { Routes, Route, Link } from "react-router-dom";

function MainPage({
  projectInfo,
  cardUrl,
  projectsApi,
  onChangeProjectInfo,
  updateAvatar,
  onClickSave,
  onClickReset,
}) {
  return (
    <>
      <Header />
      <main className="main">
        <section className="hero">
          <h2 className="title">Choripopins Project</h2>
          <p className="hero__text">
            Dale un toque de magia a tus proyectos con Mery Poppins
          </p>
          <Link className="button--link" to="./projects">
            Ver proyectos
          </Link>
        </section>
        <Routes>
          <Route
            path="/"
            element={
              <NewProject
                projectInfo={projectInfo}
                cardUrl={cardUrl}
                onChangeProjectInfo={onChangeProjectInfo}
                updateAvatar={updateAvatar}
                onClickSave={onClickSave}
                onClickReset={onClickReset}
              />
            }
          />
          <Route
            path="/projects/"
            element={<ProjectsList projectsApi={projectsApi} />}
          />
        </Routes>
        {/* <Preview projectInfo={projectInfo} cardUrl={cardUrl} /> */}
      </main>
      <Footer />
    </>
  );
}

MainPage.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  onChangeProjectInfo: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
  projectsApi: PropTypes.object.isRequired,
  cardUrl: PropTypes.string.isRequired,
};

export default MainPage;
