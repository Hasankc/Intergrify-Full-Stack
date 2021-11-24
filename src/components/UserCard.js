import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserCard = ({ name, userName, web, id }) => {
    const navigate = useNavigate();

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   @{userName}
                   <br />
                   <a href={"http://" + web} target="_blank" rel="noreferrer">{web}</a>
                </Card.Text>
                <Button onClick={() => navigate("" + id)} variant="primary">More details</Button>
            </Card.Body>
        </Card>
    )
}

export default UserCard;
