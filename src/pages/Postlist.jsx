import { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";

export default function Postlist() {
  // Variabile di stato per contenere la risposta dell'API
  const [post, setPost] = useState([]);

  // Funzione che svolge la chiamata AJAX tramite la libreria Axios
  // Stampa Elenco Posts (GET)
  function showsPosts() {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }

  function removePost(i) {
    const updatePosts = post.filter((post) => {
      return post.id !== i;
    });

    axios
      .delete(`http://localhost:3000/posts/${i}`)
      .then((res) => {
        setPost(updatePosts);
      })
      .catch((err) => console.log(err));
  }

  // Render the list of posts requested by the API when the page is loaded
  useEffect(showsPosts, []);

  return (
    <div>
      <Post postList={post} onClick={removePost} />
    </div>
  );
}
