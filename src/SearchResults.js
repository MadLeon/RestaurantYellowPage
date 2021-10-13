import { Table } from "react-bootstrap";
import { useHistory } from "react-router";

export default function SearchResults({ restaurants }) {
  let history = useHistory();
  if (!restaurants) return null;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Borough</th>
          <th>Cuisine</th>
        </tr>
      </thead>

      <tbody>
        {restaurants.map((e) => (
          <tr
            key={e._id}
            onClick={() => {
              history.push(`/restaurant/${e._id}`);
            }}
          >
            <td>{e.name}</td>
            <td>
              {e.address.building} {e.address.street}
            </td>
            <td>{e.borough}</td>
            <td>{e.cuisine}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
