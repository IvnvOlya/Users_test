import "./Posts.css";
export default function Posts(props) {

  const arr = props.post;

  return (
    <div className="Posts">
      {arr?.map((item) => 
        <div className="Posts_details" key={item.id}>
          <h2 className="Posts_heading">{item.title}</h2>
          <div className="Posts_body">{item.body}</div>
        </div> 
      )}
    </div> 
  );
}
