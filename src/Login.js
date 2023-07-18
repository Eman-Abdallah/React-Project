
import { useState } from "react";
import axios from "axios";
export default function Login(){

        const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');
        const[accept,setAccept]= useState(false);
        const[emailError,setEmailerror]=useState('');
        
     async   function submit(e) {
            let flag=true;
            e.preventDefault();
            setAccept(true)
                if(pass.length < 8 ){
            flag=false;
        }else{
            flag=true;
        }
        try{
    
            if(flag){
                //send data
            let res=await axios.post("http://127.0.0.1:8000/api/login",{
                    email:email,
                    password:pass,
                });
                if(res.status===200){
                    window.localStorage.setItem("email",email);
                    window.location.pathname="/"
                }
            }
        }catch(err){
            setEmailerror(err.response.status);
        }
        }
    
        return (
            <div className="sign">
                <form onSubmit={submit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email.." required value={email} onChange={(e) => setEmail(e.target.value)} />
                    {accept && emailError 
                    === 422 && <p className="error">This email is already been taken
                        </p>}
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password.." value={pass} onChange={(e) => setPass(e.target.value)} />
                    {pass.length<8 && accept && <p className="error">Password must be more than 8 letters</p>}
                    <button type="submit" className="register"> Login</button>
                </form>
            </div>
        )
    
}