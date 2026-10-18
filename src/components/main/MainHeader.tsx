import "./MainHeader.css";
import LOGO from "/transitus.png";

function MainHeader() {
  const relativeRoute = window.location.pathname;

  const MENU = [
    {
      label: "Sendero",
      link: "/",
    },
    {
      label: "Bitacora",
      link: "/bitacora",
    },
    {
      label: "Momento de prueba",
      link: "/momento-de-prueba",
    },
    {
      label: "Códice",
      link: "/codice",
    },
  ];

  return (
    <header className="main_header">
      <div className="main_header__container">
        <div className="main_header__logo">
          <img src={LOGO} alt="Transitus logo" />
          <span>TRANSITUS</span>
        </div>

        <nav className="main_header__nav">
          {MENU.map((el) => (
            <a
              key={el.label}
              className={el.link === relativeRoute ? "active" : ""}
              href={el.link}
            >
              {el.label}
            </a>
          ))}
        </nav>

        <div className="main_header__user_card">
          <div>
            <span>Nómada consciente</span>
            <span>Racha: 18 días</span>
          </div>
          <img src={LOGO} alt="avatar usuario" />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
