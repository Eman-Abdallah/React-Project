import { useEffect, useState } from "react";
import Form from "../../../components/Form"

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

    },[])
    return(
        <div >
            <h1>Update User</h1>
            <Form button='Update' name={name} email={email} endPoints={`user/update/${id}`} navigate="dashboard/users"  buttonStyle={true}/>
        </div>
    )
}