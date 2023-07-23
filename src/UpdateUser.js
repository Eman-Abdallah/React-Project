import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form"

export default function UpdateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const id = window.location.pathname.split("/")[3];
    console.log(id);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setName(data[0].name);
                setEmail(data[0].email);
                console.log(name);
                console.log(email);
            });

    }, [])
    // async function submit(e) {
    //     let flag = true;
    //     e.preventDefault();
    //     setAccept(true)
    //     if (name === '' || pass.length < 8 || rPass !== pass) {
    //         flag = false;
    //     } else {
    //         flag = true;
    //     }
    //     try {
    //         if (flag) {
    //             //send data
    //             let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
    //                 name: name,
    //                 email: email,
    //                 password: pass,
    //                 password_confirmation: rPass
    //             });
    //             if (res.status === 200) {
    //                 window.localStorage.setItem("email", email);
    //                 window.location.pathname = "/dashboard/users"
    //             }
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }

    // }
    return(
        <div>
            
            <Form button='Update' name={name} email={email}/>
        </div>
    )
}