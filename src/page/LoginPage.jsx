import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const LoginPage = () => {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인 됨. false면 로그인 안됨.
  const [loginId, setLoginId] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const navigate = useNavigate();
  const onChangeId = (event) => {
    setLoginId(event.target.value);
  };
  const onChangePassword = (event) => {
    setLoginPassword(event.target.value);
  };
  const loginUser = (event) => {
    event.preventDefault();
    console.log("login");
    // if (loginId.match(/@/g) && loginPassword.length > 0) {
    //   navigate("/");
    // }
    // console.log(loginId);
    // console.log(loginPassword);
  };
  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
