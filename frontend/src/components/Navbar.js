// import { a } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="#">
              Suscribete
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#">
              Blog del Báfian
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mx-3"
              >
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </a>
            {/* <a className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </a> */}
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <a className="p-2 text-muted" href="#">
            Programación
          </a>
          <a className="p-2 text-muted" href="#">
            Música
          </a>
          <a className="p-2 text-muted" href="#">
            Crónicas
          </a>
          <a className="p-2 text-muted" href="#">
            Artículos
          </a>
          <a className="p-2 text-muted" href="#">
            Literatura
          </a>
          <a className="p-2 text-muted" href="#">
            Opinion
          </a>
          <a className="p-2 text-muted" href="#">
            Politics
          </a>
          <a className="p-2 text-muted" href="#">
            Miscelaneo
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
