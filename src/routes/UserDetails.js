import { useParams } from "react-router-dom";
import UserData from "../components/UserData";

const UserDetails = () => {
    const param = useParams();
    const userId = param.userId;

    return (
        <div>
            <h1>Here will be details of a user with ID {userId}</h1>
            <UserData />
        </div>
    )
}

export default UserDetails;