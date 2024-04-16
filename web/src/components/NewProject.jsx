import PropTypes from "prop-types";
import Preview from "./Preview";
import Form from "./Form";
import { Link } from "react-router-dom";

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
			<Link className="button--link" to="./projects">
				Ver proyectos
			</Link>
			<Preview projectInfo={projectInfo} cardUrl={cardUrl} />
			<Form
				onChangeProjectInfo={onChangeProjectInfo}
				projectInfo={projectInfo}
				updateAvatar={updateAvatar}
				onClickSave={onClickSave}
				onClickReset={onClickReset}
				cardUrl={cardUrl}
			/>
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
