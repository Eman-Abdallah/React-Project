import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { User } from "../../Context/Context";
import Loading from "../../../components/Loading";
import Cookies from "universal-cookie";
export default function PersistLogin(){
    //get current user
    const tokenContext= useContext(User);
    const token= tokenContext.auth.token;
    const[loading,setLoading]=useState(true)
    // cookie
   const cookie= new Cookies();
    const getToken=cookie.get("Bearer")
    // send refresh token
/* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
used to send a refresh token to the server to get a new access token. */
    useEffect(()=>{
    async function refresh(){
        try{
          await axios.post("http://127.0.0.1:8000/api/refresh", null ,{
            headers:{
                Authorization:"Bearer "+ getToken
            }
          })
          .then((data)=> {
          cookie.set("Bearer",data.data.token)
          tokenContext.setAuth((prev)=>{return{ userDetails:data.data.user ,token:data.data.token}
        })}
        )}
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false)
        }
    }
    !token ? refresh() : setLoading(false)
},[]);
return(
   loading ?   <Loading/> : <Outlet/>
)
}