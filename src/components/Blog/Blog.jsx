// import React from "react";

// // Styles
// import "./blog.css";

// // Card
// import { BlogCard } from "components/Blog/BlogCard/BlogCard";
// import { Heading } from "components/Heading/Heading";

// const Blog = ({ services }) => {
//   return (
//     <section
//       data-aos="fade-right"
//       className="services-container"
//       name="services"
//       id="services"
//     >
//       <Heading text="What I can do for you" />
//       <div className="services-cards">
//         {services &&
//           services?.map(({ title, icon, tags }, index) => (
//             <BlogCard
//               key={index}
//               image={icon.asset.url}
//               title={title}
//               tags={tags}
//             />
//           ))}
//       </div>
//     </section>
//   );
// };

// export default Blog;


import React, { useEffect, useState } from "react";
// import "./BlogPreview.css";

const BlogPreview = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
        query {
  publication(host: "technudge.hashnode.dev"){
    title,
    post(slug: "cexs-dexs-and-presales-a-map-to-the-wild-west"){
      title,
      content{
        markdown
      },
      coverImage{
        url
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
      console.log("posts>", data);
      setPosts([data.data.publication.post]);
    };
    fetchPosts();
  }, []);

  return (
    <div className="blog-preview-container">
      <h2>My Blog Posts</h2>
      <div className="blog-cards">
        {posts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.coverImage} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.brief}</p>
            <a href={`https://your-hashnode-blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
