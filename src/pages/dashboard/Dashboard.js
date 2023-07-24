import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

export default function Dashboard(){
return(
    <div> 
        <Topbar/>
        <div className="content-flex">
            <Sidebar/>
            <div className="dashboard p-2">        
            <Outlet/>
            </div>
        </div>
    </div>
)
}
    /* In React Router, the `<Outlet/>` component is used as a placeholder for the child routes
    defined in the parent component. It is typically used in the parent component to render
    the child routes based on the current URL. */