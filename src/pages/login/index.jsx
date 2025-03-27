import { Container, Row, Col, Form } from "react-bootstrap";
import "./styles.css";
import { loginValue } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import SocialLogin from "../../components/sociallogin";
import CustomButton from "../../components/button";
import TextInput from "../../components/textinput";
import Checkbox from "../../components/checkbox";
import { useAuth } from "../../services/authproviders";
import { REGEX } from "../../constants/constants";

const Login = () => {
  const dispatch = useDispatch();
  const { login } = useAuth()
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(credentials).some((item) => item === '')) return alert('Username or Password must not be empty!');
    if (REGEX.PASSWORD.test(credentials.password)) {
        dispatch(loginValue(credentials));
        login(credentials.email)
    } else {
        alert('Invalid Username or Password')
    }
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
              <TextInput type="text" placeholder="Username or email" value={credentials.email} name='email' onChange={handleChange} />
              <TextInput type="password" placeholder="Password"  value={credentials.password} name='password' onChange={handleChange} />
              <Checkbox label="Keep me signed in" />
              <CustomButton label="Sign In" onClick={handleSubmit} className='w-100 mt-1' />
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
