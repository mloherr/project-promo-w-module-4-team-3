import Header from "./Header";
import { Link } from "react-router-dom";
import "../scss/components/LandingPage.scss";
import choripopins from "../images/choripopins.jpg";

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />
      <main className="landingPage__main">
        <figure className="logoTeam">
          <img src={choripopins} alt="Logo del equipo" />
        </figure>
        <div className="container__buttons">
          <Link to="/MainPage/">
            <button className="landingPage__button">Crear Proyecto</button>
          </Link>
          <Link to="/MainPage/projects">
            <button className="landingPage__button">Proyectos</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
