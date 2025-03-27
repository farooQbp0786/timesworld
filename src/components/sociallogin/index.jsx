import { Container, Row, Col } from "react-bootstrap";

const SocialLogin = () => {
  return (
    <Container className="text-center social-login text-dark">
      <Row className="justify-content-center">
        {["google", "facebook-f", "linkedin-in", "twitter"].map((icon, index) => (
          <Col key={index} xs="auto">
            <div className="border border-1 rounded-circle border-dark p-2 d-flex justify-content-center">
              <i className={`fab fa-${icon} fa-md`}></i>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SocialLogin;
