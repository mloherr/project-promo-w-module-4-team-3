const URL = "https://choripopins-project.onrender.com";

const getProjectsFromApi = () => {
	return fetch(`${URL}/api/projects`)
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
};

const postNewProject = (bodyParams) => {
	return fetch(`${URL}/api/newproject`, {
		method: "POST",
		body: JSON.stringify(bodyParams),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export default {
	getProjectsFromApi: getProjectsFromApi,
	postNewProject: postNewProject,
};
