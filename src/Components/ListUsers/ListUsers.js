import PageNav from '../PageNav/PageNav';
import UserData from '../UserData/UserData';
import { useParams } from "react-router-dom";

export default function ListUsers() {

  const { userId } = useParams();

  return (
    <div>
      <PageNav />
      <UserData id={userId}/>
    </div>
  );
}
