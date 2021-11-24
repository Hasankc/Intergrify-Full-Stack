import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserData from "../components/UserData";

const UserDetails = () => {
    const param = useParams();
    const userId = param.userId;
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + userId)
        .then(response => response.json())
        .then(user => setUser(user))
        .catch(err => console.error(err))
    }, [userId]);

    if (user) {
        return (
            <div>
                <h1>Here will be details of a user {user.name}</h1>
                <UserData user={user} />
            </div>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }
}

export default UserDetails;