import { useNavigate } from "react-router-dom";

const UserCard = ({ name }) => {
    const navigate = useNavigate();

    return (
        <div>
            <h3>User card for {name}</h3>
            <button onClick={() => navigate(name)}>get details</button>
        </div>
    )
}

export default UserCard;
