import { Outlet,Link } from "react-router-dom";

function Dashboard(){
  return (
    <div>
    <ul>   
      <li>
        <Link to="Profile">Profile</Link>
        </li>
      <li>
        <Link to="Settings">Settings</Link>
        </li>
    </ul>
  <Outlet/>
</div>
  );
}
export default Dashboard;