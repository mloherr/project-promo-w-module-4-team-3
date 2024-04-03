import PropTypes from 'prop-types';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';

function NewProject({
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
        <Form
          onChangeProjectInfo={onChangeProjectInfo}
          projectInfo={projectInfo}
          updateAvatar={updateAvatar}
          onClickSave={onClickSave}
          onClickReset={onClickReset}
          cardUrl={cardUrl}
        />
      </main>
      <Footer />
    </>
  );
}

NewProject.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  onChangeProjectInfo: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
  cardUrl: PropTypes.string.isRequired,
};

export default NewProject;
