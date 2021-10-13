import { Card } from "react-bootstrap";

export default function InfoCard({ title, text }) {
  return (
    <Card className="mt-5 mb-5">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Header>
    </Card>
  );
}
