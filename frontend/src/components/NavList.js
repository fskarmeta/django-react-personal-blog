import { Link } from "react-router-dom";

const NavList = () => {
  return (
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
          Opinión
        </Link>
        <Link className="p-2 text-muted" to="/categoria/politica">
          Politíca
        </Link>
        <Link className="p-2 text-muted" to="/categoria/otros">
          Misceláneo
        </Link>
      </nav>
    </div>
  );
};

export default NavList;
