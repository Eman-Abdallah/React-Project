import { useState } from "react";
import axios from "axios";
export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rPass, setRpass] = useState('');
    const[accept,setAccept]= useState(false);
    const[emailError,setEmailerror]=useState('');
    
 async   function submit(e) {
        let flag=true;
        e.preventDefault();
        setAccept(true)
            if(name === '' ||pass.length < 8 || rPass !== pass){
        flag=false;
    }else{
        flag=true;
    }
    try{

        if(flag){
            //send data
        let res=await axios.post("http://127.0.0.1:8000/api/register",{
                name:name,
                email:email,
                password:pass,
                password_confirmation:rPass
            });
            if(res.status===200){
                window.localStorage.setItem("email",email);
                window.location.pathname="/home"
            }
        }
    }catch(err){
        setEmailerror(err.response.status);
    }
    
    }

    return (
        <div className="sign">
            <form onSubmit={submit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Name.." value={name} onChange={(e) => setName(e.target.value)} />
                {name==='' && accept && <p className="error">User Name is required</p>}
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Email.." required value={email} onChange={(e) => setEmail(e.target.value)} />
                {accept && emailError 
                === 422 && <p className="error">This email is already been taken
                    </p>}
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password.." value={pass} onChange={(e) => setPass(e.target.value)} />
                {pass.length<8 && accept && <p className="error">Password must be more than 8 letters</p>}
                <label htmlFor="repeat">Repeat Password:</label>
                <input type="password" id="repeat" placeholder="Repeat Password.." value={rPass} onChange={(e) => setRpass(e.target.value)} />
                {rPass!==pass && accept && <p className="error">Password does not match</p>}
                <button type="submit" className="register"> Register</button>
            </form>
        </div>
    )
}