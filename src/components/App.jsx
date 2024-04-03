import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../scss/App.scss';

import LandingPage from './LandingPage';
import NewProject from './NewProject';
import localStorage from '../services/localStorage';

const App = () => {
  const infoDefault = {
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    image: 'https://i.blogs.es/25fd38/disney-mary-poppins-critica-1964/450_1000.jpg',
    photo: 'https://img.rtve.es/imagenes/mary-poppins-dificultades-su-rodaje/1641918077286.jpg',
  };
  const [projectInfo, setProjectInfo] = useState(localStorage.get('project') || infoDefault);
  const [url, setUrl] = useState('');

  const handleCreateProject = () => {
    fetch('https://dev.adalab.es/api/projectCard', {
      method: 'POST',
      body: JSON.stringify(projectInfo),
      headers: { 'Content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((result) => {
        setUrl(result.cardURL);
      })
      .catch((error) => console.log(error));
  };

  const handleProjectInfo = (value, id) => {
    setProjectInfo({ ...projectInfo, [id]: value });
    localStorage.set('project', projectInfo);
  };
  const handleReset = () => {
    setProjectInfo(infoDefault);
    setUrl('');
    localStorage.clear();
  };
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/NewProject"
          element={
            <NewProject
              projectInfo={projectInfo}
              cardUrl={url}
              onChangeProjectInfo={handleProjectInfo}
              updateAvatar={handleProjectInfo}
              onClickSave={handleCreateProject}
              onClickReset={handleReset}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
