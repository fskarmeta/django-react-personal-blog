import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../util/axios";
import acentuar from "../util/helper";
import { useParams } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  let { slug } = useParams();
  useEffect(() => {
    async function fetchData() {
      if (slug) {
        const request = await instance
          .post(`api/blog/category`, {
            category: `${slug.toUpperCase()}`,
          })
          .then((res) => setPosts(res.data))
          .catch((err) => console.error(err));
      } else {
        const request = await instance.get(`api/blog/`);
        console.log(request);
        setPosts(request.data);
        return request;
      }
    }
    fetchData();
    console.log(slug);
  }, [slug]);

  return (
    <main role="main" className="container">
      <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-3 mb-4 font-italic border-bottom">
            {slug ? acentuar(slug) : `Últimas publicaciones`}
          </h3>
          {posts.length === 0 ? (
            <p>Aún no hay posts en esta categoria...</p>
          ) : null}
          {!!posts &&
            posts.map((post, index) => {
              return (
                <div
                  className="row  d-flex align-items-center border-bottom"
                  key={index}
                >
                  <div className="col-md-12 d-flex flex-column">
                    <Link to={`/blog/${post.slug}`}>
                      <span className="home-blog-title">{post.title}</span>
                    </Link>
                    <span className="d-flex justify-content-between">
                      <span className="home-blog-extract">{post.excerpt}</span>
                      <span className="home-blog-category">
                        {acentuar(post.category)}
                        <span className="small font-italic">
                          {`  |  ${new Date(post.date_published).toLocaleString(
                            "es-CL",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}`}
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}

          {/* <nav className="blog-pagination">
            <Link className="btn btn-outline-primary" href="#">
              Older
            </Link>
            <Link className="btn btn-outline-secondary disabled" href="#">
              Newer
            </Link>
          </nav> */}
        </div>

        <aside className="col-md-4 mt-5 blog-sidebar">
          <div className="p-3 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">
              Hola, bienvenido a mi Blog, soy Fabián y este es un repositorio
              con mis escritos sobre diversos tópicos. Encontrarás información,
              experimentación, opinión y algo de humor.
            </p>
          </div>

          <div className="p-3">
            <h4 className="font-italic">Social</h4>
            <ol className="list-unstyled">
              <li>
                <a href="#" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Facebook
                </a>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Home;
