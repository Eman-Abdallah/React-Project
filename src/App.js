import { Routes ,Route} from "react-router-dom"
//dashboard
import Dashboard from "./pages/dashboard/Dashboard"
//users
import Users from "./pages/dashboard/users/Users"
import UpdateUser from "./pages/dashboard/users/UpdateUser"
import CreateUser from "./pages/dashboard/users/CreateUser"
//products
import Products from "./pages/dashboard/Products/Products"
import CreateProduct from "./pages/dashboard/Products/CreateProduct"
import UpdateProduct from "./pages/dashboard/Products/UpdateProduct"
//website
import Home from "./pages/Website/Home"
import About from "./pages/Website/About"
//auth
import SignUp from "./pages/Website/Auth/SignUp"
import Login from "./pages/Website/Auth/Login"
import RequiredAuth from "./pages/Website/Auth/RequiredAuth"
import PersistLogin from "./pages/Website/Auth/PresistLogin"
export default function App(){
  return(
    <div className="parent">    
      <Routes>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route element={<PersistLogin/>}>
        <Route element={<RequiredAuth/>}>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="users" element={<Users/>} />
          <Route path="user/create" element={<CreateUser/>}/>
          <Route path="users/:id" element={<UpdateUser/>}/>
          <Route path="products" element={<Products/>} />
          <Route path="product/create" element={<CreateProduct/>}/>
          <Route path="products/:id" element={<UpdateProduct/>}/>
          </Route>
        </Route>
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