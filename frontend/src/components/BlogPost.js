import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogPost = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `http://127.0.0.1:8000/api/blog/enano-volado`
      );
      console.log(request);
      setPost(request.data);
      return request;
    }
    fetchData();
  }, []);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

export default BlogPost;
