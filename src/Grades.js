import { CardDeck, Card } from "react-bootstrap";

export default function Grades({ restaurant }) {
  return (
    <>
      <p className="h5 mt-5">Ratings</p>
      <hr />
      <CardDeck>
        {restaurant.grades.map((e, i) => {
          return (
            <Card key={i}>
              <Card.Header>Grade: {e.grade}</Card.Header>
              <Card.Body>
                <Card.Text>
                  Completed: {new Date(e.date).toLocaleDateString("en-US")}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardDeck>
    </>
  );
}
