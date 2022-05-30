import "./UserData.css";
import UserPosts from "../UserPosts/UserPosts";

import { useSelector } from "react-redux";

export default function UserData(props) {
  const users = useSelector((state) => state.users.users);
  const id = props.id;

  //переиндексируем
  const usersObj = users.reduce((accum, item) => {
    accum[item["id"]] = item;
    return accum;
  }, {});

  return (
    <div className="UserData">
      <div className="UserData_details">
        <table>
          <thead>
            <tr>
              <th colspan="5" className="UserData_heading">{usersObj[id]["name"]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="UserData_more city">
                {usersObj[id].address["city"]}
              </td>
              <td className="UserData_more mail">{usersObj[id]["email"]}</td>
              <td className="UserData_more phone">{usersObj[id]["phone"]}</td>
              <td className="UserData_more website">
                {usersObj[id]["website"]}
              </td>
              <td className="UserData_more name">
                {usersObj[id].company["name"]}, {usersObj[id].company["bs"]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <UserPosts id={id} />
    </div>
  );
}
