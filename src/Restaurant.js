import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import Map from "./Map";
import Grades from "./Grades";
import InfoCard from "./InfoCard";

export default function Restaurant() {
  let { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://web422-assignment-one.herokuapp.com/api/restaurants/${id}`)
      // parse the response message
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.hasOwnProperty("_id")) {
          setRestaurant(data);
        } else {
          setRestaurant(null);
        }
      })
      // error handler
      .catch((err) => console.error("Unable to load restaurant data:", err));
  }, [id]);

  if (loading) {
    return (
      <Container>
        <InfoCard text="Loading Restaurant" />;
      </Container>
    );
  }

  if (!restaurant) {
    return (
      <Container>
        <InfoCard text="No Restaurants Found" />;
      </Container>
    );
  }

  return (
    <Container>
      <InfoCard
        title={restaurant.name}
        text={`${restaurant.address.building} ${restaurant.address.street}`}
      />
      <Map restaurant={restaurant} />
      <Grades restaurant={restaurant} />
    </Container>
  );
}
