import { Link } from "react-router-dom";

const PostWidgets = ({ post, index, acentuar }) => {
  return (
    <div className="row  d-flex align-items-center border-bottom" key={index}>
      <div className="col-md-12 d-flex flex-column">
        <Link to={`/blog/${post.slug}`}>
          <span className="home-blog-title">{post.title}</span>
        </Link>
        <span className="d-flex justify-content-between">
          <span className="home-blog-extract">{post.excerpt}</span>
          <span className="home-blog-category">
            {acentuar(post.category)}
            <span className="small font-italic">
              {`  |  ${new Date(post.date_published).toLocaleString("es-CL", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}`}
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default PostWidgets;
