import Form from "../../../components/Form"
export default function CreateUser(){
    return(
        <div className="parent">
        <h1>
            Create User
        </h1>
        <Form button="Create" buttonStyle={true} endPoints="user/create" navigate="dashboard/users"/>
        </div>
    )
}