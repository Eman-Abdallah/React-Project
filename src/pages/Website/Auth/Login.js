

import Header from "../../../components/Header"
import { useContext, useState } from "react";
import { User } from "../../Context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
export default function SignUp() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [accept, setAccept] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const userShow = useContext(User)
        //cookie
    const cookie= new Cookies();
        
    const nav = useNavigate()
    async function submit(e) {
        e.preventDefault();
        setAccept(true)
        try {
                //send data
                let res = await axios.post("http://127.0.0.1:8000/api/login", {
                    email: email,
                    password: pass,
                });            
                const token=res.data.data.token
                cookie.set("Bearer",token);
                const userDetails= res.data.data.user
                userShow.setAuth({token, userDetails})
                nav("/dashboard")
            
        } catch (err) {
               if ( err.response.status === 401) {
                   setEmailError(true)
                }
            setAccept(true)
        }

    }
    return (
        <div >
            <Header />
            {/* <Form button="Register" endPoints="register" hasLocalStorage="true" navigate="" styleRegister={true} formStyle={true}/> */}
            <div className="parent">
            <div className="sign" >
                <form onSubmit={submit} >
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email.." required value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password.." value={pass} onChange={(e) => setPass(e.target.value)} />
                    {pass.length < 8 && accept && <p className="error">Password must be more than 8 letters</p>}
                    <button type="submit" className="register" > Login</button>
                    {accept && emailError && <p className="error">Password or Email are not right
                        </p>}
                </form>
            </div>
        </div>
        </div>
    )
}
