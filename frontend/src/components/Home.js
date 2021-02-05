import React, { useEffect, useState } from "react";
import instance from "../util/axios";
import acentuar from "../util/helper";
import PostWidgets from "./PostWidget";
import AboutSocial from "./AboutSocial";
import HelmetMetaData from "../util/Helmet";
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
      <HelmetMetaData></HelmetMetaData>
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
                <PostWidgets post={post} index={index} acentuar={acentuar} />
              );
            })}
        </div>
        <AboutSocial />
      </div>
    </main>
  );
};

export default Home;
