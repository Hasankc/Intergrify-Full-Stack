import { Row, Col } from "react-bootstrap";

const UserData = ({ user }) => {
    return (
        <Row>
            <Col>
                <ul>
                    <li>name: {user.name}</li>
                    <li>username: {user.username}</li>
                    <li>email: {user.email}</li>
                    <li>phone: {user.phone}</li>
                    <li>address:
                        <ul>
                            <li>street: {user.address.street}</li>
                            <li>street: {user.address.suite}</li>
                            <li>street: {user.address.city}</li>
                            <li>street: {user.address.zipcode}</li>
                        </ul>
                    </li>
                </ul>
            </Col>
        </Row>
    )
} 
        
export default UserData;
