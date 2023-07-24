import { Link } from "react-router-dom";

export default function Topbar(){
    return(
        <div className="d-flex p-2 shadow">
            <h1>Store</h1>
            <Link to={"/"} className="register mr-0" > Go To Website</Link>
        </div>
    )
}