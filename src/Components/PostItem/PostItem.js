import "./PostItem.css";
import { Link } from "react-router-dom";

export default function PostItem(props) {
  
  return (
    <div className="PostItem">
      <h1 className="PostItem_heading">Посты пользователя</h1>
      <div className="Post">
        {props.post?.map((item) => (
          <div className="Post_details" key={item.id}>
            <div>
              <h2 className="Post_heading">{item.title}</h2>
              <div className="Post_body">{item.body}</div>
            </div>
            <Link to={`/user/${item.userId}/posts/post/${item.id}`}
              className="Post_link">Подробнее</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
