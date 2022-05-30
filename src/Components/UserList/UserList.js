import "./UserList.css";
import UserItem from "../UserItem/UserItem";
import { fetchUsers } from "../../redux/usersSlice";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function UserList() {
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {status === 'loading' && <h1>Загрузка..</h1>}
      {error && <h1>Ошибка: {error}</h1>}

      <UserItem />
    </div>
  );
}
