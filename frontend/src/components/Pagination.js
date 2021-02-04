import { Link } from "react-router-dom";
const Pagination = () => {
  return (
    <nav className="blog-pagination">
      <Link className="btn btn-outline-primary" href="#">
        Older
      </Link>
      <Link className="btn btn-outline-secondary disabled" href="#">
        Newer
      </Link>
    </nav>
  );
};

export default Pagination;
