const getProjectsFromApi = () => {
  return fetch('//localhost:5001/api/projects')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const postNewProject = (bodyParams) => {
  return fetch('//localhost:5001/api/newproject', {
    method: 'POST',
    body: JSON.stringify(bodyParams),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default {
  getProjectsFromApi: getProjectsFromApi,
  postNewProject: postNewProject,
};
