import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <button className="text-muted" href="#">
              Suscribete
            </button>
          </div>
          <div className="col-4 text-center">
            <Link className="blog-header-logo text-dark" to="/">
              Blog del Báfian
            </Link>
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-3"
              >
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </a>
            {/* <Link className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </Link> */}
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link className="p-2 text-muted" to="/">
            Home
          </Link>
          <Link className="p-2 text-muted" to="/categoria/programacion">
            Programación
          </Link>
          <Link className="p-2 text-muted" to="/categoria/musica">
            Música
          </Link>
          <Link className="p-2 text-muted" to="/categoria/cronicas">
            Crónicas
          </Link>
          <Link className="p-2 text-muted" to="/categoria/articulos">
            Artículos
          </Link>
          <Link className="p-2 text-muted" to="/categoria/literatura">
            Literatura
          </Link>
          <Link className="p-2 text-muted" to="/categoria/opinion">
            Opinion
          </Link>
          <Link className="p-2 text-muted" to="/categoria/politica">
            Politica
          </Link>
          <Link className="p-2 text-muted" to="/categoria/otros">
            Miscelaneo
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
