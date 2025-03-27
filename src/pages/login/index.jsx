import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles.css";
import { login } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import SocialLogin from "../../components/sociallogin";

const TextInput = ({ type, placeholder }) => (
  <Form.Control
    type={type}
    placeholder={placeholder}
    className="border border-dark shadow-none p-2 my-2"
    style={{
      fontSize: "1rem",
      fontWeight: "bold",
      borderRadius: 0,
      borderWidth: 3,
    }}
  />
);

const Checkbox = ({ label }) => (
  <Form.Group className="d-flex align-content-center my-1">
    <Form.Check
      type="checkbox"
      onChange={(e) => {
        e.target.style.backgroundColor = e.target.checked ? "black" : "white";
        e.target.style.backgroundImage = e.target.checked
          ? 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M20.285 6.321l-1.412-1.414-9.151 9.154-4.24-4.242-1.415 1.414 5.655 5.657z"/></svg>\')'
          : "none";
        e.target.style.backgroundSize = "contain";
        e.target.style.backgroundPosition = "center";
        e.target.style.backgroundRepeat = "no-repeat";
        e.target.style.boxShadow = "none";
        e.target.style.border = "1px solid black";
        e.target.style.borderRadius = 0;
      }}
    />
    <Form.Label
      className="fw-bold"
      style={{ fontSize: "1rem", color: "black" }}
    >
      &nbsp;&nbsp;{label}
    </Form.Label>
  </Form.Group>
);

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center bg-dark"
    >
      <Row className="w-100 h-100">
        <Col
          className="d-flex align-items-center justify-content-center bg-white text-white"
          md={6}
        >
          <div className="text-center w-75" style={{ maxWidth: 400 }}>
            <h2 className="fw-bold text-dark">Sign In</h2>
            <p className="text-muted">
              <span className="fw-bold">New user?</span>{" "}
              <a href="/" className="text-primary">
                Create an account
              </a>
            </p>
            <Form>
              <TextInput type="text" placeholder="Username or email" />
              <TextInput type="password" placeholder="Password" />
              <Checkbox label="Keep me signed in" />
              <Button
                className="w-100 mt-1"
                style={{ backgroundColor: "#333", borderColor: "#333", borderRadius: 0 }}
              >
                Sign In
              </Button>
            </Form>
            <div className="text-center social-login text-dark">
              <p className="mt-3">Or Sign In With</p>
              <SocialLogin />
            </div>
          </div>
        </Col>
        <Col
          className="d-none d-md-flex align-items-center justify-content-center bg-white text-white"
          md={6}
        >
          <div className="illustration"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
