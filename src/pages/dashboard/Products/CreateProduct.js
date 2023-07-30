

import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../../Context/Context";
export default function CreateProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    console.log(image);
    const [accept, setAccept] = useState(false);
    const tokenContext= useContext(User);
    const token= tokenContext.auth.token;
    const nav = useNavigate()
    async function submit(e) {
        e.preventDefault();
        setAccept(true)
        try {
            const formData = new FormData();
            formData.append("title",title)
            formData.append("description",description)
            formData.append("image",image)
                //send data
                let res = await axios.post(`http://127.0.0.1:8000/api/product/create`, 
                
                   formData
                ,
                {
                    headers:{
                        Authorization:"Bearer "+ token
                    }
                });            
                nav("/dashboard/products")
            
        } catch (err) {
            console.log(err);
            setAccept(true)
        }

    }
    return (

            <div className="parent">
            <div className="sign new-user" >
            <h1>Create Product</h1>
                <form onSubmit={submit} className="new" >
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" placeholder="Title.." value={title} onChange={(e) => setTitle(e.target.value)} />
                    {title === '' && accept && <p className="error">Title is required</p>}
                    <label htmlFor="desc">Description:</label>
                    <input type="text" id="desc" placeholder="Description.." required value={description} onChange={(e) => setDescription(e.target.value)} />
                    {/* {accept  && description &&  <p className="error">This email is already been taken
                        </p>} */}
                    <label htmlFor="image">Upload Image:</label>
                    <input type="file" id="image"   onChange={(e) => setImage(e.target.files.item(0))} />
                    {/* {pass.length < 8 && accept && <p className="error">Password must be more than 8 letters</p>} */}
                    <button type="submit" className="register" > Create Product</button>
                </form>
            </div>
        </div>
    )
}