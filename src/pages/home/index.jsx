import { useState, useEffect } from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import CountryCard from "../../components/countrycard";
import ImageSlider from "../../components/imageslider";
import SocialLogin from "../../components/sociallogin";
import CustomButton from "../../components/button";
import FloatingButton from "../../components/floatingbutton";
import { useDispatch, useSelector } from "react-redux";
import { getCountryList } from "../../services/api";
import FilterTabs from "../../components/filtertabs";
import Slider from "../../components/slider";

export default function HomePage() {
  const dispatch = useDispatch();
  const { countryList, sliderImages } = useSelector((state) => state.auth);
  const [region, setRegion] = useState("all");
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    dispatch(getCountryList());
  }, []);

  const filteredCountries =
    region === "all"
      ? countryList
      : countryList.filter((c) => c.region === region) ?? [];

  const images = [
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200/ff7f7f",
    "https://via.placeholder.com/400x200/77dd77",
    "https://via.placeholder.com/400x200/779ecb",
  ];
  return (
    <Container className="py-4 mt-4">
      <Row>
        <Col xs={9}>
          <h2 className="fw-light-bold text-left">Countries</h2>
        </Col>
        <Col>
          <FilterTabs setRegion={setRegion} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} className="position-relative">
          <div className="position-absolute top-0 start-0 end-0 border border-top-4 border-dark mx-2" />
        </Col>
        <Col>
          <h1 className="fw-bold text-center" style={{ fontSize: "4rem" }}>
            WELCOME
          </h1>
        </Col>
        <Col xs={12} md={4} className="position-relative">
          <div className="position-absolute bottom-0 start-0 end-0 border border-bottom-4 border-dark mx-2" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4} className="order-1 order-md-2">
          <Slider image={(sliderImages?.length && sliderImages[5]) ?? ''} />
        </Col>
        <Col md={8}  className="order-2 order-md-1 mt-2 mt-md-0">
        <ImageSlider images={sliderImages ?? []} />
        </Col>
      </Row>
      <Row className="mt-4">
        {filteredCountries?.slice(0, visible).map((country, index) => (
          <Col md={6} key={index}>
            <CountryCard
              name={country.name}
              region={country.region}
              flag={country.flag}
            />
          </Col>
        ))}
      </Row>
      {visible < filteredCountries?.length && (
        <div className="text-center mt-3">
          <CustomButton
            label="Load more"
            onClick={() => setVisible(visible + 10)}
          />
        </div>
      )}
      <br />
      <SocialLogin />
      <Row className="justify-content-center mt-5">
        <h6 className="text-center">
          Example@email.com
          <br />
          Copyright &copy; 2020 Name. All rights reserved.
        </h6>
      </Row>
      <FloatingButton />
    </Container>
  );
}
