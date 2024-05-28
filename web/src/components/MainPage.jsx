import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import NewProject from './NewProject';
import ProjectsList from './ProjectsList';
import Detail from './Detail';
import { Routes, Route } from 'react-router-dom';

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
          <Route path="/detail/:idProject" element={<Detail />} />
        </Routes>
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
