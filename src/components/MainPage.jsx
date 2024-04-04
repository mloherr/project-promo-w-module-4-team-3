import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import NewProject from './NewProject';
import ProjectsList from './ProjectsList';
import Preview from './Preview';

function MainPage({
  projectInfo,
  cardUrl,
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
          <p className="hero__text">Dale un toque de magia a tus proyectos con Mery Poppins</p>
          <a className="button--link" href="./">
            Ver proyectos
          </a>
        </section>
        <Preview projectInfo={projectInfo} cardUrl={cardUrl} />
        {/* <ProjectsList projectInfo={projectInfo} /> */}
        {/* <NewProject
          projectInfo={projectInfo}
          cardUrl={cardUrl}
          onChangeProjectInfo={onChangeProjectInfo}
          updateAvatar={updateAvatar}
          onClickSave={onClickSave}
          onClickReset={onClickReset}
        /> */}
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
  cardUrl: PropTypes.string.isRequired,
};

export default MainPage;
