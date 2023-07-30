import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../Context/Context";

export default function Products(){
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
    async function deleteProduct(id) {
        try {
            const res = await axios.delete(`http://127.0.0.1:8000/api/product/delete/ ${id}`,{
                headers:{
                    Authorization:"Bearer "+ token
                }
            });
            if (res.status === 200) {
                setRun((prev) => prev + 1);
            }
        } catch {
            console.log("none");
        }
    }
    const showProduct = products.map((product, index) =>
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>
            <Link to={`${product.id}`}>
                <i className="fa-solid fa-pen-to-square mr-1 text-primary" ></i>
            </Link>
            <i className="fa-solid fa-trash text-danger"
             onClick={() => deleteProduct(product.id)}
             ></i>
        </td>
    </tr>)
return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {showProduct}
            </tbody>
        </table>
    </div>
)
}