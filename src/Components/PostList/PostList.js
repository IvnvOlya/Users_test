import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostItem from "../PostItem/PostItem";
import PageNav from '../PageNav/PageNav'

export default function PostList() {
  const [post, setPost] = useState();
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <PageNav />
      <PostItem post={post} />
    </>
  );
}
