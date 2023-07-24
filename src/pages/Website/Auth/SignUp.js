
import Header from "../../../components/Header"
import Form from "../../../components/Form"
export default function SignUp() {


    return (
        <div >
            <Header />
            <Form button="Register" endPoints="register" hasLocalStorage="true" navigate="" styleRegister={true} formStyle={true}/>
        </div>
    )
}