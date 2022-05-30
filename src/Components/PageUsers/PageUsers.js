import "./PageUsers.css";
import PageNav from "../PageNav/PageNav";
import PageFooter from "../PageFooter/PageFooter";
import Tickets from "../Tickets/Tickets";

export default function PageUsers() {
  return (
    <div className="PageUsers">
      <div className="PageUsers_section">
        <PageNav />
        <div className="PageUsers_block"></div>
        <div className="PageUsers_text">
          <h1 className="PageUsers_heading">Twenty One Pilots</h1>
          <p className="PageUsers_description">22.02.23 в 21:00</p>
        </div>
        <PageFooter />
      </div>
      <Tickets />
    </div>
  );
}
