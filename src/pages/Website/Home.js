import Header from "../../components/Header"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../Context/Context";
import Card from "../../components/Card";
export default function Home(){
    const [products, setProduct] = useState([]);
    // set variable to increase when delete user to add to use effect to update data immediately
    const [useS, setRun] = useState(0);
    const tokenContext= useContext(User);
    const token= tokenContext.auth.token;

/* used to fetch user data from the specified API endpoint and update the `users` state variable. */
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/product/show",{
            headers:{
                Accept:"application/json",
                Authorization:"Bearer "+ token
            }
        })
            .then((data) => setProduct(data.data))
            .catch((err)=> console.log(err))
    }, [useS])
    const show=products.map((el , index)=> (<Card key={index} title={el.title} desc={el.description} img={el.image} />))
    return (
        <div>
            <Header/>
            <div style={{display:'flex' , justifyContent:'space-between' , flexWrap:'wrap'}}>
       { show}
        </div>
        </div>
    )
}


