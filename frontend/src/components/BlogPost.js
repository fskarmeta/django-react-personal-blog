import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../util/axios";
import { useLocation } from "react-router-dom";
import HelmetMetaData from "../util/Helmet";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { checkPropTypes } from "prop-types";

const BlogPost = () => {
  const [post, setPost] = useState({});

  let location = useLocation();
  let currentUrl = "https://bafianblog.herokuapp.com" + location.pathname;

  let { slug } = useParams();
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(`api/blog/${slug}`);
      console.log(request);
      setPost(request.data);
      return request;
    }
    fetchData();
    console.log(currentUrl);
  }, [slug]);

  return (
    <>
      <HelmetMetaData
        title={post.title}
        description={post.excerpt}
        hashtag={`#bafian #fabianskarmeta #${post.category}`}
      ></HelmetMetaData>
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
      <div>
        <FacebookShareButton
          url={currentUrl}
          quote={`${post.title} | ${post.excerpt}`}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url={currentUrl}
          title={post.title}
          // via={currentUrl}
          hashtags={[`${post.category}`]}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url={currentUrl} title={post.title}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        {/* <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter ml-2"></i> */}
      </div>
      <div
        className="mb-5"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  );
};

export default BlogPost;
