import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Users() {
    const [users, setUser] = useState([]);
    // set variable to increase when delete user to add to use effect to update data immediately
    const [useS, setRun] = useState(0);

/* used to fetch user data from the specified API endpoint and update the `users` state variable. */
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/user/show")
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [useS])


/**
 * The function `deleteUser` is an asynchronous function that sends a DELETE request to a specified API
 * endpoint to delete a user with the given ID, and updates the state variable `run` if the request is
 * successful.
 * @param id - The `id` parameter is the unique identifier of the user that you want to delete.
 */
    async function deleteUser(id) {
        try {
            const res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/ ${id}`);
            if (res.status === 200) {
                setRun((prev) => prev + 1);
            }
        } catch {
            console.log("none");
        }
    }
/* The `showUser` variable is a JSX expression that maps over the `users` array and creates a table row
(`<tr>`) for each user in the array. */
    const showUser = users.map((user, index) =>
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`${user.id}`}>
                    <i className="fa-solid fa-pen-to-square mr-1 text-primary" ></i>
                </Link>
                <i className="fa-solid fa-trash text-danger" onClick={() => deleteUser(user.id)}></i>
            </td>
        </tr>)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showUser}
                </tbody>
            </table>
        </div>
    )
}