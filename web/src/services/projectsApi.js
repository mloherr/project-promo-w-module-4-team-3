const getProjectsFromApi = () => {
  return fetch("//localhost:5000/api/projects")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default {
  getProjectsFromApi: getProjectsFromApi,
};
