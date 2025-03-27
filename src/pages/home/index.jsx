import { useState, useEffect } from "react";
import "./styles.css";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import CountryCard from "../../components/countrycard";
import ImageSlider from "../../components/slider";
import SocialLogin from "../../components/sociallogin";

const FilterTabs = ({ setRegion }) => (
  <Nav
    className="justify-content-end mb-3"
    variant="underline"
    defaultActiveKey="all"
  >
    <Nav.Item>
      <Nav.Link
        eventKey="all"
        className="text-dark fw-bold"
        onClick={() => setRegion("all")}
      >
        All
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link
        eventKey="asia"
        className="text-dark"
        onClick={() => setRegion("Asia")}
      >
        Asia
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link
        eventKey="europe"
        className="text-dark"
        onClick={() => setRegion("Europe")}
      >
        Europe
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default function HomePage() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("all");
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries =
    region === "all" ? countries : countries.filter((c) => c.region === region);

  return (
    <Container className="py-4">
      <Row className="mb-3">
        <Col>
          <h2 className="fw-bold text-center">WELCOME</h2>
        </Col>
      </Row>
      <FilterTabs setRegion={setRegion} />
      <Row>
        <Col md={8}>
          <ImageSlider />
        </Col>
        <Col md={4}>
          <ImageSlider />
        </Col>
      </Row>
      <Row className="mt-4">
        {filteredCountries.slice(0, visible).map((country, index) => (
          <Col md={6} key={index}>
            <CountryCard
              name={country.name}
              region={country.region}
              flag={country.flag}
            />
          </Col>
        ))}
      </Row>
      {visible < filteredCountries.length && (
        <div className="text-center mt-3">
          <Button variant="dark" onClick={() => setVisible(visible + 10)}>
            Load more
          </Button>
        </div>
      )}
      <SocialLogin />
    </Container>
  );
}
