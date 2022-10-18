import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios';

function Home() {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios
      .get("https://backend-skillup.herokuapp.com")
      .then((response) => {
       setPost(response.data.data)
      });
  })

  return (
    <div>
      <h2>Home Page</h2>
      <div key={post._id}>
        {post.map((post) => (
            <div>
          <h2>{post.title}</h2>
          <h2>{post.userId}</h2>
              <h2>{post.body}</h2>
              </div>
            
        ))}
      </div>
    </div>
  );
}

export default Home;
