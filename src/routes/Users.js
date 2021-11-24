import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => setUsers(users))
        .catch(err => console.error(err)), []);

    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4 mb-5">
            {users.map(user => {
                return (
                    <Col key={user.name}>
                        <UserCard name={user.name} />
                    </Col>
                )
            })}
        </Row>
    )
} 

export default Users;
