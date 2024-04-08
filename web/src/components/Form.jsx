import PropTypes from "prop-types";
import GetAvatar from "./GetAvatar";
import CardUrl from "./CardUrl";

function Form({
  onChangeProjectInfo,
  updateAvatar,
  onClickSave,
  onClickReset,
  cardUrl,
  projectInfo,
}) {
  const handleProjectInput = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    onChangeProjectInfo(value, id);
  };
  const handleSaveProject = (ev) => {
    ev.preventDefault();
    onClickSave();
  };
  const handleClickReset = (ev) => {
    ev.preventDefault();
    onClickReset();
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          value={projectInfo.name}
        />
        <input
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          value={projectInfo.slogan}
        />
        <div className="addForm__2col">
          <input
            onChange={handleProjectInput}
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            value={projectInfo.repo}
          />
          <input
            onChange={handleProjectInput}
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            value={projectInfo.demo}
          />
        </div>
        <input
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          value={projectInfo.technologies}
        />
        <textarea
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          value={projectInfo.desc}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          value={projectInfo.autor}
        />
        <input
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          value={projectInfo.job}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <GetAvatar
          updateAvatar={updateAvatar}
          text="Subir foto del proyecto"
          id="image"
        />
        <GetAvatar
          updateAvatar={updateAvatar}
          text="Subir foto de la autora"
          id="photo"
        />
        <button className="button--large" onClick={handleSaveProject}>
          Guardar proyecto
        </button>
        <button className="button--large reset" onClick={handleClickReset}>
          Reset
        </button>
      </fieldset>
      {cardUrl && <CardUrl cardUrl={cardUrl} />}
    </form>
  );
}

Form.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  onChangeProjectInfo: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
  cardUrl: PropTypes.string.isRequired,
};

export default Form;
