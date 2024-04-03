import Header from './Header';
import { Link } from 'react-router-dom';
import '../scss/components/LandingPage.scss';
import choripopins from '../images/choripopins.jpg';

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />
      <main className="landingPage__main">
        <figure className="logoTeam">
          <img src={choripopins} alt="Logo del equipo" />
        </figure>
        <Link to="/NewProject">
          <button className="landingPage__button">Crear Proyecto</button>
        </Link>
      </main>
    </div>
  );
}

export default LandingPage;
