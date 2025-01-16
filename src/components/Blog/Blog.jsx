import React, { useEffect, useState } from "react";
import "./blog.css";

import { Heading } from "components/Heading/Heading";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
        query {
          publication(host: "technudge.hashnode.dev"){
            title,
            posts(first:3){
              edges{
                node{
                  title,
                  url,
                  brief,
                  coverImage{
                    url
                  }
                }
              }
            }
          }
        }
      `;
      const response = await fetch("https://gql.hashnode.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      setPosts(data.data.publication.posts.edges.map(edge => edge.node));
    };
    fetchPosts();
  }, []);

  return (
      <section
      data-aos="fade-right"
      name="blog"
      id="blog"
    >
      <Heading text="My Blog" />
      <div className="blog-container">
        <div className="blog-cards">
          {posts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.coverImage.url} alt={post.title} />
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p>{post.brief}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        <p>
          Want to know more? Check out <a href="https://technudge.in" target="_blank" rel="noopener noreferrer">https://technudge.in</a>
        </p>
      </div>
      </section>
  );
};

export default Blog;
