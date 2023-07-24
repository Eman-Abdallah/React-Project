import { useEffect, useState } from "react";
import axios from "axios";
export default function Form(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rPass, setRpass] = useState('');
    const [accept, setAccept] = useState(false);
    const [emailError, setEmailerror] = useState('');
    const styleRegister={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    const formStyle={
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        width: '500px'
    }
    const buttonStyle={
        width:"100%",
        marginTop:"20px",
        justifyContent: 'center',
    }
    useEffect(()=>{
        setName(props.name)
        setEmail(props.email)
    },[props.name,props.email])

 /**
  * The function `submit` is an asynchronous function that is triggered when a form is submitted, and
  * it performs validation on the form inputs before sending a POST request to a registration API
  * endpoint.
  * @param e - The parameter `e` is an event object that is passed to the `submit` function. It is
  * typically used to prevent the default behavior of a form submission, which is to refresh the page.
  */
    async function submit(e) {
        let flag = true;
        e.preventDefault();
        setAccept(true)
        if (name === '' || pass.length < 8 || rPass !== pass) {
            flag = false;
        } else {
            flag = true;
        }
        try {
            if (flag) {
                //send data
                let res = await axios.post(`http://127.0.0.1:8000/api/${props.endPoints}`, {
                    name: name,
                    email: email,
                    password: pass,
                    password_confirmation: rPass
                });
                if (res.status === 200) {
                    props.hasLocalStorage &&  window.localStorage.setItem("email", email);
                    window.location.pathname = `/${props.navigate}`
                }
            }
        } catch (err) {
            setEmailerror(err.response.status);
        }

    }

    return (
        <div className="parent">
            <div className="sign" style={props.styleRegister && styleRegister}>
                <form onSubmit={submit} style={props.formStyle && formStyle}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Name.." value={name} onChange={(e) => setName(e.target.value)} />
                    {name === '' && accept && <p className="error">User Name is required</p>}
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Email.." required value={email} onChange={(e) => setEmail(e.target.value)} />
                    {accept && emailError
                        === 422 && <p className="error">This email is already been taken
                        </p>}
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password.." value={pass} onChange={(e) => setPass(e.target.value)} />
                    {pass.length < 8 && accept && <p className="error">Password must be more than 8 letters</p>}
                    <label htmlFor="repeat">Repeat Password:</label>
                    <input type="password" id="repeat" placeholder="Repeat Password.." value={rPass} onChange={(e) => setRpass(e.target.value)} />
                    {rPass !== pass && accept && <p className="error">Password does not match</p>}
                    <button type="submit" className="register" style={props.buttonStyle && buttonStyle}> {props.button}</button>
                </form>
            </div>
        </div>
    )
}