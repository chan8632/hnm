import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const LoginPage = ({ setAuthenticate }) => {
  // const [loginId, setLoginId] = useState(null);
  // const [loginPassword, setLoginPassword] = useState(null);
  const navigate = useNavigate();
  // const onChangeId = (event) => {
  //   setLoginId(event.target.value);
  // };
  // const onChangePassword = (event) => {
  //   setLoginPassword(event.target.value);
  // };
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
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
