
import { Link } from "react-router-dom"
export default function Header(){
    function logout(){
        window.localStorage.removeItem('email')
        window.location.pathname="/"
    }
    return(
        <nav className="d-flex p-2">
            <ul className="d-flex">
                <li >
                    <Link to="/home" className="mr-1" >Home</Link>
                </li>
                <li >
                    <Link to="/about" >About</Link>
                </li>
            </ul>
            <div >
          { !window.localStorage.getItem('email')?
          ( <div className="d-flex">
          <Link to="/register" className="register mr-1"> Register</Link>
            <Link to="/login" className="register"> Login</Link>
            </div>)
        : (<div className="register" onClick={logout}> Logout</div>)}
            </div>
        </nav>
    )
}