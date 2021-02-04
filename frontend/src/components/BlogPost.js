import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../util/axios";

const BlogPost = () => {
  const [post, setPost] = useState({});

  let { slug } = useParams();
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(`api/blog/${slug}`);
      console.log(request);
      setPost(request.data);
      return request;
    }
    fetchData();
  }, [slug]);

  return (
    <>
      <h1>{post.title}</h1>
      <h5 className="font-italic">{post.excerpt}</h5>
      <p className="small">{`${new Date(post.date_published).toLocaleString(
        "es-CL",
        {
          month: "short",
          day: "numeric",
          year: "numeric",
        }
      )}`}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

export default BlogPost;
