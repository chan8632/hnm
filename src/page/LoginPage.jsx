import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginId, setLoginId] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const navigate = useNavigate();
  const onChangeId = (event) => {
    setLoginId(event.target.value);
  };
  const onChangePassword = (event) => {
    setLoginPassword(event.target.value);
  };
  const onLoginSubmit = (event) => {
    event.preventDefault();
    if (loginId.match(/@/g) && loginPassword.length > 0) {
      navigate("/");
    }
    console.log(loginId);
    console.log(loginPassword);
  };
  return (
    <div className="login-page">
      <form onSubmit={onLoginSubmit} className="login-form">
        <label htmlFor="email">Email address</label>
        <input
          onChange={onChangeId}
          id="email"
          type="text"
          placeholder="Enter email"
          value={loginId}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={onChangePassword}
          id="password"
          type="password"
          placeholder="Password"
          value={loginPassword}
        />
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
