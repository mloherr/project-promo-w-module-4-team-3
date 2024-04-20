import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../scss/App.scss";

import LandingPage from "./LandingPage";
import MainPage from "./MainPage";
import localStorage from "../services/localStorage";
import projectApi from "../services/projectsApi";

const App = () => {
  const infoDefault = {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image:
      "https://i.blogs.es/25fd38/disney-mary-poppins-critica-1964/450_1000.jpg",
    photo:
      "https://img.rtve.es/imagenes/mary-poppins-dificultades-su-rodaje/1641918077286.jpg",
  };
  const [projectInfo, setProjectInfo] = useState(
    localStorage.get("project") || infoDefault
  );
  const [url, setUrl] = useState("");
  const [projectsApi, setProjectsApi] = useState([]);

  useEffect(() => {
    projectApi.getProjectsFromApi().then((response) => {
      setProjectsApi(response.projects);
    });
  }, []);

  useEffect(() => {
    localStorage.set("project", projectInfo);
  }, [projectInfo]);

  const handleCreateProject = () => {
    projectApi
      .postNewProject(projectInfo)
      .then((response) => response.json())
      .then((result) => {
        setUrl(result.cardURL);
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  const handleProjectInfo = (value, id) => {
    setProjectInfo({ ...projectInfo, [id]: value });
  };
  const handleReset = () => {
    setProjectInfo(infoDefault);
    setUrl("");
    localStorage.clear();
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/MainPage//*"
          element={
            <MainPage
              projectInfo={projectInfo}
              cardUrl={url}
              onChangeProjectInfo={handleProjectInfo}
              updateAvatar={handleProjectInfo}
              onClickSave={handleCreateProject}
              onClickReset={handleReset}
              projectsApi={projectsApi}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
