import UserCard from "../components/UserCard";

const Users = () => {
    const users = ["Hasan", "Tatiana", "Alisher"];

    return (
        <div>
            <h1>Here will be many user cards</h1>
            { users.map(userName => <UserCard key={userName} name={userName} />) }
        </div>
    )
} 

export default Users;
