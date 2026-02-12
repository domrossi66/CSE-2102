import Card from 'react-bootstrap/Card';
function ListCard({ items }) {
    return items.map(item => (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
                {item.position}
            </Card.Text>
        </Card.Body>
    </Card>
    ));
}
export default ListCard;