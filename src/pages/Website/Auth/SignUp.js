
import Header from "../../../components/Header"
import { useContext, useState } from "react";
import { User } from "../../Context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rPass, setRpass] = useState('');
    const [accept, setAccept] = useState(false);
    const [emailError, setEmailError] = useState(false);
    //cookie
    const cookie = new Cookies()
    
    const userShow = useContext(User)
    const nav = useNavigate()
    async function submit(e) {
        e.preventDefault();
        setAccept(true)
        try {
                //send data
                let res = await axios.post(`http://127.0.0.1:8000/api/register`, {
                    name: name,
                    email: email,
                    password: pass,
                    password_confirmation: rPass
                });            
                const token=res.data.data.token
                cookie.set("Bearer",token);
                const userDetails= res.data.data.user
                userShow.setAuth({token, userDetails})
                nav("/dashboard")
            
        } catch (err) {
               if (err.response.status === 422) {
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
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Name.." value={name} onChange={(e) => setName(e.target.value)} />
                    {name === '' && accept && <p className="error">User Name is required</p>}
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email.." required value={email} onChange={(e) => setEmail(e.target.value)} />
                    {accept && emailError && <p className="error">This email is already been taken
                        </p>}
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password.." value={pass} onChange={(e) => setPass(e.target.value)} />
                    {pass.length < 8 && accept && <p className="error">Password must be more than 8 letters</p>}
                    <label htmlFor="repeat">Repeat Password:</label>
                    <input type="password" id="repeat" placeholder="Repeat Password.." value={rPass} onChange={(e) => setRpass(e.target.value)} />
                    {rPass !== pass && accept && <p className="error">Password does not match</p>}
                    <button type="submit" className="register" > Register</button>
                </form>
            </div>
        </div>
        </div>
    )
}