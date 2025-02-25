import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Singlepost() {
  const { id } = useParams();

  const [post, setPost] = useState({});

  function showsPosts() {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => showsPosts(), [id]);

  return (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.tags}</p>
    </div>
  );
}
