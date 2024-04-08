import companyLogo from '../images/laptop-code-solid.svg';
import LogoSponsor from './LogoSponsor';

import '../scss/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
        <img className="header__companyLogo" src={companyLogo} alt="Logo proyectos molones" />
        <h1 className="header__title">Choripopins Project</h1>
      </a>
      <LogoSponsor />
    </header>
  );
};

export default Header;
