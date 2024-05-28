const URL = 'https://project-promo-w-module-4-team-3.vercel.app';

const getProjectsFromApi = () => {
  return fetch(`${URL}/api/projects`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const postNewProject = (bodyParams) => {
  return fetch(`${URL}/api/newproject`, {
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
