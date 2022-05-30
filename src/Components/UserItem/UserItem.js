import "./UserItem.css";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

export default function UserItem() {
  const users = useSelector((state) => state.users.users);

  return ( 
    <div className="UserItem"> 
     {users.map((user)=>
        <div id={user.id} key={user.id}>
        <div className="User">
          <div className="UserItem_data">
            <h2 className="UserItem_name">{user.name}</h2>
            <h3 className="UserItem_city">{user.address.city}</h3>
          </div>
          <Link to={`/user/${user.id}`} className="UserItem_btn">
            Смотреть профиль
          </Link>
        </div>
      </div>
     )}
    </div>
  );
}
