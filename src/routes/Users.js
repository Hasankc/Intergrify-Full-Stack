import { Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Users = () => {
    const users = ["Hasan", "Tatiana", "Alisher"];

    return (
        <Row>
            {users.map(user => {
                return (
                    <Col key={user}>
                        <UserCard name={user} />
                    </Col>
                )
            })}
        </Row>
    )
} 

export default Users;
