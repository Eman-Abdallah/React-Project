import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="sidebar p-2">
            <Link to="/dashboard/users" className="side-item">Users</Link>
        </div>
    )
}