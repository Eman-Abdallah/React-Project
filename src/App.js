import { Routes ,Route} from "react-router-dom"
import SignUp from "./SignUp"
import Login from "./Login"

import Home from "./Home"
import About from "./About"
import Dashboard from "./Dashboard"
import Users from "./Users"
import UpdateUser from "./UpdateUser"
export default function App(){
  return(
    <div className="parent">    
      <Routes>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="users" element={<Users/>} />
          <Route path="users/:id" element={<UpdateUser/>}/>
          </Route>
      </Routes>      
    </div>
  )
}
    // The code is defining the routes for a React application using the `react-router-dom` library. 
     /* The code is defining a nested route for the "/dashboard" path. When the "/dashboard" path is
    matched, the component `<Dashboard/>` will be rendered. Within the `<Dashboard/>` component,
    there is another nested route defined for the "/users" path. When the "/users" path is
    matched, the component `<Users/>` will be rendered. The `exact` prop is used to ensure that
    the "/users" path is only matched exactly and not as a subpath of other routes. */