import "./UserPosts.css";
import Posts from "../Posts/Posts";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserPosts(props) {
  const [post, setPost] = useState();
  const id = props.id;
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts?_limit=3`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="UserPosts">
      <h1 className="UserPosts_heading">Посты</h1>
      <Posts post={post} />
      <Link to={`/user/${id}/posts`} className="UserPosts_link">Смотреть все посты..</Link>
    </div>
  ); 
}
