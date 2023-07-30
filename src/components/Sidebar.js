import { NavLink } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="sidebar p-2">
            <NavLink  to="/dashboard/users" className="side-item">
            <i className="fa-solid fa-users mr-1"></i>
                Users</NavLink>
            <NavLink   to="/dashboard/user/create" className="side-item">
            <i className="fa-solid fa-user-plus mr-1"></i>
                New User</NavLink>
            <NavLink   to="/dashboard/products" className="side-item">
            <i className="fa-brands fa-product-hunt mr-1"></i>
                Products</NavLink>
            <NavLink   to="/dashboard/product/create" className="side-item">
            <i className="fa-solid fa-square-plus mr-1"></i>
              Create Product</NavLink>
        </div>
    )
}