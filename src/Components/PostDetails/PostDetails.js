import "./PostDetails.css";
import { useParams } from "react-router-dom";
import PageNav from "../PageNav/PageNav";
import FormComment from "../FormComment/FormComment";
import { useEffect, useState } from "react";

export default function PostDetails(props) {
  const { postId } = useParams();
  const { userId } = useParams();

  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  //переиндексируем
  const postsObj = post?.reduce((accum, item) => {
    accum[item["id"]] = item;
    return accum;
  }, {});

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <div className="PostDetails">
      <PageNav />
      <div className="PostDetails_post">
        <h2 className="PostDetails_heading">Пост</h2>
        <div className="PostDetails_post_text">
          <div className="PostDetails_post_title">
            Тема: {postsObj?.[userId]["title"]}
          </div>
          <div className="PostDetails_post_body">
            Текст: {postsObj?.[userId]["body"]}
          </div>
        </div>
      </div>
      <div className="PostDetails_comment">
        <h2 className="PostDetails_heading">Комментарии</h2>
        {comments?.map((item) => (
          <div className="PostDetails_block">
            <div className="PostDetails_description">
              Имя пользователя: {item.name}
            </div>
            <div className="PostDetails_description">Email: {item.email}</div>
            <div className="PostDetails_comments"> Комментарий: {item.body}</div>
          </div>
        ))}
      </div>
      <button
        onClick={clickHandler}
        type="submit"
        className="btn btn-primary PostDetails_btn"
      >
        Добавить комментарий
      </button>
      {active && <FormComment id={userId} />}
    </div>
  );
}
