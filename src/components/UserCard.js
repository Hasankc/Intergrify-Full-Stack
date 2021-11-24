import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserCard = ({ name }) => {
    const navigate = useNavigate();

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button onClick={() => navigate(name)} variant="primary">More details</Button>
            </Card.Body>
        </Card>
    )
}

export default UserCard;
