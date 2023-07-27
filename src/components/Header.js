
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
export default function Header() {
    const cookie= new Cookies();
    const token = cookie.get("Bearer");
/**
 * The function "logout" removes the "email" item from the local storage and redirects the user to the
 * homepage.
 */
 async  function logout() {
        await axios.post("http://127.0.0.1:8000/api/logout",null,{
          headers:{
              Authorization:"Bearer" + token,
          },
         }
  );
  cookie.remove("Bearer");
  window.location.pathname="/"
        }
    return (
        <nav className="d-flex p-2 shadow">
            <ul className="d-flex">
                <li >
                    <NavLink  to="/home" className="nav-item mr-1" >Home</NavLink>
                </li>
                <li >
                    <NavLink  to="/about" className="nav-item mr-1" >About</NavLink>
                </li>
            </ul>
            <div >
                
                    <div className="d-flex">
                        {!token ?
                        <>
                            <Link to="/register" className="register mr-1"> Register</Link>
                        <Link to="/login" className="register mr-1"> Login</Link>
                        </>
                        
                        : (
                            <>
                            <Link to="/dashboard" className="register mr-1"> Dashboard</Link>
                            <div className="register" onClick={logout}> Logout</div>
                            </>
                        )}
                    </div>
            </div>
        </nav>
    )
}
