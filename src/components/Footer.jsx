import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container ">
        <footer className="d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-12 col-sm-4 mb-0 text-center text-sm-start text-body-secondary">
            © 2024 Prathmesh Kathe
          </p>

          <a
            href="/"
            className="col-12 col-sm-4 d-flex align-items-center justify-content-center my-3 my-sm-0 link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-sm-4 justify-content-center justify-content-sm-end">
            <li className="nav-item">
              <NavLink to="/" className="nav-link px-2 text-body-secondary">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="https://prathmesh-kathe.github.io/PortFolio/"
                className="nav-link px-2 text-body-secondary"
              >
                PortFolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="https://www.linkedin.com/in/prathmesh-kathe-5b76ab217/"
                className="nav-link px-2 text-body-secondary"
              >
                LinkedIn
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="https://github.com/Prathmesh-Kathe"
                className="nav-link px-2 text-body-secondary"
              >
                GitHub
              </NavLink>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
