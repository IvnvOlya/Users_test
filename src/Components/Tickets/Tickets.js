import "./Tickets.css";
import UserList from "../UserList/UserList";

export default function Tickets() {

  return (
    <div className="Tickets">
      <div className="Tickets_block">
        <div className="Tickets_buy">Купили билеты</div>
        <div className="Tickets_count">932/ 1000</div>
      </div>
      <UserList/>
    </div>
  );
}
