import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Pagination } from "react-bootstrap";
import queryString from "query-string";

import SearchResults from "./SearchResults";
import InfoCard from "./InfoCard";

export default function Restaurants() {
  let location = useLocation();
  const [restaurants, setRestaurants] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 10;

  useEffect(() => {
    setLoading(true);
    let url = `https://web422-assignment-one.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}`;
    let borough = queryString.parse(location.search).borough;
    if (borough) url += `&borough=${borough}`;
    fetch(url)
      // parse the response message
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.length > 0) {
          setRestaurants(data);
        } else {
          setRestaurants(null);
        }
      })
      // error handler
      .catch((err) => console.error("Unable to load restaurant data:", err));
  }, [location, page]);

  function previousPage() {
    if (page > 1) setPage((prev) => prev - 1);
  }

  function nextPage() {
    setPage((prev) => prev + 1);
  }

  if (loading) {
    return (
      <Container>
        <InfoCard text="Loading Restaurant" />
      </Container>
    );
  }

  if (!restaurants) {
    return (
      <Container>
        <InfoCard text="No Restaurants Found" />
      </Container>
    );
  }

  return (
    <Container>
      <InfoCard
        title="Restaurant List"
        text="Full list of restaurants. Optionally sorted by borough"
      />
      <SearchResults restaurants={restaurants} />
      <Pagination>
        <Pagination.Prev onClick={previousPage} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={nextPage} />
      </Pagination>
    </Container>
  );
}
