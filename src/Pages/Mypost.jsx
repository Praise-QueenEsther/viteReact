// import React from "react";
// import { Form } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Mypost() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://backend-skillup.herokuapp.com/2") .then((response) => {
    setPost(response.data.data);
      
      });
  });

  return (
    <div>
      <h2>My post</h2>
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
export default Mypost;
