import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const BlogPost = () => {
  const [post, setPost] = useState({});

  let { slug } = useParams();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`http://127.0.0.1:8000/api/blog/${slug}`);
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
